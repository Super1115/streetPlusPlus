'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

type HomePageButtonProps = {
  icon: string;
  alt: string;
  redirectUrl: string; // Add a prop to specify the redirect URL
};

const HomePageButton: React.FC<HomePageButtonProps> = ({ icon, alt, redirectUrl }) => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the specified URL
    router.push(redirectUrl);
  };

  return (
    <div
      className="flex items-center justify-center rounded-xl border-8 border-roadYellow aspect-square w-2/3 sm:w-1/2 md:w-1/3 cursor-pointer md:border-0" 
      onClick={handleClick} // Add click handler for redirect
    >
      <Image
        src={icon}
        alt={alt}
        className="w-1/2 h-1/2"
        width={120}
        height={120}
        priority
      />
    </div>
  );
};

export default HomePageButton;
