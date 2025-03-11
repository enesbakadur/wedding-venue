"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hall data structure
const halls = [
  {
    id: 1,
    name: "Salon Grand",
    image: "/images/halls/hall-1.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros leo venenatis nisi laoreet elit mus leo amet euismod. Vel tincidunt hac tellus in quis amet libero sagittis nascetur. Nunc elit cursus viverra arcu nulla in libero ipsum suscipit. Vulputate sed varius pharetra sed eget. Duis amet mi at augue elit faucibus volutpat. Elementum volutpat aliquam iaculis risus at. Porta facilisis laoreet nunc gravida. Vitae et nullam hac nullam odio id. Scelerisque orci pellentesque sit elementum pulvinar facilisi. Sem proin nisl varius sit eleifend egestas augue. Hendrerit non odio orci ultricies pellentesque facilisi. Eget sit nunc mauris ornare consectetur quis suspendisse. Lacus habitasse vel semper sagittis nisi integer gravida. Massa quis suspendisse tortor tortor pellentesque auctor ac ipsum amet. Varius.",
  },
  {
    id: 2,
    name: "Salon Dream",
    image: "/images/halls/hall-2.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros leo venenatis nisi laoreet elit mus leo amet euismod. Vel tincidunt hac tellus in quis amet libero sagittis nascetur. Nunc elit cursus viverra arcu nulla in libero ipsum suscipit. Vulputate sed varius pharetra sed eget. Duis amet mi at augue elit faucibus volutpat. Elementum volutpat aliquam iaculis risus at. Porta facilisis laoreet nunc gravida. Vitae et nullam hac nullam odio id. Scelerisque orci pellentesque sit elementum pulvinar facilisi. Sem proin nisl varius sit eleifend egestas augue. Hendrerit non odio orci ultricies pellentesque facilisi. Eget sit nunc mauris ornare consectetur quis suspendisse. Lacus habitasse vel semper sagittis nisi integer gravida. Massa quis suspendisse tortor tortor pellentesque auctor ac ipsum amet. Varius.",
  },
  {
    id: 3,
    name: "Salon Grand",
    image: "/images/halls/hall-3.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros leo venenatis nisi laoreet elit mus leo amet euismod. Vel tincidunt hac tellus in quis amet libero sagittis nascetur. Nunc elit cursus viverra arcu nulla in libero ipsum suscipit. Vulputate sed varius pharetra sed eget. Duis amet mi at augue elit faucibus volutpat. Elementum volutpat aliquam iaculis risus at. Porta facilisis laoreet nunc gravida. Vitae et nullam hac nullam odio id. Scelerisque orci pellentesque sit elementum pulvinar facilisi. Sem proin nisl varius sit eleifend egestas augue. Hendrerit non odio orci ultricies pellentesque facilisi. Eget sit nunc mauris ornare consectetur quis suspendisse. Lacus habitasse vel semper sagittis nisi integer gravida. Massa quis suspendisse tortor tortor pellentesque auctor ac ipsum amet. Varius.",
  },
  {
    id: 4,
    name: "Salon Dream",
    image: "/images/halls/hall-4.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros leo venenatis nisi laoreet elit mus leo amet euismod. Vel tincidunt hac tellus in quis amet libero sagittis nascetur. Nunc elit cursus viverra arcu nulla in libero ipsum suscipit. Vulputate sed varius pharetra sed eget. Duis amet mi at augue elit faucibus volutpat. Elementum volutpat aliquam iaculis risus at. Porta facilisis laoreet nunc gravida. Vitae et nullam hac nullam odio id. Scelerisque orci pellentesque sit elementum pulvinar facilisi. Sem proin nisl varius sit eleifend egestas augue. Hendrerit non odio orci ultricies pellentesque facilisi. Eget sit nunc mauris ornare consectetur quis suspendisse. Lacus habitasse vel semper sagittis nisi integer gravida. Massa quis suspendisse tortor tortor pellentesque auctor ac ipsum amet. Varius.",
  },
];

const HallsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % halls.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + halls.length) % halls.length);
  };

  return (
    <section className="w-full py-8 px-2 md:px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:gap-6">
        <h2 className="text-2xl lg:text-[2rem] font-semibold font-[cormorant-unicase] uppercase">
          Salonlarımız
        </h2>
        {/* Halls Carousel */}
        <div className="flex max-lg:flex-col gap-3 md:gap-6 shadow-[0px_0px_10px_0px_rgba(64,64,64,0.05)] hover:shadow-[10px_10px_50px_0px_rgba(64,64,64,0.15)] p-2 md:p-4 lg:p-6 rounded-xl md:rounded-2xl lg:rounded-3xl transition-all duration-300">
          {/* Hall Image */}
          <div className="w-full lg:w-2/5 h-[200px] md:h-[300px] lg:h-full lg:!aspect-square relative rounded-lg md:rounded-xl overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={halls[currentIndex].image}
                  fill
                  alt={halls[currentIndex].name}
                  className="object-cover shadow-lg rounded-lg md:rounded-xl overflow-hidden pointer-events-auto"
                />
                <div className="absolute inset-0 bg-[#D7C2AE] mix-blend-overlay z-10"></div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Hall Details */}
          <div className="flex flex-col justify-between w-full lg:w-3/5 max-h-full">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-3">
                {/* Hall Number */}
                <p className="font-semibold text-lg md:text-xl lg:text-2xl font-[cormorant-unicase] text-[#D6D6D6]">
                  <span className="text-[#404040]">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  /<span>{String(halls.length).padStart(2, "0")}</span>
                </p>
                {/* Hall Name */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 50 }}
                    className="font-semibold text-lg md:text-xl lg:text-2xl font-[cormorant]"
                  >
                    {halls[currentIndex].name}
                  </motion.p>
                </AnimatePresence>
                {/* Hall Description */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 50 }}
                    className="line-clamp-[3] md:line-clamp-[5] lg:line-clamp-[6]"
                  >
                    {halls[currentIndex].description}
                  </motion.p>
                </AnimatePresence>
              </div>
              {/* Hall Details Button */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 50 }}
                >
                  <Link
                    href="#reservation"
                    className="inline-flex items-center px-3 py-1 md:py-2 lg:px-4 bg-white border-2 border-[#d7c2ae] text-[#404040] rounded-lg hover:bg-[#D7C2AE] hover:text-black transition-colors space-x-2 w-fit"
                  >
                    <i className="ri-eye-line text-lg lg:text-xl" />
                    <span>Detayları İncele</span>
                  </Link>
                </motion.p>
              </AnimatePresence>
            </div>
            {/* Hall Navigation Buttons */}
            <div className="w-full py-6 flex justify-between items-center">
              <button
                onClick={handlePrev}
                className="hover:scale-110 transition-transform duration-75 cursor-pointer"
              >
                <i className="ri-arrow-left-line text-lg lg:text-2xl" />
              </button>
              <button
                onClick={handleNext}
                className="hover:scale-110 transition-transform duration-75 cursor-pointer"
              >
                <i className="ri-arrow-right-line text-lg lg:text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallsSection;
