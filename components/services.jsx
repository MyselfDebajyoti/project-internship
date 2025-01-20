// // // // import Image from "next/image";
// // // // import { Shield, Clock, UtensilsCrossed, Map } from "lucide-react";

// // // // const ServicesSection = () => {
// // // //   return (
// // // //     <section className="relative min-h-screen w-full pt-10">
// // // //       {/* Background Image */}
// // // //       <div className="absolute inset-0 w-full h-full">
// // // //         <Image
// // // //           src="/ayodhya.webp" // Make sure to add your image to the public folder
// // // //           alt="Autumn trees with orange leaves"
// // // //           fill
// // // //           className="object-cover"
// // // //           priority
// // // //         />
// // // //       </div>

// // // //       {/* Content Overlay */}
// // // //       <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
// // // //         <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-2xl">
// // // //           <div className="space-y-8">
// // // //             <div>
// // // //               <h2 className="text-sm font-medium text-gray-500 tracking-wide uppercase">
// // // //                 SERVICES
// // // //               </h2>
// // // //               <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
// // // //                 Strive Only For The Best.
// // // //               </h1>
// // // //             </div>

// // // //             <div className="space-y-6">
// // // //               {/* Security Service */}
// // // //               <div className="flex items-center space-x-4">
// // // //                 <div className="flex-shrink-0">
// // // //                   <div className="p-3 bg-blue-100 rounded-full">
// // // //                     <Shield className="h-6 w-6 text-blue-600" />
// // // //                   </div>
// // // //                 </div>
// // // //                 <h3 className="text-xl font-medium text-gray-900">
// // // //                   High Class Security
// // // //                 </h3>
// // // //               </div>

// // // //               {/* Room Service */}
// // // //               <div className="flex items-center space-x-4">
// // // //                 <div className="flex-shrink-0">
// // // //                   <div className="p-3 bg-pink-100 rounded-full">
// // // //                     <Clock className="h-6 w-6 text-pink-600" />
// // // //                   </div>
// // // //                 </div>
// // // //                 <h3 className="text-xl font-medium text-gray-900">
// // // //                   24 Hours Room Service
// // // //                 </h3>
// // // //               </div>

// // // //               {/* Restaurant */}
// // // //               <div className="flex items-center space-x-4">
// // // //                 <div className="flex-shrink-0">
// // // //                   <div className="p-3 bg-purple-100 rounded-full">
// // // //                     <UtensilsCrossed className="h-6 w-6 text-purple-600" />
// // // //                   </div>
// // // //                 </div>
// // // //                 <h3 className="text-xl font-medium text-gray-900">
// // // //                   Restaurant
// // // //                 </h3>
// // // //               </div>

// // // //               {/* Tourist Guide */}
// // // //               <div className="flex items-center space-x-4">
// // // //                 <div className="flex-shrink-0">
// // // //                   <div className="p-3 bg-pink-100 rounded-full">
// // // //                     <Map className="h-6 w-6 text-pink-600" />
// // // //                   </div>
// // // //                 </div>
// // // //                 <h3 className="text-xl font-medium text-gray-900">
// // // //                   Tourist Guide Support
// // // //                 </h3>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ServicesSection;

// // // import Image from "next/image";
// // // import { Shield, Clock, Utensils, Map } from "lucide-react";

// // // const ServicesSection = () => {
// // //   return (
// // //     <div className="flex min-h-screen">
// // //       {/* Left Image Section */}
// // //       <div className="flex-1 relative">
// // //         <Image
// // //           src="/ayodhya.webp"
// // //           alt="Autumn leaves"
// // //           fill
// // //           className="object-cover"
// // //           priority
// // //         />
// // //       </div>

// // //       {/* Center Content */}
// // //       <div className="min-w-[500px] bg-white px-16 py-12">
// // //         <div className="mb-8">
// // //           <p className="text-sm uppercase tracking-wider text-pink-600 mb-2">
// // //             SERVICES
// // //           </p>
// // //           <h2 className="text-3xl font-bold">
// // //             Strive Only For The
// // //             <br />
// // //             Best.
// // //           </h2>
// // //         </div>

// // //         <div className="space-y-8">
// // //           <div className="flex items-center gap-4">
// // //             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
// // //               <Shield className="w-6 h-6 text-blue-600" />
// // //             </div>
// // //             <span className="text-lg">High Class Security</span>
// // //           </div>

// // //           <div className="flex items-center gap-4">
// // //             <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
// // //               <Clock className="w-6 h-6 text-red-400" />
// // //             </div>
// // //             <span className="text-lg">24 Hours Room Service</span>
// // //           </div>

// // //           <div className="flex items-center gap-4">
// // //             <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
// // //               <Utensils className="w-6 h-6 text-purple-600" />
// // //             </div>
// // //             <span className="text-lg">Restaurant</span>
// // //           </div>

