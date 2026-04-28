import type { Content } from './schema';

export const portfolioContent: Content = {
	profile: {
		name: 'Nurul Fitri',
		headline: 'Marketing Administration | Retail Operations | Inventory & Sales Support Specialist',
		bio: {
			id: 'Seorang profesional di bidang administrasi marketing retail dengan pengalaman dalam mendukung aktivitas penjualan, pengelolaan stok, serta koordinasi distribusi barang. Terbiasa bekerja dengan detail tinggi dalam mengelola data dan memastikan ketersediaan stok berjalan optimal.',
			en: 'A professional in retail marketing administration with experience in supporting sales activities, stock management, and goods distribution coordination. Accustomed to working with high detail in managing data and ensuring optimal stock availability.'
		},
		avatarUrl: '/images/avatar.jpg',
		socials: [
			{
				platform: 'LinkedIn',
				url: 'https://www.linkedin.com/in/nurul-fitri-746079199/',
				icon: 'linkedin'
			}
		],
		resumeUrl: '/documents/resume-nurul-fitri.pdf'
	},
	experience: [
		{
			role: {
				id: 'Office Administrator',
				en: 'Office Administrator'
			},
			company: 'GRC board',
			location: 'Jakarta, Indonesia',
			period: {
				id: 'Sep 2022 - Sekarang',
				en: 'Sep 2022 - Present'
			},
			description: {
				id: [
					'Mengelola dan mengeksekusi program promosi untuk mendukung penjualan produk retail.',
					'Memantau ketersediaan stok serta pergerakan barang di toko.',
					'Mengkoordinasikan pengiriman barang dan memastikan ketepatan jadwal distribusi.',
					'Menyusun laporan penjualan dan aktivitas canvassing secara berkala.'
				],
				en: [
					'Managing and executing promotional programs to support retail product sales.',
					'Monitoring stock availability and goods movement in stores.',
					'Coordinating goods shipment and ensuring distribution schedule accuracy.',
					'Preparing regular sales reports and canvassing activity reports.'
				]
			}
		},
		{
			role: {
				id: 'Administrator',
				en: 'Administrator'
			},
			company: 'Praktek Bedah Saraf Dr. Sahat Edison Sitorus, SP.BS',
			location: 'Palembang, Indonesia',
			period: {
				id: 'Nov 2021 - Sep 2022',
				en: 'Nov 2021 - Sep 2022'
			},
			description: {
				id: [
					'Menangani administrasi harian dan pengarsipan data medis.',
					'Melakukan entri data pasien dan koordinasi jadwal praktek.'
				],
				en: [
					'Handling daily administration and medical data archiving.',
					'Performing patient data entry and practice schedule coordination.'
				]
			}
		},
		{
			role: {
				id: 'Teacher',
				en: 'Teacher'
			},
			company: 'Kumon Indonesia',
			location: 'Palembang, Indonesia',
			period: {
				id: 'Sep 2019 - Mar 2020',
				en: 'Sep 2019 - Mar 2020'
			},
			description: {
				id: [
					'Membimbing siswa dalam pengerjaan lembar kerja matematika dan bahasa.',
					'Mengevaluasi kemajuan belajar siswa secara berkala.'
				],
				en: [
					'Guiding students in completing math and language worksheets.',
					'Evaluating student learning progress periodically.'
				]
			}
		}
	],
	education: [
		{
			school: 'STMIK Palcomtech Palembang',
			degree: {
				id: 'Sarjana',
				en: "Bachelor's Degree"
			},
			field: {
				id: 'Sistem Informasi',
				en: 'Information Systems'
			},
			period: '2017 - 2021'
		}
	],
	skills: [
		{ name: 'Inventory Management', category: 'Technical' },
		{ name: 'Sales Administration', category: 'Technical' },
		{ name: 'Retail Operations', category: 'Technical' },
		{ name: 'Data Analysis (Excel)', category: 'Technical' },
		{ name: 'Supply Chain Coordination', category: 'Technical' },
		{ name: 'Communication', category: 'Soft' },
		{ name: 'Teamwork', category: 'Soft' }
	]
};
