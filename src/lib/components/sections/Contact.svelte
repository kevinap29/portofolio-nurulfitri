<script lang="ts">
	import { portfolioContent } from '$lib/data/content';
	import { i18n } from '$lib/i18n.svelte';
	import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare } from 'lucide-svelte';
	import Button from '../ui/button.svelte';
	import { slide } from 'svelte/transition';

	import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';

	const { contact } = portfolioContent;

	let copiedField = $state<string | null>(null);
	let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	const copyToClipboard = (text: string, field: string) => {
		navigator.clipboard.writeText(text);
		copiedField = field;
		setTimeout(() => (copiedField = null), 2000);
	};

	const handleSubmit = async (e: SubmitEvent) => {
		e.preventDefault();
		formStatus = 'submitting';

		const formData = new FormData(e.target as HTMLFormElement);
		// Replace with your actual Web3Forms access key in .env or hardcoded for now if needed
		// formData.append('access_key', 'YOUR_ACCESS_KEY_HERE');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData
			});
			const result = await response.json();
			if (result.success) {
				formStatus = 'success';
				(e.target as HTMLFormElement).reset();
			} else {
				formStatus = 'error';
			}
		} catch (error) {
			formStatus = 'error';
		}
	};
</script>

<section class="container mx-auto px-6 py-12 md:py-24" id="contact">
	<div class="max-w-6xl mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				{i18n.current === 'id' ? 'Hubungi Saya' : 'Get In Touch'}
			</h2>
			<p class="text-foreground-muted max-w-2xl mx-auto text-lg">
				{i18n.current === 'id'
					? 'Silakan hubungi saya melalui formulir di bawah ini atau detail kontak profesional saya.'
					: 'Feel free to reach out via the form below or through my professional contact details.'}
			</p>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
			<!-- Contact Details (2 columns) -->
			<div class="lg:col-span-2 space-y-6">
				<div class="grid grid-cols-1 gap-4">
					<!-- Email Card -->
					<div
						class="bg-surface border border-surface-border p-6 rounded-sm shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
					>
						<div class="flex items-center gap-4">
							<div class="p-3 bg-primary/10 text-primary rounded-sm shrink-0">
								<Mail class="w-6 h-6" />
							</div>
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-foreground-muted mb-1 uppercase tracking-wider">
									Email
								</p>
								<p class="text-lg font-semibold text-foreground truncate">{contact.email}</p>
							</div>
							<button
								onclick={() => copyToClipboard(contact.email, 'email')}
								class="p-2 hover:bg-surface-muted rounded-sm transition-colors text-foreground-muted hover:text-primary"
								title="Copy Email"
							>
								{#if copiedField === 'email'}
									<Check class="w-5 h-5 text-green-500" />
								{:else}
									<Copy class="w-5 h-5" />
								{/if}
							</button>
						</div>
					</div>

					<!-- Phone/WhatsApp Card -->
					<div
						class="bg-surface border border-surface-border p-6 rounded-sm shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
					>
						<div class="flex items-center gap-4">
							<div class="p-3 bg-green-500/10 text-green-600 rounded-sm shrink-0">
								<Phone class="w-6 h-6" />
							</div>
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-foreground-muted mb-1 uppercase tracking-wider">
									{i18n.current === 'id' ? 'Telepon / WhatsApp' : 'Phone / WhatsApp'}
								</p>
								<p class="text-lg font-semibold text-foreground truncate">{contact.phone}</p>
							</div>
							<div class="flex gap-1">
								<button
									onclick={() => copyToClipboard(contact.phone, 'phone')}
									class="p-2 hover:bg-surface-muted rounded-sm transition-colors text-foreground-muted hover:text-primary"
									title="Copy Phone"
								>
									{#if copiedField === 'phone'}
										<Check class="w-5 h-5 text-green-500" />
									{:else}
										<Copy class="w-5 h-5" />
									{/if}
								</button>
								{#if contact.whatsapp}
									<a
										href="https://wa.me/{contact.whatsapp}"
										target="_blank"
										class="p-2 hover:bg-green-500/10 rounded-sm transition-colors text-green-600"
										title="Chat on WhatsApp"
									>
										<MessageSquare class="w-5 h-5" />
									</a>
								{/if}
							</div>
						</div>
					</div>

					<!-- Location Card -->
					<div
						class="bg-surface border border-surface-border p-6 rounded-sm shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
					>
						<div class="flex items-center gap-4">
							<div class="p-3 bg-accent/10 text-accent rounded-sm shrink-0">
								<MapPin class="w-6 h-6" />
							</div>
							<div class="flex-1">
								<p class="text-sm font-medium text-foreground-muted mb-1 uppercase tracking-wider">
									{i18n.current === 'id' ? 'Lokasi' : 'Location'}
								</p>
								<p class="text-lg font-semibold text-foreground">
									{contact.location[i18n.current]}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Form (3 columns) -->
			<div
				class="lg:col-span-3 bg-surface border border-surface-border p-8 rounded-sm shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300"
			>
				<form onsubmit={handleSubmit} class="space-y-6">
					<!-- Hidden Web3Forms Key (User should replace this) -->
					<input type="hidden" name="access_key" value={PUBLIC_WEB3FORMS_ACCESS_KEY} />
					<input type="hidden" name="subject" value="New Contact from Nurul Fitri Portfolio" />
					<input type="checkbox" name="botcheck" id="" style="display: none;" />

					<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div class="space-y-2">
							<label for="name" class="text-sm font-semibold text-foreground-muted ml-1">
								{i18n.current === 'id' ? 'Nama Lengkap' : 'Full Name'}
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								placeholder="Jane Doe"
								class="w-full px-4 py-3 bg-surface-muted border border-surface-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
							/>
						</div>
						<div class="space-y-2">
							<label for="email" class="text-sm font-semibold text-foreground-muted ml-1">
								{i18n.current === 'id' ? 'Alamat Email' : 'Email Address'}
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								placeholder="jane@example.com"
								class="w-full px-4 py-3 bg-surface-muted border border-surface-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
							/>
						</div>
					</div>

					<div class="space-y-2">
						<label for="message" class="text-sm font-semibold text-foreground-muted ml-1">
							{i18n.current === 'id' ? 'Pesan' : 'Message'}
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows="5"
							placeholder={i18n.current === 'id'
								? 'Tulis pesan Anda di sini...'
								: 'Write your message here...'}
							class="w-full px-4 py-3 bg-surface-muted border border-surface-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
						></textarea>
					</div>

					<div class="flex items-center justify-between gap-4">
						<div class="flex-1">
							{#if formStatus === 'success'}
								<p transition:slide class="text-green-600 font-medium flex items-center gap-2">
									<Check class="w-5 h-5" />
									{i18n.current === 'id' ? 'Pesan berhasil dikirim!' : 'Message sent successfully!'}
								</p>
							{:else if formStatus === 'error'}
								<p transition:slide class="text-red-500 font-medium">
									{i18n.current === 'id'
										? 'Gagal mengirim pesan. Silakan coba lagi.'
										: 'Failed to send message. Please try again.'}
								</p>
							{/if}
						</div>

						<Button
							type="submit"
							variant="primary"
							disabled={formStatus === 'submitting'}
							class="w-full sm:w-auto px-10 gap-2 h-12"
						>
							{#if formStatus === 'submitting'}
								<div
									class="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"
								></div>
								{i18n.current === 'id' ? 'Mengirim...' : 'Sending...'}
							{:else}
								<Send class="w-5 h-5" />
								{i18n.current === 'id' ? 'Kirim Pesan' : 'Send Message'}
							{/if}
						</Button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
