"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import ReturnButton from "@/components/ReturnButton";
import Map from "@/components/Map";
import { createIssueReport } from "@/models/IssueReport";
import { useUser } from '@auth0/nextjs-auth0/client';



const ReportPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [markerPosition, setMarkerPosition] = useState<[number, number] | null>(null); // State for clicked marker position
  const [issue, setIssue] = useState<string>(""); // State for issue report
  const { user, error, isLoading } = useUser();

  
  useEffect(() => {
    const handleResize = (): void => {
      setIsSmallScreen(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  if(!user){
    return null
  }
  const userName:any = user.user_id?.toString()
  
  const handleSubmit = async () => {
    if (issue.trim() && markerPosition) {
      const uid:string = userName; // Replace with actual UID from Auth0 (or pass from your context)
      const geoLocation = {
        type: "Point",
        coordinates: [markerPosition[1], markerPosition[0]], // GeoJSON format: [longitude, latitude]
      };

      // Call the function to submit the issue report
      const response = await createIssueReport(uid, geoLocation, issue);

      if (response.success) {
        alert(`Issue Submitted: ${issue}\nLocation: ${markerPosition[0].toFixed(5)}, ${markerPosition[1].toFixed(5)}`);
        setIssue(""); // Clear the input after submission
      } else {
        alert("Error submitting issue. Please try again.");
      }
    } else {
      alert("Please enter an issue description and place a marker before submitting.");
    }
  };

  return (
    <div className="h-screen w-screen relative flex flex-col md:flex-row bg-roadGray">
      {/* Map */}
      <div
        className={`${
          isSmallScreen
            ? "absolute bottom-0 w-full h-2/5 z-10"
            : "relative h-full w-1/4 z-10"
        } bg-roadGray rounded-t-3xl md:rounded-2xl p-4 shadow-lg flex flex-col`}
      >
        {/* Title with Location Icon */}
        <h1 className="text-white text-lg flex items-center mb-4">
          <span className="material-icons text-roadYellow text-[3rem] sm:text-[4rem] md:text-[5rem]">location_on</span>
        </h1>

        {/* Display Marker Information */}
        <p className="text-roadLightGray text-[2.25rem] sm:text-[2.25rem] md:text-[2.25rem] lg:text-[2.5rem] xl:text[3rem] 2xl:text-[4rem] mb-4">
          {markerPosition
            ? `${markerPosition[0].toFixed(5)}, ${markerPosition[1].toFixed(5)}`
            : ""}
        </p>

        {/* Issue Report Box */}
        <textarea
          className="w-full p-2 rounded-lg border border-roadYellow bg-transparent text-white placeholder-roadGray focus:outline-none focus:ring-2 focus:ring-roadYellow mb-4"
          placeholder="Describe the issue here..."
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          rows={4}
        ></textarea>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-roadYellow hover:bg-yellow-600 text-roadGray font-semibold py-2 px-4 rounded-lg flex justify-center items-center transition-all duration-300"
        >
          <span className="material-icons mr-2">flag</span>
        </button>

        <div className="relative m-[1rem]">
          <ReturnButton redirectUrl="/" />
        </div>
      </div>

      {/* Map Component */}
      <Map setMarkerPosition={setMarkerPosition} />
    </div>
  );
};

export default ReportPage;
