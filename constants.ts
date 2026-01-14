import { Github, Instagram, Mail, LucideIcon } from 'lucide-react';

export interface SocialLink {
    name: string;
    url: string;
    icon: LucideIcon;
    description?: string;
    hoverColor?: string;
}

export const socialLinks: SocialLink[] = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/yugshah_20?igsh=dWUweDExaXUzZGo1',
        icon: Instagram,
        description: 'Follow my daily journey & updates.',
        hoverColor: '#ec4899', // pink-500
    },
    {
        name: 'GitHub',
        url: 'https://github.com/Ys999-c',
        icon: Github,
        description: 'Check out my code & contributions.',
        hoverColor: 'var(--text-primary)',
    },
    {
        name: 'Email',
        url: 'mailto:20syug.c@gmail.com',
        icon: Mail,
        description: 'Get in touch for collaborations.',
        hoverColor: 'var(--accent-primary)',
    },
];
