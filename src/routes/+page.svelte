<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import BentoGrid from '$lib/components/sections/BentoGrid.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
</script>

<SEO />

<main class="space-y-12 pb-24">
	<Hero />
	<BentoGrid />
	<Experience />
	<Contact />
</main>
