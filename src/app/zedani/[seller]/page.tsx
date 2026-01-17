import {
  FacebookIcon,
  InstagramIcon,
  LinkCard,
  TikTokIcon,
  WebsiteIcon,
  WhatsAppIcon,
} from '@/components';
import { zedaniCellPhone } from '@/constants';
import { getWhatsAppLink } from '@/utils';
import Image from 'next/image';
import '../zedani.css';

const getSellerPhoneByName = (name: string) => {
  switch (name) {
    case 'gabriela':
      return '73552438';
    case 'karla':
      return '73534014';
    case 'orlando':
      return '73524639';
    default:
      return zedaniCellPhone;
  }
};

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
];

const InfoSeller = ({ seller }: { seller: string }) => {
  const dataSeller = [
    ...zedaniData,
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

const ZedaniPage = ({ params }: { params: { seller: string } }) => {
  const seller = params.seller;

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
      <p className='text-center text-gray-800 m-8'>Elegancia y Confort</p>
      <InfoSeller seller={seller} />
    </main>
  );
};

export default ZedaniPage;
