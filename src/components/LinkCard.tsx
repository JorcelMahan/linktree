import { ReactNode } from 'react';

export const LinkCard = ({
  href,
  title,
  icon,
}: {
  href: string;
  title: string;
  icon: ReactNode;
}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl'
    >
      <div className='flex text-center w-full'>
        <div>{icon}</div>
        <h2 className='flex justify-center items-center font-semibold w-full text-gray-700 -ml-10'>
          {title}
        </h2>
      </div>
    </a>
  );
};
