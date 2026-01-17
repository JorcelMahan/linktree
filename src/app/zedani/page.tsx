import {
  FacebookIcon,
  InstagramIcon,
  LinkCard,
  TikTokIcon,
  WebsiteIcon,
  WhatsAppIcon,
} from '@/components';
import { zedaniCellPhone } from '@/constants';
import Image from 'next/image';
import './zedani.css';

const zedaniData = [
  {
    id: 1,
    href: 'https://zedani.com.bo/',
    title: 'Sitio Web',
    icon: <WebsiteIcon />,
  },
  {
    id: 2,
    href: 'https://www.facebook.com/zedani-bolivia',
    title: 'Facebook',
    icon: <FacebookIcon />,
  },
  {
    id: 3,
    href: 'https://www.tiktok.com/@zedanibolivia',
    title: 'TikTok',
    icon: <TikTokIcon />,
  },
  {
    id: 4,
    href: 'https://www.instagram.com/zedanibolivia/',
    title: 'Instagram',
    icon: <InstagramIcon />,
  },
  {
    id: 5,
    href: `https://api.whatsapp.com/send?phone=%2B591${zedaniCellPhone}`,
    title: 'WhatsApp',
    icon: <WhatsAppIcon />,
  },
];

const ZedaniPage = () => {
  return (
    <main className='flex items-center flex-col mx-auto w-full justify-center mt-16 px-8'>
      <Image
        priority
        className='rounded-full'
        alt='logo'
        src='/logo-zedani.webp'
        width={96}
        height={96}
      />
      {/* <h1 className='font-extrabold mt-4 mb-8 text-xl text-black'>ZEDANI</h1> */}
      {/* headline */}
      <p className='text-center text-gray-800 m-8'>Elegancia y Confort</p>
      {zedaniData.map(data => (
        <LinkCard key={data.id} {...data} />
      ))}
    </main>
  );
};

export default ZedaniPage;
