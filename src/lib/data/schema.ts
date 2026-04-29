import { z } from 'zod';

export const SocialSchema = z.object({
	platform: z.string(),
	url: z.string().url(),
	icon: z.string().optional()
});

export const ProfileSchema = z.object({
	name: z.string(),
	headline: z.string(),
	bio: z.record(z.string(), z.string()), // { id: "...", en: "..." }
	avatarUrl: z.string().optional(),
	socials: z.array(SocialSchema),
	resumeUrl: z.string().optional()
});

export const ExperienceSchema = z.object({
	role: z.record(z.string(), z.string()),
	company: z.string(),
	location: z.string().optional(),
	period: z.record(z.string(), z.string()), // { id: "Agu 2023 - Sekarang", en: "Aug 2023 - Present" }
	description: z.record(z.string(), z.array(z.string())).optional(),
	logo: z.string().optional()
});

export const EducationSchema = z.object({
	school: z.string(),
	degree: z.record(z.string(), z.string()),
	field: z.record(z.string(), z.string()),
	period: z.string(),
	description: z.record(z.string(), z.string()).optional(),
	logo: z.string().optional()
});

export const SkillSchema = z.object({
	name: z.string(),
	category: z.enum(['Technical', 'Soft', 'Language']),
	level: z.string().optional()
});

export const ContactSchema = z.object({
	email: z.string().email(),
	phone: z.string(),
	location: z.record(z.string(), z.string()),
	whatsapp: z.string().optional()
});

export const ContentSchema = z.object({
	profile: ProfileSchema,
	experience: z.array(ExperienceSchema),
	education: z.array(EducationSchema),
	skills: z.array(SkillSchema),
	contact: ContactSchema
});

export type Content = z.infer<typeof ContentSchema>;
