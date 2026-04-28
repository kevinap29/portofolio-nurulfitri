# Deployment Specification: Vercel

This document defines the deployment strategy and configuration for publishing the Nurul Fitri Portfolio to Vercel.

## 1. Environment Strategy

- **Production**: Triggered automatically on every push or merge to the `main` branch.
- **Preview**: Triggered automatically for every Pull Request (PR) to provide a staging environment for review.

---

## 2. Platform Configuration

- **Platform**: [Vercel](https://vercel.com)
- **Framework Preset**: SvelteKit
- **Build Command**: `npm run build`
- **Output Directory**: Standard SvelteKit output (`.svelte-kit` handled by `@sveltejs/adapter-auto` or `@sveltejs/adapter-vercel`)
- **Node.js Version**: 20.x or latest stable

---

## 3. Deployment Workflow

### 3.1 Automated Deployment

1. Developer merges PR into `main`.
2. GitHub notifies Vercel via Webhook.
3. Vercel clones the `main` branch, runs `npm install` and `npm run build`.
4. Vercel deploys the build and updates the production domain alias.

---

## 4. Environment Variables

While the current portfolio is static, any future interactive features (e.g., contact form) will require environment variables.

- **Management**: Managed via Vercel Dashboard or `VERCEL_ADD_ENVIRONMENT_VARIABLE` tool.
- **Naming**: Use `PUBLIC_` prefix for variables that must be accessible in the browser.

---

## 5. Domain Configuration

- **Production Domain**: [Final production URL will be assigned here]
- **SSL/TLS**: Automatically managed by Vercel.
- **Redirection**: HTTP to HTTPS redirection enabled by default.
