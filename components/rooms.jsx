// // // import { BackgroundGradientDemo } from "./roomCardDemo";
// // // import BookingCard from "./booking-card";

// // // const RoomSection = () => {
// // //   const rooms = [
// // //     {
// // //       id: 1,
// // //       title: "Cozy Haven Room",
// // //       description:
// // //         "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
// // //       price: "1000",
// // //       imageUrl: "/small.jpg",
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Spacious Serenity Suite",
// // //       description:
// // //         "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
// // //       price: "1500",
// // //       imageUrl: "/large.jpg",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="mx-auto  px-4   bg-white w-full h-full ">
// // //       <div className="mb-12">
// // //         <div className="flex items-center gap-4 mb-2">
// // //           <p className="inline-block text-pink-500 uppercase tracking-wider text-2xl md:text-2xl lg:text-3xl font-semibold  py-3 md: md:py-4 font-marker ">
// // //             OUR LIVING ROOM
// // //           </p>
// // //           <div className="h-0.5 w-16 bg-pink-500"></div>
// // //         </div>

// // //         <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
// // //           The Most Memorable Rest
// // //         </h1>
// // //       </div>
// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //         {rooms.map((room, index) => (
// // //           <BookingCard
// // //             key={room.id}
// // //             url={room.imageUrl}
// // //             description={room.description}
// // //             title={room.title}
// // //             price={room.price}
// // //           />
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RoomSection;

// // import React from "react";
// // import BookingCard from "./booking-card";

// // const RoomSection = () => {
// //   const rooms = [
// //     {
// //       id: 1,
// //       title: "Cozy Haven Room",
// //       description:
// //         "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
// //       price: "1000",
// //       imageUrl: "/small.jpg",
// //     },
// //     {
// //       id: 2,
// //       title: "Spacious Serenity Suite",
// //       description:
// //         "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
// //       price: "1500",
// //       imageUrl: "/large.jpg",
// //     },
// //   ];

// //   return (
// //     <div className="mx-auto px-4 bg-white w-full h-full">
// //       <div className="mb-12">
// //         <div className="flex items-center gap-2 mb-2">
// //           <p className="inline-block text-pink-500 uppercase tracking-wider text-2xl md:text-2xl lg:text-3xl font-semibold py-3 md:py-4 font-marker ">
// //             OUR ROOMS
// //           </p>
// //           <div className="h-0.5 w-16 bg-pink-500"></div>
// //         </div>

// //         <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 ">
// //           The Most Memorable Rest
// //         </h1>
// //       </div>

// //       {/* Updated grid layout with better breakpoints */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-3">
// //         {rooms.map((room) => (
// //           <BookingCard
// //             key={room.id}
// //             url={room.imageUrl}
// //             description={room.description}
// //             title={room.title}
// //             price={room.price}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default RoomSection;

// import React from "react";
// import BookingCard from "./booking-card";

// const RoomSection = () => {
//   const rooms = [
//     {
//       id: 1,
//       title: "Cozy Haven Room",
//       description:
//         "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
//       price: "1000",
//       imageUrl: "/small.jpg",
//     },
//     {
//       id: 2,
//       title: "Spacious Serenity Suite",
//       description:
//         "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
//       price: "1500",
//       imageUrl: "/large.jpg",
//     },
//   ];

//   return (
//     <div className="w-full bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="mb-12">
//           <div className="flex items-center gap-2 mb-2">
//             <p className="inline-block text-pink-500 uppercase tracking-wider text-2xl md:text-2xl lg:text-3xl font-semibold py-3 md:py-4 font-marker">
//               OUR ROOMS
//             </p>
//             <div className="h-0.5 w-16 bg-pink-500"></div>
//           </div>

//           <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
//             The Most Memorable Rest
//           </h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
//           {rooms.map((room) => (
//             <BookingCard
//               key={room.id}
//               url={room.imageUrl}
//               description={room.description}
//               title={room.title}
//               price={room.price}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RoomSection;

import React from "react";
import BookingCard from "./booking-card";

const RoomSection = () => {
  const rooms = [
    {
      id: 1,
      title: "Cozy Haven Room",
      description:
        "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
      price: "1000",
      imageUrl: "/small.jpg",
    },
    {
      id: 2,
      title: "Spacious Suite",
      description:
        "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
      price: "1500",
      imageUrl: "/large.jpg",
    },
  ];

  return (
    <div className="w-full bg-white pb-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <p className="inline-block text-pink-500 uppercase tracking-wider text-2xl md:text-2xl lg:text-3xl font-semibold py-3 md:py-4 font-marker">
              OUR ROOMS
            </p>
            <div className="h-0.5 w-16 bg-pink-500"></div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            The Most Memorable Rest
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <BookingCard
              key={room.id}
              url={room.imageUrl}
              description={room.description}
              title={room.title}
              price={room.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
