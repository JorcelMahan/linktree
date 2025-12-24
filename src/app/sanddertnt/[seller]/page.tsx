import {
  CatalogIcon,
  FacebookIcon,
  InstagramIcon,
  LinkCard,
  TikTokIcon,
  WebsiteIcon,
  WhatsAppIcon,
} from '@/components';
import { getWhatsAppLink } from '@/utils';
import Image from 'next/image';
import '../../sandder.css';

const getSellerPhoneByName = (name: string) => {
  switch (name) {
    case 'giovanny':
      return '69748401';
    case 'willy':
      return '67055944';
    case 'fabio':
      return '69814094';
    case 'harol':
      return '68013026';
    default:
      // return '69814094';
      return '63633212';
  }
};

const InfoSeller = ({ seller }: { seller: string }) => {
  const dataSeller = [
    {
      id: 1,
      href: 'https://sandder.com.bo/',
      title: 'Sitio Web',
      icon: <WebsiteIcon />,
    },
    {
      id: 2,
      href: 'https://sandder.com.bo/catalogos',
      title: 'Catálogo',
      icon: <CatalogIcon />,
    },
    {
      id: 3,
      href: 'https://www.facebook.com/sandderTNT',
      title: 'Facebook',
      icon: <FacebookIcon />,
    },
    {
      id: 4,
      href: 'https://www.tiktok.com/@sanddertnt',
      title: 'TikTok',
      icon: <TikTokIcon />,
    },
    {
      id: 5,
      href: 'https://www.instagram.com/sanddertnt/',
      title: 'Instagram',
      icon: <InstagramIcon />,
    },
    {
      id: 6,
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

const SellerPage = ({ params }: { params: { seller: string } }) => {
  const seller = params.seller;

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
      <InfoSeller seller={seller} />
    </main>
  );
};

export default SellerPage;
