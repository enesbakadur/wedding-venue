"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Corinthia } from "next/font/google";

const corinthia = Corinthia({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Add CSS for active thumbnail
const activeThumbStyle = `
  .swiper-slide-thumb-active {
    opacity: 1 !important;
  }
  .swiper-slide-thumb-active img {
    filter: grayscale(0) !important;
  }
`;

// Define image type
interface ImageItem {
  src: string;
  alt?: string;
}

// Define props type
interface WeddingLightboxProps {
  mainImage: string;
  firstName?: string;
  secondName?: string;
  images: ImageItem[];
}

const WeddingLightbox = ({
  mainImage,
  firstName = "",
  secondName = "",
  images = [],
}: WeddingLightboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  // Reset Swiper states when modal is closed
  useEffect(() => {
    if (!isOpen) {
      // Reset all Swiper related states when modal is closed
      setMainSwiper(null);
      setThumbsSwiper(null);
    }
  }, [isOpen]);

  // Make sure navigation is properly initialized when component mounts or refs change
  useEffect(() => {
    if (isOpen && mainSwiper && prevRef.current && nextRef.current) {
      // Update navigation when refs are ready
      // @ts-ignore
      mainSwiper.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      mainSwiper.params.navigation.nextEl = nextRef.current;
      mainSwiper.navigation.init();
      mainSwiper.navigation.update();
    }
  }, [isOpen, mainSwiper]);

  const handleClose = () => {
    // First destroy swiper instances if they exist
    if (mainSwiper) {
      mainSwiper.destroy();
    }
    if (thumbsSwiper) {
      thumbsSwiper.destroy();
    }
    // Then close the modal
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative col-span-1 !aspect-video w-full rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300"
      >
        {/* Main Image */}
        <Image
          src={mainImage}
          alt="Wedding Lightbox"
          fill
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        {/* Filter */}
        <div className="hidden group-hover:block absolute inset-0 bg-[#D7C2AE] mix-blend-overlay z-10 transition-all duration-300"></div>
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent w-full h-full z-20"></div>
        {/* Title */}
        <h3
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 ${corinthia.className} text-5xl z-30 text-white`}
        >
          <span className="mr-4">{firstName}</span>&
          <span className="ml-4">{secondName}</span>
        </h3>
      </button>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full md:w-3/4 lg:w-2/3 h-auto max-h-[90vh] flex flex-col items-center justify-center gap-4 px-4 py-6">
            <style jsx global>
              {activeThumbStyle}
            </style>

            {/* Main Swiper - explicit dimensions added */}
            <div className="w-full h-auto aspect-video relative">
              <Swiper
                key="main-swiper"
                loop={true}
                spaceBetween={10}
                onSwiper={setMainSwiper}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 !aspect-video w-full h-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={`main-slide-${index}`}>
                    <Image
                      src={image.src}
                      alt={image.alt || `Wedding Image ${index + 1}`}
                      fill
                      className="w-full h-full object-cover rounded-xl md:rounded-2xl lg:rounded-3xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Carousel Navigation - moved outside Swiper for better positioning */}
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex gap-2 items-center justify-between z-[99] px-4 pointer-events-none">
                <button
                  ref={prevRef}
                  className="size-8 lg:size-10 bg-white rounded-full flex items-center justify-center cursor-pointer group z-20 pointer-events-auto"
                >
                  <i className="ri-arrow-left-line text-xl group-hover:scale-110 transition-all duration-150"></i>
                </button>
                <button
                  ref={nextRef}
                  className="size-8 lg:size-10 bg-white rounded-full flex items-center justify-center cursor-pointer group z-20 pointer-events-auto"
                >
                  <i className="ri-arrow-right-line text-xl group-hover:scale-110 transition-all duration-150"></i>
                </button>
              </div>
            </div>

            {/* Thumbs Swiper */}
            <div className="w-full h-auto">
              <Swiper
                key="thumbs-swiper"
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]} // Remove Navigation module from thumbs
                className="mySwiper w-full cursor-pointer"
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={`thumb-slide-${index}`}
                    className="!aspect-square !size-16 md:!size-20 opacity-70 hover:opacity-100 transition-all"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={
                          image.alt || `Wedding Image Thumbnail ${index + 1}`
                        }
                        fill
                        className="w-full h-full object-cover rounded-lg md:rounded-xl grayscale transition-all duration-300"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <button
              onClick={handleClose}
              className="bg-white text-black px-4 py-2 rounded-full mt-4 cursor-pointer flex items-center gap-1 group"
            >
              <i className="ri-close-line text-xl group-hover:scale-110 transition-all duration-150"></i>
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WeddingLightbox;
