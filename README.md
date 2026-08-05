# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Security

### Accepted risk: react-router (GHSA-qwww-vcr4-c8h2)

- Decision date: 2026-08-05
- Issue: react-router 7.12.0 - 8.3.0 flagged for a CSRF bypass in unstable RSC code paths.
- Decision: keep react-router-dom 7.18.2 (latest 7.x) instead of upgrading to 8.x.
- Rationale: this is a client-side SPA using `BrowserRouter` only; it does not use the unstable RSC APIs, so the advisory explicitly does not apply (`"This only affects your application if you are using the unstable RSC APIs"`). An 8.x major upgrade would be breaking without security benefit here.
- Compensating controls: Content-Security-Policy enforced via `vercel.json` headers.
- Risk accepted by: project owner.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
