// "use client";

// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, CardItem } from "./card";
// import Link from "next/link";

// export function ThreeDCardDemo() {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-pink-700 dark:bg-pink-50 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
//         <CardItem
//           translateZ="50"
//           className="text-xl font-bold text-neutral-600 dark:text-pink-500 font-marker"
//         >
//           OUR GUEST HOUSE
//         </CardItem>
//         {/* <CardItem
//           as="p"
//           translateZ="60"
//           className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//         >
//           Home away from Home
//         </CardItem> */}
//         <CardItem translateZ="100" className="w-full mt-4">
//           <Image
//             src="/out.jpg"
//             height="1100"
//             width="1100"
//             className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//             alt="thumbnail"
//           />
//         </CardItem>
//         {/* <div className="flex justify-between items-center mt-20">
//           <CardItem
//             translateZ={20}
//             as={Link}
//             href="https://twitter.com/mannupaaji"
//             target="__blank"
//             className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//           >
//             Try now →
//           </CardItem>
//           <CardItem
//             translateZ={20}
//             as="button"
//             className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//           >
//             Sign up
//           </CardItem>
//         </div> */}
//       </CardBody>
//     </CardContainer>
//   );
// }

"use client";
import React from "react";
import { PinContainer } from "./card";

export function AnimatedPinDemo() {
  return (
    <div className="h-[35rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Directions"
        href="https://www.google.com/maps/dir//beside+Barshal+Water+Tank,+Manpur,+Barhanti,+West+Bengal+723156/@23.5863107,86.7773888,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!2m2!1d86.8597904!2d23.5863324?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
        containerClassName={"w-full"}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-pink-500 font-marker">
            OUR GUEST HOUSE
          </h3>
          {/* <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div> */}
          <div
            className="flex flex-1 w-full rounded-lg mt-4 bg-center bg-cover"
            style={{
              backgroundImage: "url('/out.jpg')",
            }}
          />
        </div>
      </PinContainer>
    </div>
  );
}
