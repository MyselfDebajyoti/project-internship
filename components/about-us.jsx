import React from "react";
import { ThreeDCardDemo } from "@/components/cardDemo";

const AboutUs = () => {
  return (
    <div
      className=" mx-auto px-4 py-12 md:py-16 bg-white w-full h-full pt-16 md:pt-24 lg:pt-32"
      // style={{
      //   backgroundImage: "url('/green.webp')", // Make sure to add your image to public folder
      // }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        {/* Image Section */}
        <div className="rounded-lg overflow-hidden">
          <ThreeDCardDemo />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div>
            {/* <span className="text-pink-500 uppercase tracking-wider text-sm font-semibold font-marker">
              About Us
            </span> */}
            <span className="inline-block text-pink-500 uppercase tracking-wider text-2xl md:text-2xl lg:text-3xl font-semibold  py-3 md: md:py-4 font-marker ">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
              The Best Holidays Start Here!
            </h2>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped
            by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>

          <div className="space-y-3">
            <div className="text-blue-600">
              <strong>Address:</strong> Beside Barshal Water Tank, Manpur,
              Barhanti, West Bengal 723156
            </div>
            <div className="text-blue-600">
              <strong>Contact us:</strong> +91 9007062180
            </div>
          </div>

          <button
            className="bg-pink-500 text-white px-8 py-3 rounded-md font-marker
            hover:bg-pink-600 transition-colors duration-300 text-lg font-medium"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
