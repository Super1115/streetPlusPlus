"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import ReturnButton from "@/components/ReturnButton";
import Map from "@/components/Map";

const ReportPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-screen relative flex flex-col md:flex-row bg-roadGray">
      {/* Map */}
      <div
        className={`${
          isSmallScreen
            ? "absolute bottom-0 w-full h-2/5 z-10" // Ensures UI is above Map on small screens
            : "relative h-full w-1/4 z-10" // Keeps UI separate for larger screens
        } bg-roadGray rounded-t-3xl md:rounded-2xl p-4 shadow-lg`}
      >
        {/* Add your UI components here */}
        <h1 className="text-white text-lg">Responsive UI</h1>
        <p className="text-gray-200">Content goes here.</p>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <ReturnButton redirectUrl="/" />
        </div>
      </div>
      <Map />

      {/* UI Section */}
    </div>
  );
};

export default ReportPage;
