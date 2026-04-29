import type { Content } from './schema';

export const portfolioContent: Content = {
	profile: {
		name: 'Nurul Fitri',
		headline: 'Marketing Administration | Retail Operations | Inventory & Sales Support Specialist',
		bio: {
			id: 'Saya merupakan profesional di bidang administrasi marketing retail dengan pengalaman dalam mendukung aktivitas penjualan, pengelolaan stok, serta koordinasi distribusi barang ke berbagai toko. Terbiasa bekerja dengan detail tinggi dalam mengelola data, menjadwalkan pengiriman, serta berkomunikasi dengan supplier, customer dan tim sales.\n\nSaya memiliki kemampuan dalam mengolah data penjualan, membuat laporan, serta memastikan ketersediaan stok berjalan optimal untuk mendukung pencapaian target bisnis. Selain itu, saya juga aktif dalam mendukung implementasi program promosi.',
			en: 'I am a retail marketing administration professional with experience in supporting sales activities, stock management, and coordinating goods distribution to various stores. Accustomed to working with high detail in managing data, scheduling shipments, and communicating with suppliers, customers, and sales teams.\n\nI have the ability to process sales data, create reports, and ensure optimal stock availability to support business target achievement. Additionally, I am active in supporting the implementation of promotional programs.'
		},
		summary: {
			id: 'Profesional administrasi marketing retail dengan spesialisasi dalam manajemen stok, koordinasi distribusi, dan dukungan operasional penjualan.',
			en: 'Retail marketing administration professional specializing in inventory management, distribution coordination, and sales operational support.'
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
					'Mengelola dan mengeksekusi program promosi untuk mendukung peningkatan penjualan produk retail.',
					'Memantau ketersediaan stok serta pergerakan barang di toko.',
					'Mengkoordinasikan pengiriman barang ke toko dan memastikan ketepatan jadwal distribusi.',
					'Berkomunikasi dengan supplier terkait pengadaan barang dan kebutuhan stok.',
					'Menangani pertanyaan dari tim sales dan toko terkait stok, pengiriman, aplikasi, dan program promosi.',
					'Menyusun laporan penjualan serta laporan aktivitas canvassing secara berkala.',
					'Mengatur jadwal distribusi barang canvassing serta menyiapkan dan mencetak dokumen pengiriman (surat jalan).',
					'Melakukan pencocokan dan validasi data barang masuk dan keluar untuk memastikan akurasi data.',
					'Menggunakan Microsoft Excel dan Word untuk pengolahan data dan pelaporan.',
					'Mengoperasikan aplikasi e-commerce untuk mendukung proses penjualan produk toko bangunan.'
				],
				en: [
					'Managing and executing promotional programs to support retail product sales growth.',
					'Monitoring stock availability and goods movement in stores.',
					'Coordinating goods shipment to stores and ensuring distribution schedule accuracy.',
					'Communicating with suppliers regarding procurement and stock requirements.',
					'Handling inquiries from sales teams and stores regarding stock, shipments, applications, and promotional programs.',
					'Preparing regular sales reports and canvassing activity reports.',
					'Organizing distribution schedules for canvassing goods and preparing/printing shipping documents (surat jalan).',
					'Performing matching and validation of incoming and outgoing goods data to ensure accuracy.',
					'Using Microsoft Excel and Word for data processing and reporting.',
					'Operating e-commerce applications to support building material product sales.'
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
		{ name: 'Reporting & Documentation', category: 'Technical' },
		{ name: 'Data Entry', category: 'Technical' },
		{ name: 'Microsoft Excel', category: 'Technical' },
		{ name: 'Marketing', category: 'Technical' },
		{ name: 'Administrative Support', category: 'Technical' },
		{ name: 'Communication', category: 'Soft' },
		{ name: 'Teamwork', category: 'Soft' }
	],
	contact: {
		email: 'nurulalfitriyany@gmail.com',
		phone: '0895636898837',
		location: {
			id: 'Jakarta / Palembang, Indonesia',
			en: 'Jakarta / Palembang, Indonesia'
		},
		whatsapp: '62895636898837'
	}
};
