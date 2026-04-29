<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import BentoGrid from '$lib/components/sections/BentoGrid.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
</script>

<svelte:head>
	<title>Nurul Fitri | Marketing Administration Portfolio</title>
	<meta name="description" content="Portfolio of Nurul Fitri, a Marketing Administration and Retail Operations specialist." />
</svelte:head>

<main class="space-y-12 pb-24">
	<Hero />
	<BentoGrid />
	<Experience />
	<Contact />
</main>
