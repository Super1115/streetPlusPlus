'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const ProfileButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/profile');
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        onClick={handleClick}
        className="flex items-center justify-center bg-transparent transition-opacity duration-200"
        aria-label="Go to profile"
      >
        <Image 
          src="account_circle.svg"
          alt="Profile"
          width={80}
          height={80}
          priority
          className="h-20 w-24 sm:h-24 sm:w-24 md:h-32 md:w-32" // Responsive sizes
        /> 
      </button>
    </div>
  );
};

export default ProfileButton;