// // //           <div className="flex items-center gap-4">
// // //             <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center">
// // //               <Map className="w-6 h-6 text-pink-400" />
// // //             </div>
// // //             <span className="text-lg">Tourist Guide Support</span>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Right Image Section */}
// // //       <div className="flex-1 relative">
// // //         <Image
// // //           src="/ayodhya.webp"
// // //           alt="Autumn leaves"
// // //           fill
// // //           className="object-cover"
// // //           priority
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ServicesSection;

// // // import Image from "next/image";
// // // import { Shield, Clock, Utensils, Map } from "lucide-react";

// // // const ServicesSection = () => {
// // //   return (
// // //     <section>
// // //       <div className="flex h-[450px]">
// // //         {" "}
// // //         {/* Reduced height */}
// // //         {/* Left Image Section */}
// // //         <div className="flex-1 relative">
// // //           <Image
// // //             src="/ayodhya.webp"
// // //             alt="Autumn leaves"
// // //             fill
// // //             className="object-cover"
// // //             priority
// // //           />
// // //         </div>
// // //         {/* Center Content */}
// // //         <div className="min-w-[500px] bg-white px-16 py-8">
// // //           {" "}
// // //           {/* Reduced padding */}
// // //           <div className="mb-6">
// // //             {" "}
// // //             {/* Reduced margin */}
// // //             <p className="inline-block text-pink-500 uppercase tracking-wider text-2xl md:text-2xl lg:text-3xl font-semibold py-3 md:py-4 font-marker">
// // //               SERVICES
// // //             </p>
// // //             <h2 className="text-3xl font-bold text-black">
// // //               Strive Only For The
// // //               <br />
// // //               Best.
// // //             </h2>
// // //           </div>
// // //           <div className="space-y-6">
// // //             {" "}
// // //             {/* Reduced spacing */}
// // //             <div className="flex items-center gap-4">
// // //               <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
// // //                 {" "}
// // //                 {/* Smaller icons */}
// // //                 <Shield className="w-5 h-5 text-blue-600" />
// // //               </div>
// // //               <span className="text-lg text-black">High Class Security</span>
// // //             </div>
// // //             <div className="flex items-center gap-4">
// // //               <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
// // //                 <Clock className="w-5 h-5 text-red-400" />
// // //               </div>
// // //               <span className="text-lg text-black">24 Hours Room Service</span>
// // //             </div>
// // //             <div className="flex items-center gap-4">
// // //               <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
// // //                 <Utensils className="w-5 h-5 text-purple-600" />
// // //               </div>
// // //               <span className="text-lg text-black">Restaurant</span>
// // //             </div>
// // //             <div className="flex items-center gap-4">
// // //               <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center">
// // //                 <Map className="w-5 h-5 text-pink-400" />
// // //               </div>
// // //               <span className="text-lg text-black">Tourist Guide Support</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //         {/* Right Image Section */}
// // //         <div className="flex-1 relative">
// // //           <Image
// // //             src="/ayodhya.webp"
// // //             alt="Autumn leaves"
// // //             fill
// // //             className="object-cover"
// // //             priority
// // //           />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ServicesSection;

// // import Image from "next/image";
// // import { Shield, Clock, Utensils, Map } from "lucide-react";

// // const ServicesSection = () => {
// //   return (
// //     <section>
// //       <div className="flex h-[450px] relative">
// //         {/* Left Image Section */}
// //         <div className="flex-1 relative">
// //           <Image
// //             src="/ayodhya.webp"
// //             alt="Autumn leaves"
// //             fill
// //             className="object-cover"
// //             priority
// //           />
// //         </div>

// //         {/* Center Content */}
// //         <div className="w-full min-w-[280px] sm:min-w-[340px] md:min-w-[400px] lg:min-w-[500px] bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8">
// //           <div className="mb-4 sm:mb-6">
// //             <p className="inline-block text-pink-500 uppercase tracking-wider text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-2 sm:py-3 lg:py-4 font-marker">
// //               SERVICES
// //             </p>
// //             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
// //               Strive Only For The
// //               <br />
// //               Best.
// //             </h2>
// //           </div>

// //           <div className="space-y-3 sm:space-y-4 md:space-y-6">
// //             <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
// //               <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-blue-50 rounded-full flex items-center justify-center">
// //                 <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
// //               </div>
// //               <span className="text-sm sm:text-base md:text-lg text-black">
// //                 High Class Security
// //               </span>
// //             </div>

// //             <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
// //               <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-red-50 rounded-full flex items-center justify-center">
// //                 <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" />
// //               </div>
// //               <span className="text-sm sm:text-base md:text-lg text-black">
// //                 24 Hours Room Service
// //               </span>
// //             </div>

