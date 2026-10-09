import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/requests")({
  head: () => ({
    meta: [
      { title: "Project Requests | Udo Ezekiel" },
      { name: "description", content: "Private inbox for project requests and contact messages sent to Udo Ezekiel." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Project Requests | Udo Ezekiel" },
      { property: "og:description", content: "Private inbox for Udo Ezekiel's project requests." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RequestsPage,
});

type Row = { id: string; page: string; fields: unknown; created_at: string };

function RequestsPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    return () => data.subscription.unsubscribe();
  }, []);

  const load = async () => {
    const { data } = await supabase.from("form_submissions").select("*").order("created_at", { ascending: false });
    setRows((data as Row[]) ?? []);
  };

  useEffect(() => {
    if (!session) { setIsAdmin(null); return; }
    supabase.from("user_roles").select("role").eq("user_id", session.user.id).eq("role", "admin").maybeSingle()
      .then(({ data }) => { setIsAdmin(!!data); if (data) load(); });
  }, [session]);

  if (!ready) return <main className="min-h-[60vh]" />;
  if (!session) return <AuthForm />;

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="font-display text-3xl font-bold">Project requests</h1>
        <Button variant="outline" onClick={() => supabase.auth.signOut()}>Sign out</Button>
      </div>
      {isAdmin === false && <p className="text-muted-foreground">This account doesn't have access to requests.</p>}
      {isAdmin && rows.length === 0 && <p className="text-muted-foreground">No requests yet.</p>}
      <div className="space-y-4">
        {rows.map((r) => (
          <article key={r.id} className="rounded-lg border border-border bg-card p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
              <span className="font-semibold text-brand">/{r.page}</span>
              <span>{new Date(r.created_at).toLocaleString()}</span>
            </div>
            <dl className="grid gap-2 text-sm">
              {Object.entries((r.fields ?? {}) as Record<string, unknown>).map(([k, v]) => (
                <div key={k} className="grid gap-1 sm:grid-cols-[180px_1fr]">
                  <dt className="font-semibold">{k.replace(/\[\]$/, "")}</dt>
                  <dd className="whitespace-pre-wrap break-words">{Array.isArray(v) ? v.join(", ") : String(v)}</dd>
                </div>
              ))}
            </dl>
            <Button variant="ghost" size="sm" className="mt-3" onClick={async () => {
              if (!confirm("Delete this request?")) return;
              await supabase.from("form_submissions").delete().eq("id", r.id); load();
            }}>Delete</Button>
          </article>
        ))}
      </div>
    </main>
  );
}

function AuthForm() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setMsg("");
    const { error } = mode === "in"
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/requests` } });
    if (error) setMsg(error.message);
    else if (mode === "up") setMsg("Check your email to confirm your account, then sign in.");
  };
  return (
    <main className="mx-auto max-w-sm px-4 py-16">
      <h1 className="mb-6 font-display text-2xl font-bold">{mode === "in" ? "Sign in to view requests" : "Create your account"}</h1>
      <form onSubmit={submit} className="space-y-3">
        <Input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" required minLength={8} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" className="w-full">{mode === "in" ? "Sign in" : "Create account"}</Button>
      </form>
      {msg && <p className="mt-3 text-sm text-muted-foreground">{msg}</p>}
      <button type="button" className="mt-4 text-sm underline" onClick={() => setMode(mode === "in" ? "up" : "in")}>
        {mode === "in" ? "First time? Create your account" : "Already have an account? Sign in"}
      </button>
    </main>
  );
}
