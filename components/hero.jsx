import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  subsets: ["latin"], // Choose the subset you need
  weight: ["400"], // Permanent Marker only supports 400 weight
});

import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/ayodhya.webp')", // Make sure to add your image to public folder
        }}
      >
        {/* Optional overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="py-8">
          <p className="text-lg mb-4  opacity-35">Simple - Unique - Friendly</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-fade-in opacity-0">
            Your Home Awaits
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 opacity-0 animate-fade-in-delayed">
            In our{" "}
            <span className="text-pink-500 block sm:inline font-marker">
              Guest House.
            </span>
          </h2>
        </div>

        <button className="bg-pink-500 text-white px-6 py-2 text-sm sm:text-base block rounded-md hover:bg-pink-600 transition-colors duration-200 lg:hidden">
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
