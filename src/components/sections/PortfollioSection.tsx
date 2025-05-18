import { Cormorant_Unicase } from "next/font/google";
import WeddingLightbox from "../ui/WeddingLightbox";

const cormorantUnicase = Cormorant_Unicase({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Wedding data array
const weddingData = [
  {
    id: 1,
    firstName: "Rabia",
    secondName: "Enes",
    mainImage: "/images/weddings/wedding-1.webp",
    images: [
      { src: "/images/weddings/wedding-1.webp", alt: "Rabia & Enes Düğün 1" },
      { src: "/images/weddings/wedding-2.webp", alt: "Rabia & Enes Düğün 2" },
      { src: "/images/weddings/wedding-3.webp", alt: "Rabia & Enes Düğün 3" },
      { src: "/images/weddings/wedding-4.webp", alt: "Rabia & Enes Düğün 4" },
    ],
  },
  {
    id: 2,
    firstName: "Zeynep",
    secondName: "Mehmet",
    mainImage: "/images/weddings/wedding-2.webp",
    images: [
      { src: "/images/weddings/wedding-2.webp", alt: "Ayşe & Mehmet Düğün 1" },
      { src: "/images/weddings/wedding-3.webp", alt: "Ayşe & Mehmet Düğün 2" },
      { src: "/images/weddings/wedding-4.webp", alt: "Ayşe & Mehmet Düğün 3" },
      { src: "/images/weddings/wedding-1.webp", alt: "Ayşe & Mehmet Düğün 4" },
    ],
  },
  {
    id: 3,
    firstName: "Hacire",
    secondName: "Mehmet",
    mainImage: "/images/weddings/wedding-3.webp",
    images: [
      { src: "/images/weddings/wedding-3.webp", alt: "Zeynep & Ali Düğün 1" },
      { src: "/images/weddings/wedding-4.webp", alt: "Zeynep & Ali Düğün 2" },
      { src: "/images/weddings/wedding-1.webp", alt: "Zeynep & Ali Düğün 3" },
      { src: "/images/weddings/wedding-2.webp", alt: "Zeynep & Ali Düğün 4" },
    ],
  },
  {
    id: 4,
    firstName: "Merve",
    secondName: "Ceren",
    mainImage: "/images/weddings/wedding-4.webp",
    images: [
      { src: "/images/weddings/wedding-4.webp", alt: "Seda & Burak Düğün 1" },
      { src: "/images/weddings/wedding-1.webp", alt: "Seda & Burak Düğün 2" },
      { src: "/images/weddings/wedding-2.webp", alt: "Seda & Burak Düğün 3" },
      { src: "/images/weddings/wedding-3.webp", alt: "Seda & Burak Düğün 4" },
    ],
  },
];

const PortfollioSection = () => {
  return (
    <section className="w-full py-8 px-2 md:px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:gap-6">
        <h2
          className={` text-2xl lg:text-[2rem] font-semibold uppercase  ${cormorantUnicase.className}`}
        >
          MUTLULUĞUNU BİZİMLE PAYLAŞANLAR
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {weddingData.map((wedding) => (
            <WeddingLightbox
              key={wedding.id}
              firstName={wedding.firstName}
              secondName={wedding.secondName}
              mainImage={wedding.mainImage}
              images={wedding.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfollioSection;