// //             <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
// //               <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-purple-50 rounded-full flex items-center justify-center">
// //                 <Utensils className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
// //               </div>
// //               <span className="text-sm sm:text-base md:text-lg text-black">
// //                 Restaurant
// //               </span>
// //             </div>

// //             <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
// //               <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-pink-50 rounded-full flex items-center justify-center">
// //                 <Map className="w-4 sm:w-5 h-4 sm:h-5 text-pink-400" />
// //               </div>
// //               <span className="text-sm sm:text-base md:text-lg text-black">
// //                 Tourist Guide Support
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Image Section */}
// //         <div className="flex-1 relative">
// //           <Image
// //             src="/ayodhya.webp"
// //             alt="Autumn leaves"
// //             fill
// //             className="object-cover"
// //             priority
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default ServicesSection;

// import Image from "next/image";
// import { Shield, Clock, Utensils, Map } from "lucide-react";

// const ServicesSection = () => {
//   return (
//     <section>
//       <div className="flex h-[450px] relative">
//         {/* Left Image Section */}
//         <div className=" lg:block lg:flex-1 relative">
//           <Image
//             src="/ayodhya.webp"
//             alt="Autumn leaves"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* Center Content */}
//         <div className="w-full lg:min-w-[500px] lg:max-w-[600px] bg-white px-6 sm:px-8 md:px-12 lg:px-16 py-8 lg:translate-x-[-10%]">
//           <div className="mb-6">
//             <p className="inline-block text-pink-500 uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl font-semibold py-2 sm:py-3 lg:py-4 font-marker">
//               SERVICES
//             </p>
//             <h2 className="text-2xl sm:text-3xl font-bold text-black">
//               Strive Only For The
//               <br />
//               Best.
//             </h2>
//           </div>

//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center">
//                 <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
//               </div>
//               <span className="text-base sm:text-lg text-black">
//                 High Class Security
//               </span>
//             </div>

//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-50 rounded-full flex items-center justify-center">
//                 <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" />
//               </div>
//               <span className="text-base sm:text-lg text-black">
//                 24 Hours Room Service
//               </span>
//             </div>

//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-purple-50 rounded-full flex items-center justify-center">
//                 <Utensils className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
//               </div>
//               <span className="text-base sm:text-lg text-black">
//                 Restaurant
//               </span>
//             </div>

//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-pink-50 rounded-full flex items-center justify-center">
//                 <Map className="w-4 sm:w-5 h-4 sm:h-5 text-pink-400" />
//               </div>
//               <span className="text-base sm:text-lg text-black">
//                 Tourist Guide Support
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className=" lg:block lg:flex-1 relative">
//           <Image
//             src="/ayodhya.webp"
//             alt="Autumn leaves"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

// import Image from "next/image";
// import { Shield, Clock, Utensils, Map } from "lucide-react";

// const ServicesSection = () => {
//   return (
//     <section>
//       <div className="flex h-[450px] relative bg-white">
//         {/* Left Image Section */}
//         <div className="lg:block lg:w-1/2 relative">
//           <Image
//             src="/ayodhya.webp"
//             alt="Autumn leaves"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* Center Content */}
//         <div className="w-full lg:w-1/2 bg-white px-6 sm:px-8 md:px-12 lg:px-16 py-8">
//           <div className="mb-6">
//             <p className="inline-block text-pink-500 uppercase tracking-wider text-xl sm:text-2xl lg:text-3xl font-semibold py-2 sm:py-3 lg:py-4 font-marker">
//               SERVICES
//             </p>
//             <h2 className="text-2xl sm:text-3xl font-bold text-black">
//               Strive Only For The
//               <br />
//               Best.
//             </h2>
//           </div>

//           <div className="space-y-4 sm:space-y-6">
//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-50 rounded-full flex items-center justify-center">
//                 <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
//               </div>
//               <span className="text-base sm:text-lg text-black">
//                 High Class Security
//               </span>
//             </div>

//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-50 rounded-full flex items-center justify-center">
//                 <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-red-400" />
//               </div>
//               <span className="text-base sm:text-lg text-black">
//                 24 Hours Room Service
//               </span>
//             </div>

//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-purple-50 rounded-full flex items-center justify-center">
//                 <Utensils className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
//               </div>
//               <span className="text-base sm:text-lg text-black">
//                 Restaurant
//               </span>
//             </div>

