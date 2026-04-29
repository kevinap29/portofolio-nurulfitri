# Project Architecture

This portfolio is built with a modern, high-performance tech stack focused on developer experience and user-centric design.

## Tech Stack
- **Framework**: [SvelteKit 5](https://svelte.dev/) (utilizing Runes for reactivity)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Colors**: [OKLCH](https://oklch.com/) Color Space for consistent and accessible perception
- **Icons**: [Lucide Svelte](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Core Systems

### 1. Reactivity (Svelte 5 Runes)
The project heavily utilizes Svelte 5 Runes (`$state`, `$derived`, `$effect`) for efficient state management.
- **i18n State**: Managed in `src/lib/i18n.svelte`
- **Theme State**: Managed in `src/lib/theme.svelte`

### 2. Design System
The design follows a premium, minimalist aesthetic with:
- **Glassmorphism**: Subtle backdrops and blurs.
- **Bento Grid**: Structured layout for profile information and skills.
- **Responsive-First**: Every section is optimized for mobile, tablet, and desktop.

### 3. Data-Driven Content
All content is centralized in `src/lib/data/content.ts`. To update your experience, skills, or bio, you only need to edit this single file. This ensures consistency across the Home and Resume pages.
