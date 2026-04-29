<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		href?: string;
		target?: string;
		variant?: 'default' | 'ghost' | 'outline' | 'primary';
		size?: 'default' | 'sm' | 'lg' | 'icon';
		children?: import('svelte').Snippet;
	}

	let {
		class: className,
		variant = 'default',
		size = 'default',
		href,
		children,
		...rest
	}: Props = $props();

	const variants = {
		default: 'bg-surface text-foreground hover:bg-surface-hover border border-surface-border',
		primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
		ghost: 'hover:bg-accent hover:text-accent-foreground',
		outline: 'border border-surface-border bg-transparent hover:bg-surface'
	};

	const sizes = {
		default: 'h-11 px-6 py-2',
		sm: 'h-9 px-3',
		lg: 'h-12 px-10 text-lg',
		icon: 'h-10 w-10'
	};

	const baseClasses =
		'inline-flex items-center justify-center rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]';
</script>

{#if href}
	<a
		{href}
		class={cn(baseClasses, variants[variant], sizes[size], className)}
		{...rest as HTMLAnchorAttributes}
	>
		{@render children?.()}
	</a>
{:else}
	<button class={cn(baseClasses, variants[variant], sizes[size], className)} {...rest}>
		{@render children?.()}
	</button>
{/if}
