"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function BookingCard({ id, url, description, title, price }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-full max-w-md rounded-lg shadow-xl bg-white shadow-pink-500/70">
      {/* Card Header with Image */}
      <div className="relative">
        <Image
          height={48}
          width={20}
          src={url}
          alt="Our Rooms"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            className={`h-6 w-6 ${isLiked ? "text-pink-500" : "text-gray-600"}`}
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-black ">{title}</h3>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium text-black">5.0</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <div className="flex flex-wrap gap-2">
          {[
            { icon: "📶", label: "Free wifi" },

            { icon: "📺", label: '65" HDTV' },
            { icon: "🔥", label: "Fire alert" },
          ].map((feature, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="rounded-full border border-gray-200 bg-gray-100 p-3 text-gray-900 transition-colors hover:bg-gray-200">
                <span className="text-lg">{feature.icon}</span>
              </div>
              <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap">
                {feature.label}
              </div>
            </div>
          ))}
          <div className="group relative cursor-pointer">
            <div className="rounded-full border border-gray-200 bg-gray-100 p-3 text-gray-900 transition-colors hover:bg-gray-200">
              <span>+20</span>
            </div>
            <div className="invisible group-hover:visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-sm rounded whitespace-nowrap">
              And +20 more features
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 pt-0">
        <button className="w-full bg-pink-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-pink-800 transition-colors ">
          BOOK
        </button>
      </div>
    </div>
  );
}
