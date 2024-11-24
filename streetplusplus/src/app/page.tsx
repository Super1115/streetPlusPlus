'use client';

import HomePageButton from '@/components/HomePageButton';
import ProfileButton from '@/components/ProfileButton';

const HomePage = () => {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center bg-transparent">
      {/* Profile Button in the Top-Right */}
      <ProfileButton />

      {/* Buttons in the Middle */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full h-full p-4">
        {/* Two Buttons with Redirect */}
        <HomePageButton icon="/report.svg" alt="Icon 1" redirectUrl="/" />
        <HomePageButton icon="/chart_data.svg" alt="Icon 2" redirectUrl="/" />
      </div>
    </div>
  );
};

export default HomePage;
