'use client';

import {
  FacebookIcon,
  InstagramIcon,
  LinkCard,
  TikTokIcon,
  WebsiteIcon,
  WhatsAppIcon,
} from '@/components';
import Image from 'next/image';

const exampleData = [
  {
    id: 1,
    href: 'https://sandder.com.bo/',
    title: 'Sitio Web',
    icon: <WebsiteIcon />,
  },
  {
    id: 2,
    href: 'https://www.facebook.com/sandderTNT',
    title: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    id: 3,
    href: 'https://www.tiktok.com/@sanddertnt',
    title: 'TikTok',
    icon: <TikTokIcon />,
  },
  {
    id: 4,
    href: 'https://www.instagram.com/sanddertnt/',
    title: 'Instagram',
    icon: <InstagramIcon />,
  },
  {
    id: 5,
    href: 'https://api.whatsapp.com/send?phone=%2B59169814094',
    title: 'WhatsApp',
    icon: <WhatsAppIcon />,
  },
];

export default function Home() {
  return (
    <main className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
      <Image
        priority
        className='rounded-full'
        alt='logo'
        src='/logo.webp'
        width={96}
        height={96}
      />
      <h1 className='font-extrabold mt-4 mb-8 text-xl text-black'>
        Sandder TNT
      </h1>
      {/* headline */}
      <p className='text-center text-gray-800 mb-8'>
        Botines de seguridad para todo tipo de trabajo
      </p>
      {exampleData.map(data => (
        <LinkCard key={data.id} {...data} />
      ))}
    </main>
  );
}
