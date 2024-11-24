'use client';
import Image from "next/image";

type UserProfileInfoProps = {
  username: string;
  level: string;
};

const UserInfo: React.FC<UserProfileInfoProps> = ({
  username = "User Name",
  level = "0",
}) => {
  return (
    <div className="p-6 ">
      {/* Profile Section */}
      <div className="flex items-center gap-5">
        {/* Profile Icon */}
        <Image
          src="account_circle.svg"
          alt="Profile"
          width={100}
          height={100}
          priority
          className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28" // Larger icon sizes
        />
        {/* Username */}
        <span className="text-roadYellow font-light text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
          {username}
        </span>
      </div>

      {/* Level Section */}
      <div className="flex items-center gap-4 mt-6">
        {/* Star Icon */}
        <Image
          src="award_star.svg"
          alt="Level Icon"
          width={100}
          height={100}
          priority
          className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" // Larger star icon
        />
        {/* Level */}
        <span className="text-roadYellow text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
          {level}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
