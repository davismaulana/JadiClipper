import { z } from 'zod';

export const earlyAccessSchema = z.object({
    fullName: z.string().min(2, 'Nama minimal 2 karakter'),
    email: z.string().email('Email tidak valid'),
    primaryPlatform: z.enum([
        'youtube',
        'tiktok',
        'instagram',
        'twitch',
        'podcast',
        'multiple',
        'other'
    ] as const, { message: 'Pilih salah satu platform' }),
    contentType: z.enum([
        'gaming',
        'comedy',
        'education',
        'podcast',
        'vlog',
        'other'
    ] as const, { message: 'Pilih tipe konten' }),
    videoFrequency: z.enum(['1-2', '3-5', '6-10', '10+'] as const, { message: 'Pilih frekuensi' }),
    currentWorkflow: z.string().max(500).optional(),
    frustrationsMain: z.string().max(500).optional(),
    whatsappOptIn: z.boolean().default(false),
});

export type EarlyAccessFormData = z.infer<typeof earlyAccessSchema>;
