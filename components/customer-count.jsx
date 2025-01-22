"use client";

import React, { useEffect, useRef, useState } from "react";

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bookingsCount, setBookingsCount] = useState(0);
  const [customersCount, setCustomersCount] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const bookingsDuration = 1000; // 2 seconds
      const bookingsIncrement = 100 / (bookingsDuration / 10); // 16ms is roughly one frame at 60fps

      const customersDuration = 1000;
      const customersIncrement = 150 / (customersDuration / 10);

      const bookingsInterval = setInterval(() => {
        setBookingsCount((prev) => {
          if (prev < 100) {
            return Math.min(prev + bookingsIncrement, 100);
          }
          clearInterval(bookingsInterval);
          return prev;
        });
      }, 16);

      const customersInterval = setInterval(() => {
        setCustomersCount((prev) => {
          if (prev < 150) {
            return Math.min(prev + customersIncrement, 150);
          }
          clearInterval(customersInterval);
          return prev;
        });
      }, 16);

      return () => {
        clearInterval(bookingsInterval);
        clearInterval(customersInterval);
      };
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 rounded-lg ">
          {/* Bookings Counter */}
          <div className="text-center p-6 rounded-lg  bg-white ">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-pink-500 font-marker">
              {Math.round(bookingsCount)}+
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
              Bookings Completed
            </div>
          </div>

          {/* Customers Counter */}
          <div className="text-center p-6 rounded-lg  bg-white ">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-pink-500 font-marker">
              {Math.round(customersCount)}+
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
              Happy Customers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
