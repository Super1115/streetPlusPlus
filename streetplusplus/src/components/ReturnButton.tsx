'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

type ReturnButtonProps = {
  redirectUrl: string; // Specify the URL to redirect to
};

const ReturnButton: React.FC<ReturnButtonProps> = ({ redirectUrl }) => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to the specified URL
    router.push(redirectUrl);
  };

  return (
    <div className="flex justify-center">
      <button
        className="flex items-center justify-center w-32 h-12 border-4 border-roadYellow bg-transparent p-2 rounded-lg cursor-pointer transition-colors hover:bg-roadYellow hover:border-white hover:text-white"
        onClick={handleClick}
        aria-label="Return"
      >
        <Image
          src="u_turn_right.svg" // Fixed icon path
          alt="Return Icon"
          width={24} // Icon width
          height={24} // Icon height
          priority
        />
      </button>
    </div>
  );
};

export default ReturnButton;
