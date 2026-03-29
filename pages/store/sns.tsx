import Bluesky from '@/components/logos/bluesky';
import Note from '@/components/logos/note';
import { ReactNode } from 'react';
import { FaMedium } from 'react-icons/fa';
import { FaDev, FaGithub, FaMastodon, FaTwitter } from 'react-icons/fa6';
import { SiBuymeacoffee, SiZenn } from 'react-icons/si';

export const sns: { name: string; icon: ReactNode; href: string }[] = [
    {
        name: 'Bluesky',
        icon: <Bluesky size={18} />,
        href: 'https://bsky.app/profile/tada.page',
    },
    {
        name: 'GitHub',
        icon: <FaGithub size={18} />,
        href: 'https://github.com/tada246',
    },
    {
        name: 'Zenn',
        icon: <SiZenn size={18} />,
        href: 'https://zenn.dev/iizuka0000',
    },
    {
        name: 'Twitter',
        icon: <FaTwitter size={18} />,
        href: 'https://twitter.com/tada0100',
    },
    {
        name: 'Note',
        icon: <Note size={18} />,
        href: 'https://note.com/zuk246',
    },
];
