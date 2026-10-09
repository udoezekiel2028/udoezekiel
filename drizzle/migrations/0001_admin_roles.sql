create type public.app_role as enum ('admin','user');
create table public.user_roles (id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null, role public.app_role not null, unique(user_id, role));
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());
create or replace function public.has_role(_user_id uuid, _role public.app_role) returns boolean language sql stable security definer set search_path = public as $$ select exists (select 1 from public.user_roles where user_id=_user_id and role=_role) $$;
create or replace function public.assign_owner_admin() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if lower(new.email) = 'udoezekiel2028@gmail.com' and new.email_confirmed_at is not null then
    insert into public.user_roles(user_id, role) values (new.id, 'admin') on conflict do nothing;
  end if;
  return new;
end $$;
create trigger on_auth_user_owner_admin after insert or update of email_confirmed_at on auth.users for each row execute function public.assign_owner_admin();
grant select, delete on public.form_submissions to authenticated;
create policy "Admins read submissions" on public.form_submissions for select to authenticated using (public.has_role(auth.uid(),'admin'));
create policy "Admins delete submissions" on public.form_submissions for delete to authenticated using (public.has_role(auth.uid(),'admin'));