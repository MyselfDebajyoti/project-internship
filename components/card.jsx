// // "use client";
// // import { cn } from "@/lib/utils";
// // import React, {
// //   createContext,
// //   useState,
// //   useContext,
// //   useRef,
// //   useEffect,
// // } from "react";

// // const MouseEnterContext = createContext(undefined);

// // export const CardContainer = ({ children, className, containerClassName }) => {
// //   const containerRef = useRef(null);
// //   const [isMouseEntered, setIsMouseEntered] = useState(false);

// //   const handleMouseMove = (e) => {
// //     if (!containerRef.current) return;
// //     const { left, top, width, height } =
// //       containerRef.current.getBoundingClientRect();
// //     const x = (e.clientX - left - width / 2) / 25;
// //     const y = (e.clientY - top - height / 2) / 25;
// //     containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
// //   };

// //   const handleMouseEnter = (e) => {
// //     setIsMouseEntered(true);
// //     if (!containerRef.current) return;
// //   };

// //   const handleMouseLeave = (e) => {
// //     if (!containerRef.current) return;
// //     setIsMouseEntered(false);
// //     containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
// //   };
// //   return (
// //     <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
// //       <div
// //         className={cn(
// //           "py-20 flex items-center justify-center",
// //           containerClassName
// //         )}
// //         style={{
// //           perspective: "1000px",
// //         }}
// //       >
// //         <div
// //           ref={containerRef}
// //           onMouseEnter={handleMouseEnter}
// //           onMouseMove={handleMouseMove}
// //           onMouseLeave={handleMouseLeave}
// //           className={cn(
// //             "flex items-center justify-center relative transition-all duration-200 ease-linear",
// //             className
// //           )}
// //           style={{
// //             transformStyle: "preserve-3d",
// //           }}
// //         >
// //           {children}
// //         </div>
// //       </div>
// //     </MouseEnterContext.Provider>
// //   );
// // };

// // export const CardBody = ({ children, className }) => {
// //   return (
// //     <div
// //       className={cn(
// //         "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
// //         className
// //       )}
// //     >
// //       {children}
// //     </div>
// //   );
// // };

// // export const CardItem = ({
// //   as: Tag = "div",
// //   children,
// //   className,
// //   translateX = 0,
// //   translateY = 0,
// //   translateZ = 0,
// //   rotateX = 0,
// //   rotateY = 0,
// //   rotateZ = 0,
// //   ...rest
// // }) => {
// //   const ref = useRef(null);
// //   const [isMouseEntered] = useMouseEnter();

// //   useEffect(() => {
// //     handleAnimations();
// //   }, [isMouseEntered]);

// //   const handleAnimations = () => {
// //     if (!ref.current) return;
// //     if (isMouseEntered) {
// //       ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
// //     } else {
// //       ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
// //     }
// //   };

// //   return (
// //     <Tag
// //       ref={ref}
// //       className={cn("w-fit transition duration-200 ease-linear", className)}
// //       {...rest}
// //     >
// //       {children}
// //     </Tag>
// //   );
// // };

// // // Create a hook to use the context
// // export const useMouseEnter = () => {
// //   const context = useContext(MouseEnterContext);
// //   if (context === undefined) {
// //     throw new Error("useMouseEnter must be used within a MouseEnterProvider");
// //   }
// //   return context;
// // };

// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { Link2 } from "lucide-react";

// export const PinContainer = ({
//   children,
//   title,
//   href,
//   className,
//   containerClassName,
// }) => {
//   const [transform, setTransform] = useState(
//     "translate(-50%,-50%) rotateX(0deg)"
//   );

//   const onMouseEnter = () => {
//     setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
//   };
//   const onMouseLeave = () => {
//     setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
//   };

//   return (
//     <Link
//       className={cn(
//         "relative group/pin z-50  cursor-pointer",
//         containerClassName
//       )}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       href={href || "/"}
//     >
//       <div
//         style={{
//           perspective: "1000px",
//           transform: "rotateX(70deg) translateZ(0deg)",
//         }}
//         className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//       >
//         <div
//           style={{
//             transform: transform,
//           }}
//           className="absolute left-1/2 p-4 top-1/2  flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
//         >
//           <div className={cn(" relative z-50 ", className)}>{children}</div>
//         </div>
//       </div>

//         <PinPerspective title={title} href={href} />

//     </Link>
//   );
// };

// export const PinPerspective = ({ title, href }) => {
//   return (
//     <motion.div className="pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
//       <div className=" w-full h-full -mt-7 flex-none  inset-0">
//         <div className="absolute top-0 inset-x-0  flex justify-center">
//           <Link
//             href={href}
//             target={"_blank"}
//             className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 "
//           >
//             <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
//               {title}
//             </span>

//             <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
//           </Link>
//         </div>

//         <div
//           style={{
//             perspective: "1000px",
//             transform: "rotateX(70deg) translateZ(0)",
//           }}
//           className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
//         >
//           <>
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//                 x: "-50%",
//                 y: "-50%",
//               }}
//               animate={{
//                 opacity: [0, 1, 0.5, 0],
//                 scale: 1,

//                 z: 0,
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 delay: 0,
//               }}
//               className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
//             ></motion.div>
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//                 x: "-50%",
//                 y: "-50%",
//               }}
//               animate={{
//                 opacity: [0, 1, 0.5, 0],
//                 scale: 1,

//                 z: 0,
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 delay: 2,
//               }}
//               className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
//             ></motion.div>
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0,
//                 x: "-50%",
//                 y: "-50%",
//               }}
//               animate={{
//                 opacity: [0, 1, 0.5, 0],
//                 scale: 1,

//                 z: 0,
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 delay: 4,
//               }}
//               className="absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
//             ></motion.div>
//           </>
//         </div>

//         <>
//           <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
//           <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  " />
//           <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
//           <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 " />
//         </>
//       </div>
//     </motion.div>
//   );
// };

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer w-full",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link href={href || "/"} className="block">
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: transform,
            }}
            className="absolute left-1/2  top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(255_0_128/0.4)] bg-pink-50 border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden sm:w-auto  sm:p-4 p-2"
          >
            <div className={cn("relative z-50", className)}>{children}</div>
          </div>
        </div>

        <PinPerspective title={title} />
      </Link>
    </div>
  );
};

export const PinPerspective = ({ title }) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
