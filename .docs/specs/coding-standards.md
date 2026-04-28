# Coding Standards: Svelte 5 + Runes & SvelteKit Best Practices

This document defines the coding standards and architectural patterns for the Nurul Fitri Portfolio project, ensuring a modern, high-performance, and type-safe codebase using Svelte 5.

## 1. Reactivity with Runes

We strictly use Svelte 5 Runes for all reactive logic. Svelte 4 legacy syntax (`$:`, `onMount`, etc.) is prohibited for reactive purposes.

### 1.1 State Management (`$state`)
- Use `$state()` for all mutable variables.
- Group related state into objects or classes where appropriate.
- **Avoid**: Plain `let` for values that need to be reactive in the UI.

```typescript
// ✅ Good
let count = $state(0);
let user = $state({ name: 'Nurul', role: 'Admin' });

// ❌ Bad
let count = 0; // Not reactive
```

### 1.2 Computed Values (`$derived`)
- Use `$derived()` for any value that depends on other state.
- Use `$derived.by()` for complex computations or logic blocks.
- **Avoid**: `$:` syntax or manual updates in functions.

```typescript
// ✅ Good
const fullName = $derived(`${firstName} ${lastName}`);
const filteredItems = $derived.by(() => {
    return items.filter(i => i.active);
});

// ❌ Bad
$: fullName = firstName + lastName;
```

### 1.3 Side Effects (`$effect`)
- Use `$effect()` for DOM manipulations, analytics, or syncing with external APIs.
- `$effect` replaces most use cases of `onMount` and reactive statements.
- Ensure cleanup by returning a function if necessary.

```typescript
// ✅ Good
$effect(() => {
    console.log('Count changed:', count);
    return () => console.log('Cleanup');
});
```

### 1.4 Component Inputs (`$props`)
- Use `$props()` to define all component inputs.
- Use destructuring with defaults for clean code.
- Use TypeScript interfaces for all props.

```typescript
// ✅ Good
interface Props {
    title: string;
    variant?: 'primary' | 'secondary';
}
let { title, variant = 'primary' }: Props = $props();
```

---

## 2. Component Architecture

### 2.1 Snippets & Render Tags
- Use `{#snippet ...}` and `{@render ...}` for local UI reuse within a component instead of creating many tiny sub-components.
- Use the `children` snippet for slot-like behavior.

### 2.2 Event Handling
- Use standard HTML attributes (e.g., `onclick`) instead of the legacy `on:click`.
- Use callback props for component-to-component communication instead of `createEventDispatcher`.

```svelte
<!-- ✅ Good -->
<button onclick={() => count++}>Increment</button>

<!-- ❌ Bad -->
<button on:click={increment}>Increment</button>
```

---

## 3. SvelteKit Best Practices

### 3.1 Data Loading
- Prefer `+page.server.ts` for sensitive data or heavy processing.
- Use `+page.ts` for universal data loading that can run on the client.
- Use `export let data` with generated types (`PageData`).

### 3.2 Routing
- Use directory-based routing.
- Use Paraglide-JS for all text content to ensure bilingual support.
- Avoid hardcoded strings in components; use `$lib/paraglide/messages`.

---

## 4. TypeScript & Tooling

### 4.1 Strict Typing
- No `any` types.
- Define explicit interfaces for all data models in `src/lib/data/schema.ts`.
- Use Zod for runtime validation and type inference.

### 4.2 File Naming
- Components: `PascalCase.svelte`
- Utilities/Runes: `camelCase.svelte.ts` (for reactive logic outside components) or `camelCase.ts`.
- Data: `camelCase.ts`.

---

## 5. Styling (Tailwind CSS v4)

- Use CSS variables in `app.css` for theme tokens.
- Use the `cn()` utility for conditional classes.
- Avoid `@apply` in CSS files unless strictly necessary for third-party overrides.
- Prefer inline utility classes for component-specific styles.
