// "use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const Gallery = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   if (!images || images.length === 0) {
//     return null;
//   }

//   return (
//     <div className="relative w-full max-w-4xl mx-auto">
//       {/* Main carousel container */}
//       <div className="relative h-96 overflow-hidden rounded-lg">
//         {/* Image container with transition */}
//         <div
//           className="absolute w-full h-full transition-transform duration-500 ease-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className="absolute top-0 left-0 w-full h-full"
//               style={{ left: `${index * 100}%` }}
//             >
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Navigation buttons */}
//         <button
//           onClick={goToPrevious}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         <button
//           onClick={goToNext}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>

//         {/* Slide indicators */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 index === currentIndex ? "bg-white w-4" : "bg-white/50"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/ayodhya.webp",
    "/baranti.webp",
    "/hill.jpg",
    "/large.jpg",
    "/palash.webp",
    "/small.jpg",
    "/recep.jpg",
    "/1.jpg",
    "/out.jpg",
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
      <div className="relative h-64 sm:h-96 md:h-[28rem] lg:h-[32rem] overflow-hidden rounded-lg">
        <div
          className="absolute w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              style={{ left: `${index * 100}%` }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
