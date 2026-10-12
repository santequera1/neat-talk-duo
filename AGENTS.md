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

## Application architecture
- Use a shared site shell and language context in the root layout so language choice persists across client navigation.
- Keep translated business content in one browser-safe module so French and English pages share the same facts.
- Use separate content routes for services, sectors, about and contact so each page has its own metadata and direct URL.
- Keep the inquiry wizard entirely client-side and explicitly disclose that submissions are not sent until connected.
- Define all visual tokens and reusable presentation styles in src/styles.css so branding remains consistent across pages.
