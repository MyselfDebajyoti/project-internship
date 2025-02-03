import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-white pt-8 ">
      <footer className="bg-pink-100/45 text-gray-300 rounded-t-[35px]  relative z-10 border-pink-500 border-t-2">
        <div className="container mx-auto px-4 pt-16 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h2 className="text-black text-xl font-semibold">
                Kingsukh{" "}
                <span className="font-marker text-pink-500">Guest House</span>
              </h2>
              <p className="text-gray-600">
                Discover a world of comfort, luxury, and adventure as you
                explore our curated selection of hotels, making every moment of
                your getaway truly extraordinary.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-pink-500 text-lg font-semibold font-marker">
                QUICK LINKS
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a
                    href="#"
                    className=" transition-colors hover:text-pink-500"
                  >
                    Browse Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Special Offers & Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Room Types & Amenities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Customer Reviews & Ratings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Travel Tips & Guides
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-pink-500 text-lg font-semibold font-marker">
                OUR SERVICES
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Concierge Assistance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Flexible Booking Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Airport Transfers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition-colors">
                    Wellness & Recreation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-pink-500 text-lg font-semibold font-marker">
                CONTACT US
              </h3>
              <p className="text-gray-600">
                Address: Beside Barshal Water Tank, Manpur, Barhanti, West
                Bengal 723156
              </p>
              <p className="text-gray-600 hover:underline">
                kkghosh0099@gmail.com
              </p>
              <p className="text-gray-600 hover:underline">+91 9007062180</p>

              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-[#1877F2] transition-colors hover:text-black "
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#E4405F] transition-colors hover:text-black"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#FF0000] transition-colors hover:text-black"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="#"
                  className="text-[#1DA1F2] transition-colors hover:text-black"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-600">
              Copyright © 2025 Debajyoti Chatterjee. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
