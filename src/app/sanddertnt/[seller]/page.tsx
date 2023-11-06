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
import { useParams } from 'next/navigation';

const getWhatsAppLink = (phone: string) => {
  const url = `https://api.whatsapp.com/send?phone=%2B591${phone}`;
  return url;
};

const getSellerPhoneByName = (name: string) => {
  switch (name) {
    case 'giovanny':
      return '69748401';
    case 'willy':
      return '67055944';
    default:
      return '69814094';
  }
};

const InfoSeller = (seller: string) => {
  const dataSeller = [
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
      href: getWhatsAppLink(getSellerPhoneByName(seller)),
      title: 'WhatsApp',
      icon: <WhatsAppIcon />,
    },
  ];

  return (
    <>
      {dataSeller.map(data => (
        <LinkCard key={data.id} {...data} />
      ))}
    </>
  );
};
const SellerPage = () => {
  const params = useParams();

  const seller = params.seller as string;

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
      {InfoSeller(seller)}
    </main>
  );
};

export default SellerPage;
