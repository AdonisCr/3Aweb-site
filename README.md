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

---

## ⚠️ Point de vigilance : le proxy `/graphql`

`vercel.json` réécrit `/graphql` vers `https://admin.allianceactionsafrique.com/graphql`.

**Cet enregistrement DNS n'existe pas encore** (NXDOMAIN confirmé). Le proxy renvoie donc `502 Bad Gateway`.

### Règle à respecter

Tant que `admin.allianceactionsafrique.com` n'est pas configuré chez Wix :

- ❌ **NE PAS** définir `VITE_WPGRAPHQL_ENDPOINT=/graphql` dans Vercel → le site perdrait toutes ses données (502)
- ✅ Laisser `VITE_WPGRAPHQL_ENDPOINT=https://allianceactionsafrique.com/graphql` (URL absolue, fonctionnelle aujourd'hui)

### Séquence de mise en service (dans cet ordre)

1. Récupérer l'accès au compte **Wix propriétaire** du domaine (registrar = Wix, `ns12/13.wixdns.net`).
   Le compte Wix accessible actuellement ne liste pas ce domaine.
2. Créer l'enregistrement `A` : `admin` → `35.214.176.215` (IP SiteGround).
3. Activer le certificat SSL pour `admin.allianceactionsafrique.com` (Let's Encrypt chez SiteGround).
4. Vérifier : `curl https://admin.allianceactionsafrique.com/graphql` doit répondre `200` (pas `502`).
5. Seulement ensuite, basculer `VITE_WPGRAPHQL_ENDPOINT` sur `/graphql`.

Tant que l'étape 4 n'est pas validée, le proxy doit être considéré comme inactif.

---

## 🔐 En-têtes de sécurité

Vercel applique via `vercel.json` : CSP, X-Frame-Options (DENY), X-Content-Type-Options,
Referrer-Policy, Permissions-Policy, HSTS (`max-age=63072000`).

> HSTS volontairement **sans** `includeSubDomains` ni `preload` : le sous-domaine `admin`
> doit rester accessible en HTTP pendant la phase de bascule DNS.

Le site WordPress de production (`allianceactionsafrique.com`, nginx/SiteGround)
ne renvoie **aucun** de ces en-têtes. À corriger côté SiteGround (`.htaccess` ou
`wp-config.php`) — voir la section « WordPress » ci-dessus.

## 🔒 WordPress — en-têtes de sécurité à ajouter (SiteGround)

`allianceactionsafrique.com` est servi par nginx (SiteGround) et ne renvoie
**aucun** en-tête de sécurité. Le plus simple est un fichier `.htaccess`
à la racine WordPress (à faire via le File Manager de SiteGround) :

```apache
# --- En-têtes de sécurité ---
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
    Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"
    Header always set Strict-Transport-Security "max-age=63072000"
</IfModule>

# --- Forcer le HTTPS ---
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

⚠️ **Ne pas** ajouter de `Content-Security-Policy` côté WordPress tant que
`wp-admin` n'est pas testé : une CSP trop stricte peut casser l'éditeur
(Inline Scripts, TinyMCE, jQuery).

Pour une CSP « report-only » d'abord (aucun risque de casser le site) :

```apache
Header always set Content-Security-Policy-Report-Only "default-src 'self'; frame-ancestors 'self'; object-src 'none'; base-uri 'self'"
```

> `X-Frame-Options: SAMEORIGIN` (et non `DENY` comme sur Vercel) car WordPress
> a besoin d'afficher son propre contenu en iframe (prévisualisation, etc.).
