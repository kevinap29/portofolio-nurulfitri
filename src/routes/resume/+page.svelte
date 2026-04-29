<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { portfolioContent } from '$lib/data/content';
	import Button from '$lib/components/ui/button.svelte';
	import { Mail, Phone, MapPin, Printer, ArrowLeft } from 'lucide-svelte';
	import LinkedIn from '$lib/components/icons/LinkedIn.svelte';

	const { profile, experience, education, skills, contact } = portfolioContent;

	function printResume() {
		window.print();
	}
</script>

<svelte:head>
	<title>{i18n.current === 'id' ? 'Resume' : 'Resume'} | {profile.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<style>
	@media print {
		:global(body) {
			background-color: white !important;
			margin: 0 !important;
			padding: 0 !important;
			-webkit-print-color-adjust: exact;
			print-color-adjust: exact;
		}

		.no-print {
			display: none !important;
		}

		@page {
			size: A4;
			margin: 0;
		}

		.resume-paper {
			width: 210mm !important;
			margin: 0 !important;
			padding: 0 !important;
			box-shadow: none !important;
			border: none !important;
			min-height: auto !important;
			height: auto !important;
		}

		.section-avoid {
			break-inside: avoid !important;
		}
	}
</style>

<!-- Top Bar (Hidden in Print) -->
<div class="no-print sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border py-3">
	<div class="container mx-auto px-4 flex justify-between items-center">
		<a href="/" class="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
			<ArrowLeft class="w-4 h-4" />
			{i18n.current === 'id' ? 'Kembali ke Portofolio' : 'Back to Portfolio'}
		</a>
		<div class="flex items-center gap-4">
			<div class="text-[10px] text-right leading-tight hidden sm:block">
				<p class="text-primary font-bold">{i18n.current === 'id' ? 'Tips Cetak:' : 'Print Tips:'}</p>
				<p class="text-muted-foreground">{i18n.current === 'id' ? '1. Matikan "Headers & Footers"' : '1. Turn off "Headers & Footers"'}</p>
				<p class="text-muted-foreground">{i18n.current === 'id' ? '2. Setel Margin ke "None"' : '2. Set Margins to "None"'}</p>
			</div>
			<Button onclick={printResume} variant="primary" size="sm" class="gap-2">
				<Printer class="w-4 h-4" />
				{i18n.current === 'id' ? 'Cetak / Simpan PDF' : 'Print / Save as PDF'}
			</Button>
		</div>
	</div>
</div>

<!-- Resume Container -->
<div class="min-h-screen bg-surface-muted py-4 sm:py-8 no-print:bg-surface-muted print:bg-white print:p-0">
	<div 
		class="resume-paper mx-auto bg-white text-slate-900 shadow-2xl overflow-hidden flex flex-col"
		style="width: 210mm; min-height: 297mm;"
	>
		<div class="p-10 md:p-14 h-full flex flex-col">
			<!-- Header -->
			<header class="border-b-2 border-slate-900 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
				<div>
					<h1 class="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-1">{profile.name}</h1>
					<p class="text-xl font-bold text-slate-500 uppercase tracking-[0.2em]">{profile.headline}</p>
				</div>
				<div class="space-y-0.5 text-right text-[11px] font-bold uppercase tracking-wider text-slate-600">
					<div class="flex items-center justify-end gap-2">
						<span>{contact.email}</span>
						<Mail class="w-3.5 h-3.5" />
					</div>
					<div class="flex items-center justify-end gap-2">
						<span>{contact.phone}</span>
						<Phone class="w-3.5 h-3.5" />
					</div>
					<div class="flex items-center justify-end gap-2 text-[10px]">
						<span class="lowercase underline">linkedin.com/in/nurul-fitri-746079199</span>
						<LinkedIn class="w-3.5 h-3.5 text-slate-900" />
					</div>
					<div class="flex items-center justify-end gap-2">
						<span>{contact.location[i18n.current]}</span>
						<MapPin class="w-3.5 h-3.5" />
					</div>
				</div>
			</header>

			<div class="flex-1 space-y-10">
				<!-- Summary -->
				<section class="section-avoid">
					<h2 class="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4 flex items-center gap-3">
						{i18n.current === 'id' ? 'Profil Profesional' : 'Professional Profile'}
						<div class="h-px flex-1 bg-slate-100"></div>
					</h2>
					<p class="text-[14px] leading-relaxed font-medium text-slate-700">
						{profile.bio[i18n.current]}
					</p>
				</section>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
					<!-- Left Column -->
					<div class="md:col-span-1 space-y-10">
						<!-- Skills -->
						<section class="section-avoid">
							<h2 class="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5 border-l-4 border-slate-900 pl-3">
								{i18n.current === 'id' ? 'Keahlian' : 'Skills'}
							</h2>
							<div class="space-y-6">
								<div>
									<h3 class="text-[10px] uppercase font-bold text-slate-400 mb-2.5">Technical</h3>
									<div class="flex flex-wrap gap-2">
										{#each skills.filter(s => s.category === 'Technical') as skill}
											<span class="text-[10px] font-bold uppercase px-2 py-1 border border-slate-200">{skill.name}</span>
										{/each}
									</div>
								</div>
								<div>
									<h3 class="text-[10px] uppercase font-bold text-slate-400 mb-2.5">Interpersonal</h3>
									<div class="flex flex-wrap gap-2">
										{#each skills.filter(s => s.category === 'Soft') as skill}
											<span class="text-[10px] font-bold uppercase px-2 py-1 bg-slate-900 text-white">{skill.name}</span>
										{/each}
									</div>
								</div>
							</div>
						</section>

						<!-- Education -->
						<section class="section-avoid">
							<h2 class="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-5 border-l-4 border-slate-900 pl-3">
								{i18n.current === 'id' ? 'Pendidikan' : 'Education'}
							</h2>
							<div class="space-y-6">
								{#each education as edu}
									<div class="space-y-0.5">
										<h3 class="font-bold text-[14px] leading-tight">{edu.school}</h3>
										<p class="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
											{edu.degree[i18n.current]}
										</p>
										<p class="text-[11px] font-medium text-slate-400 italic">
											{edu.field[i18n.current]}
										</p>
										<p class="text-[10px] font-black text-slate-300 mt-1 uppercase">{edu.period}</p>
									</div>
								{/each}
							</div>
						</section>
					</div>

					<!-- Right Column -->
					<div class="md:col-span-2">
						<!-- Experience -->
						<section>
							<h2 class="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 border-l-4 border-slate-900 pl-3">
								{i18n.current === 'id' ? 'Pengalaman Kerja' : 'Work Experience'}
							</h2>
							<div class="space-y-8">
								{#each experience as exp}
									<div class="section-avoid relative pl-6 border-l-2 border-slate-100 last:border-transparent">
										<div class="absolute left-[-7px] top-1.5 w-[12px] h-[12px] bg-slate-900 rounded-full"></div>
										<div class="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-1">
											<h3 class="font-black text-xl uppercase tracking-tight leading-none">{exp.role[i18n.current]}</h3>
											<span class="text-[10px] font-black bg-slate-100 text-slate-600 px-2 py-1 uppercase tracking-widest mt-2 sm:mt-0 whitespace-nowrap">
												{exp.period[i18n.current]}
											</span>
										</div>
										<p class="font-bold text-slate-500 text-[11px] uppercase tracking-widest mb-4">{exp.company}</p>
										
										{#if exp.description && exp.description[i18n.current]}
											<ul class="space-y-2">
												{#each exp.description[i18n.current] as bullet}
													<li class="flex gap-3 text-[13px] leading-relaxed text-slate-700 font-medium">
														<span class="mt-2 w-1 h-1 rounded-full bg-slate-300 shrink-0"></span>
														<span>{bullet}</span>
													</li>
												{/each}
											</ul>
										{/if}
									</div>
								{/each}
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
