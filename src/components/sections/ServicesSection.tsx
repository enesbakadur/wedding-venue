"use client";
import Image from "next/image";
import { Cormorant, Cormorant_Unicase } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantUnicase = Cormorant_Unicase({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Services data
const services = [
  {
    id: 1,
    title: "Salon Yapımı",
    image: "/images/services/services-1.webp",
    rotate: "lg:rotate-8",
  },
  {
    id: 2,
    title: "Salon Dekorasyonu",
    image: "/images/services/services-2.webp",
    rotate: "lg:-rotate-8",
  },
  {
    id: 3,
    title: "Salon Tasarımı",
    image: "/images/services/services-3.webp",
    rotate: "lg:rotate-6",
  },
  {
    id: 4,
    title: "Salon Renovasyonu",
    image: "/images/services/services-4.webp",
    rotate: "lg:-rotate-6",
  },
  {
    id: 5,
    title: "Salon Konsepti",
    image: "/images/services/services-1.webp",
    rotate: "lg:rotate-3",
  },
  {
    id: 6,
    title: "Salon Konsepti",
    image: "/images/services/services-2.webp",
    rotate: "lg:rotate-3",
  },
  {
    id: 7,
    title: "Salon Konsepti",
    image: "/images/services/services-3.webp",
    rotate: "lg:rotate-3",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full py-8">
      {/* Background Gray */}
      <div className="absolute inset-0 w-full h-full bg-[#F2F2F2]"></div>
      <div className="flex flex-col gap-3 relative z-10">
        {/* Title & Carousel */}
        <div className="max-w-7xl w-full mx-auto px-2 lg:px-4 xl:px-0 flex flex-col gap-3 md:gap-6">
          <h2
            className={` text-2xl lg:text-[2rem] font-semibold uppercase  ${cormorantUnicase.className}`}
          >
            HİZMETLERİMİZ
          </h2>
          {/* Carousel Navigation */}
          <div className="flex gap-2 items-center">
            <button className="swiper-button-prev size-8 lg:size-10 bg-transparent border-1 border-[#404040] rounded-full flex items-center justify-center cursor-pointer group z-20">
              <i className="ri-arrow-left-line text-xl group-hover:scale-110 transition-all duration-150"></i>
            </button>
            <button className="swiper-button-next size-8 lg:size-10 bg-transparent border-1 border-[#404040] rounded-full flex items-center justify-center cursor-pointer group z-20">
              <i className="ri-arrow-right-line text-xl group-hover:scale-110 transition-all duration-150"></i>
            </button>
          </div>
        </div>

        {/* Services Carousel */}
        <div className="flex">
          <Swiper
            slidesPerView={1}
            spaceBetween={-30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {services.map((service) => (
              <SwiperSlide className="px-5 lg:py-8">
                <div
                  key={service.id}
                  className={`w-full bg-white flex flex-col gap-3 rounded-3xl  transition-all duration-300 p-3 ${service.rotate} hover:rotate-0`}
                >
                  {/* Service Image */}
                  <div className="relative w-full aspect-square h-auto rounded-xl overflow-hidden">
                    <Image
                      src={service.image}
                      fill
                      alt={service.title}
                      className="object-cover pointer-events-auto"
                    />
                    <div className="absolute inset-0 bg-[#D7C2AE] mix-blend-overlay z-10"></div>
                  </div>
                  {/* Service Title */}
                  <h3
                    className={`text-center font-semibold text-2xl py-3 whitespace-nowrap text-ellipsis ${cormorant.className}`}
                  >
                    {service.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
