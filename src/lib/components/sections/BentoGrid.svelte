<script lang="ts">
	import { portfolioContent } from '$lib/data/content';
	import { i18n } from '$lib/i18n.svelte';
	import { User, BookOpen, Code2 } from 'lucide-svelte';

	const { profile, skills, education } = portfolioContent;
</script>

<section class="container mx-auto px-6 py-12 md:py-20" id="about">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
		<!-- About Me Card (Spans 2 columns on medium screens) -->
		<div
			class="md:col-span-2 bg-surface border border-surface-border rounded-sm p-8 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
		>
			<div class="flex items-center gap-3 mb-4">
				<div
					class="p-2 bg-primary/10 text-primary rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
				>
					<User class="w-6 h-6" />
				</div>
				<h3 class="text-2xl font-bold">{i18n.current === 'id' ? 'Tentang Saya' : 'About Me'}</h3>
			</div>
			<p class="text-foreground-muted leading-relaxed text-lg">
				{profile.bio[i18n.current]}
			</p>
		</div>

		<!-- Education Card -->
		<div
			class="bg-surface border border-surface-border rounded-sm p-8 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
		>
			<div class="flex items-center gap-3 mb-4">
				<div
					class="p-2 bg-accent/10 text-accent rounded-sm group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
				>
					<BookOpen class="w-6 h-6" />
				</div>
				<h3 class="text-2xl font-bold">{i18n.current === 'id' ? 'Pendidikan' : 'Education'}</h3>
			</div>

			{#each education as edu}
				<div class="mb-4 last:mb-0">
					<h4 class="font-semibold text-lg text-foreground">{edu.school}</h4>
					<p class="text-foreground-muted">
						{edu.degree[i18n.current]} - {edu.field[i18n.current]}
					</p>
					<span
						class="inline-block mt-2 text-sm px-3 py-1 bg-surface-muted text-foreground-muted rounded-sm font-medium"
					>
						{edu.period}
					</span>
				</div>
			{/each}
		</div>

		<!-- Skills Card (Spans full width) -->
		<div
			class="md:col-span-3 bg-surface border border-surface-border rounded-sm p-8 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
		>
			<div class="flex items-center gap-3 mb-6">
				<div
					class="p-2 bg-primary/10 text-primary rounded-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
				>
					<Code2 class="w-6 h-6" />
				</div>
				<h3 class="text-2xl font-bold">{i18n.current === 'id' ? 'Keahlian' : 'Skills'}</h3>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<!-- Technical Skills -->
				<div>
					<h4 class="text-sm uppercase tracking-wider font-semibold text-foreground-muted mb-4">
						{i18n.current === 'id' ? 'Keahlian Teknis' : 'Technical Skills'}
					</h4>
					<div class="flex flex-wrap gap-2">
						{#each skills.filter((s) => s.category === 'Technical') as skill}
							<span
								class="px-4 py-2 bg-surface-muted border border-surface-border text-foreground rounded-sm text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
							>
								{skill.name}
							</span>
						{/each}
					</div>
				</div>

				<!-- Soft Skills -->
				<div>
					<h4 class="text-sm uppercase tracking-wider font-semibold text-foreground-muted mb-4">
						{i18n.current === 'id' ? 'Keahlian Interpersonal' : 'Soft Skills'}
					</h4>
					<div class="flex flex-wrap gap-2">
						{#each skills.filter((s) => s.category === 'Soft') as skill}
							<span
								class="px-4 py-2 bg-surface-muted border border-surface-border text-foreground rounded-sm text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
							>
								{skill.name}
							</span>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
