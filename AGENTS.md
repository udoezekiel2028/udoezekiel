<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Shared site navigation and footer live in browser-safe site components mounted by the root route, so every local page has consistent branding.
- Reference page content is stored as structured local data and rendered through shared page templates; each content route owns its metadata.
- Page recreation is presentation-only: do not send forms or account credentials to the reference owner or imply unconnected services work.
