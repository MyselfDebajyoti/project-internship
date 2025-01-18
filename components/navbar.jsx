// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Services", href: "/services" },
//     { label: "Rooms", href: "/rooms" },
//     { label: "Gallery", href: "/gallery" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-gray-800 font-semibold text-lg">
//               Kingsukh
//               <span className="block text-sm">Guest House</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
//               >
//                 {item.label}
//               </Link>
//             ))}
//             <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
//               BOOK NOW
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-600 hover:text-pink-500 focus:outline-none"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <button className="w-full mt-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
//                 BOOK NOW
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Services", href: "/services" },
//     { label: "Rooms", href: "/rooms" },
//     { label: "Gallery", href: "/gallery" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 w-1/4">
//             <Link href="/" className="text-white font-semibold text-lg">
//               Kingsukh
//               <span className="block text-sm">Guest House</span>
//             </Link>
//           </div>

//           {/* Centered Desktop Navigation */}
//           <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-white hover:text-pink-500 transition-colors duration-200"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Book Now Button - Desktop */}
//           <div className="hidden lg:block w-1/4 text-right">
//             <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
//               BOOK NOW
//             </button>
//           </div>

//           {/* Hamburger Menu Button - Tablet and Below */}
//           <div className="lg:hidden ml-auto">
//             <button
//               onClick={toggleMenu}
//               className="text-white hover:text-pink-500 focus:outline-none"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile/Tablet Navigation */}
//         {isOpen && (
//           <div className="lg:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.label}
//                   href={item.href}
//                   className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-gray-50 rounded-md transition-colors duration-200"
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//               <button className="w-full mt-2 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
//                 BOOK NOW
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Services", href: "/services" },
//     { label: "Rooms", href: "/rooms" },
//     { label: "Gallery", href: "/gallery" },
//     { label: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py:3">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="text-white font-semibold text-lg">
//               Kingsukh
//               <span className="block text-sm">Guest House</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="text-white hover:text-pink-500 transition-colors duration-200"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Book Now Button */}
//           <div className="hidden lg:block">
//             <button className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
//               BOOK NOW
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-white hover:text-pink-500 focus:outline-none"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden mt-2">
//             <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white/90 backdrop-blur-sm divide-y divide-gray-100">
//               <div className="px-5 pt-5 pb-6">
//                 <div className="space-y-1">
//                   {navItems.map((item) => (
//                     <Link
//                       key={item.label}
//                       href={item.href}
//                       className="block px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-md"
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//                 <div className="mt-6">
//                   <button className="w-full bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
//                     BOOK NOW
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Rooms", href: "/rooms" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-semibold text-lg">
              Kingsukh
              <span className="block text-sm text-pink-500 font-marker">
                Guest House
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-white hover:text-pink-300 transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <button className="bg-pink-500 text-white  font-marker px-6 py-2 rounded-md hover:bg-pink-800 transition-colors duration-200">
              BOOK NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-pink-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-2">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white/90 backdrop-blur-sm divide-y divide-gray-100">
              <div className="px-5 pt-5 pb-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-md relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-pink-500 transform scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="w-full bg-pink-500 text-white px-6 py-2 rounded-md  hover:bg-white transition-colors duration-200">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
