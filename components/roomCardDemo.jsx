"use client";
import React from "react";
import { BackgroundGradient } from "./roomCard";
import Image from "next/image";

export function BackgroundGradientDemo({ key, title, url, description }) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10  bg-pink-50 shadow-pink-500">
        <Image
          src={`${url}`}
          alt="First Type of Rooms"
          height="500"
          width="500"
          className="object-contain rounded-2xl"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2  text-pink-500 font-marker">
          {title}
        </p>

        <p className="text-sm text-black ">{description}</p>
        {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
      </BackgroundGradient>
    </div>
  );
}
