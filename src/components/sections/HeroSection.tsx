import Image from "next/image";
import Link from "next/link";
import { Cormorant_Unicase, Corinthia } from "next/font/google";

const cormorantUnicase = Cormorant_Unicase({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const corinthia = Corinthia({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Düğün çifti gün batımında"
          fill
          sizes="100vw"
          quality={100}
          priority
          className="object-cover object-[50%_90%]"
        />
        <div className="absolute inset-0 bg-[#D7C2AE] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute w-full left-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent  pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center gap-8">
        <div>
          <h1
            className={`${corinthia.className} text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] leading-16 lg:leading-24 xl:leading-36`}
          >
            Birlikte Bir Ömür...
          </h1>
          <p className="max-lg:w-9/10 mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tortor dictum egestas
            pretium tellus viverra in. Facilisis eleifend dignissim.
          </p>
        </div>
        <Link
          href="#reservation"
          className="inline-flex items-center px-4 py-3 bg-white text-[#404040] rounded-lg hover:bg-[#D7C2AE] hover:text-black transition-colors space-x-2"
        >
          <i className="ri-calendar-todo-line text-xl" />
          <span>Rezervasyon Oluştur</span>
        </Link>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2  text-center w-full flex flex-col items-center justify-center gap-2 py-8">
        <span
          className={`${cormorantUnicase.className} block font-semibold text-white`}
        >
          Aşağı Kaydır
        </span>
        <div className="animate-bounce">
          <i className="ri-arrow-down-long-line text-xl text-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