//             <div className="flex items-center gap-3 sm:gap-4">
//               <div className="w-8 sm:w-10 h-8 sm:h-10 bg-pink-50 rounded-full flex items-center justify-center">
//                 <Map className="w-4 sm:w-5 h-4 sm:h-5 text-pink-400" />
//               </div>
//               <span className="text-base sm:text-lg text-black">
//                 Tourist Guide Support
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className=" lg:block lg:w-1/6 relative">
//           <Image
//             src="/ayodhya.webp"
//             alt="Autumn leaves"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import Image from "next/image";
import { Shield, Clock, Utensils, Map } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="pt-15 bg-white">
      <div className="flex h-[400px] sm:h-[450px] relative bg-white">
        {/* Left Image Section */}
        <div className="w-[10%] lg:w-1/2 md:w-2/3 xl:w-2/3 relative">
          <Image
            src="/bougain-two.jpg"
            alt="Autumn leaves"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Center Content */}
        <div className="w-[80%] lg:w-2/5 bg-white px-4 sm:px-6 md:px-8 lg:px-16 py-6 lg:py-8">
          <div className="mb-4 lg:mb-6">
            <div className="flex items-center gap-4 mb-2">
              <p className="inline-block text-pink-500 uppercase tracking-wider text-2xl md:text-2xl lg:text-3xl font-semibold  py-3 md: md:py-4 font-marker ">
                SERVICES
              </p>
              <div className="h-0.5 w-16 bg-pink-500"></div>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black">
              Strive Only For The
              <br />
              Best.
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <Shield className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-blue-600" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg text-black">
                High Class Security
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-red-50 rounded-full flex items-center justify-center">
                <Clock className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-red-400" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg text-black">
                24 Hours Room Service
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-purple-50 rounded-full flex items-center justify-center">
                <Utensils className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-purple-600" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg text-black">
                Restaurant
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-pink-50 rounded-full flex items-center justify-center">
                <Map className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-pink-400" />
              </div>
              <span className="text-sm sm:text-base lg:text-lg text-black">
                Tourist Guide Support
              </span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-[10%] md:w-1/8 lg:w-1/8 xl:1/8 relative">
          <Image
            src="/bougain-two.jpg"
            alt="Autumn leaves"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
// "use client";

// import Image from "next/image";
// import { Shield, Clock, Utensils, Map } from "lucide-react";
// import { useInView } from "react-intersection-observer";

// const ServicesSection = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section>
//       <div className="flex h-[450px] relative bg-white">
//         {/* Left Image Section */}
//         <div className="w-[10%] sm:w-1/6 lg:w-1/2 md:w-2/3 xl:w-2/3 relative">
//           <Image
//             src="/bougain-two.jpg"
//             alt="Autumn leaves"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* Center Content */}
//         <div
//           ref={ref}
//           className="w-[80%] sm:w-2/3 lg:w-2/5 bg-white px-2 sm:px-6 md:px-8 lg:px-16 py-4 lg:py-8"
//         >
//           <div className="mb-3 lg:mb-6">
//             <div className="flex items-center gap-2 sm:gap-4 mb-2">
//               <p
//                 className={`inline-block text-pink-500 uppercase tracking-wider text-lg sm:text-2xl lg:text-3xl font-semibold py-2 sm:py-3 font-marker transform transition-all duration-700 ${
//                   inView
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-10 opacity-0"
//                 }`}
//               >
//                 SERVICES
//               </p>
//               <div
//                 className={`h-0.5 w-12 sm:w-16 bg-pink-500 transform transition-all duration-700 delay-200 ${
//                   inView
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-10 opacity-0"
//                 }`}
//               ></div>
//             </div>

//             <h2
//               className={`text-lg sm:text-2xl lg:text-3xl font-bold text-black transform transition-all duration-700 delay-300 ${
//                 inView
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-10 opacity-0"
//               }`}
//             >
//               Strive Only For The
//               <br />
//               Best.
//             </h2>
//           </div>

//           <div className="space-y-2 sm:space-y-4 lg:space-y-6">
//             {[
//               {
//                 icon: Shield,
//                 color: "blue",
//                 text: "High Class Security",
//                 delay: "delay-400",
//               },
//               {
//                 icon: Clock,
//                 color: "red",
//                 text: "24 Hours Room Service",
//                 delay: "delay-500",
//               },
//               {
//                 icon: Utensils,
//                 color: "purple",
//                 text: "Restaurant",
//                 delay: "delay-600",
//               },
//               {
//                 icon: Map,
//                 color: "pink",
//                 text: "Tourist Guide Support",
//                 delay: "delay-700",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex items-center gap-2 sm:gap-3 lg:gap-4 transform transition-all duration-700 ${
//                   item.delay
//                 } ${
//                   inView
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-10 opacity-0"
//                 }`}
//               >
//                 <div
//                   className={`w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 bg-${item.color}-50 rounded-full flex items-center justify-center`}
//                 >
//                   <item.icon
//                     className={`w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 text-${item.color}-600`}
//                   />
//                 </div>
//                 <span className="text-xs sm:text-base lg:text-lg text-black">
//                   {item.text}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Image Section */}
//         <div className="w-[10%] sm:w-1/6 md:w-1/8 lg:w-1/8 xl:1/8 relative">
//           <Image
//             src="/bougain-two.jpg"
//             alt="Autumn leaves"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
