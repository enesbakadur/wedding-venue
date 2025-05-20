'use client';
import { Cormorant, Cormorant_Unicase, Corinthia } from 'next/font/google';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cormorant = Cormorant({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
});

const cormorantUnicase = Cormorant_Unicase({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
});

const corinthia = Corinthia({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700'],
});

const comments = [
    {
        id: 1,
        name: 'Enes Bakadur',
        description:
            'Lorem ipsum dolor sit amet consectetur. Bibendum accumsan pellentesque leo adipiscing eget. Odio neque lacus ut gravida mauris. Porttitor fusce amet sed in congue. Volutpat eu risus egestas metus cursus a. Massa augue feugiat augue ac diam sapien lorem. Elementum cras arcu justo iaculis vel ornare tempor. Risus congue lacinia suspendisse volutpat facilisis mollis sit vitae. Arcu elit velit nec habitant vitae iaculis pulvinar viverra. Felis sed duis faucibus velit rhoncus.',
    },
    {
        id: 2,
        name: 'Rabia Demir',
        description:
            'Lorem ipsum dolor sit amet consectetur. Eros leo venenatis nisi laoreet elit mus leo amet euismod. Vel tincidunt hac tellus in quis amet libero sagittis nascetur. Nunc elit cursus viverra arcu nulla in libero ipsum suscipit. Vulputate sed varius pharetra sed eget. Duis amet mi at augue elit faucibus volutpat. Elementum volutpat aliquam iaculis risus at. Porta facilisis laoreet nunc gravida. Vitae et nullam hac nullam odio id. Scelerisque orci pellentesque sit elementum pulvinar facilisi. Sem proin nisl varius sit eleifend egestas augue. Hendrerit non odio orci ultricies pellentesque facilisi. Eget sit nunc mauris ornare consectetur quis suspendisse. Lacus habitasse vel semper sagittis nisi integer gravida. Massa quis suspendisse tortor tortor pellentesque auctor ac ipsum amet. Varius.',
    },
    {
        id: 3,
        name: 'Onur Tunca',
        description:
            'Lorem ipsum dolor sit amet consectetur. Eros leo venenatis nisi laoreet elit mus leo amet euismod. Vel tincidunt hac tellus in quis amet libero sagittis nascetur. Nunc elit cursus viverra arcu nulla in libero ipsum suscipit. Vulputate sed varius pharetra sed eget. Duis amet mi at augue elit faucibus volutpat. Elementum volutpat aliquam iaculis risus at. Porta facilisis laoreet nunc gravida. Vitae et nullam hac nullam odio id. Scelerisque orci pellentesque sit elementum pulvinar facilisi. Sem proin nisl varius sit eleifend egestas augue. Hendrerit non odio orci ultricies pellentesque facilisi. Eget sit nunc mauris ornare consectetur quis suspendisse. Lacus habitasse vel semper sagittis nisi integer gravida. Massa quis suspendisse tortor tortor pellentesque auctor ac ipsum amet. Varius.',
    },
];

const CommentsSection = () => {
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
        setCurrentIndex((prev) => (prev + 1) % comments.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex(
            (prev) => (prev - 1 + comments.length) % comments.length
        );
    };
    return (
        <section className='w-full py-8 px-2 md:px-4 bg-[#F5EFE9] relative'>
            <div className='max-w-7xl mx-auto flex flex-col gap-3 md:gap-6 overflow-hidden'>
                <h2
                    className={` text-2xl lg:text-[2rem] font-semibold uppercase text-center  ${cormorantUnicase.className}`}
                >
                    BİZİ ONURLANDIRANLAR
                </h2>
                {/* Comments Carousel */}
                <div className='flex justify-between items-center gap-4 md:gap-8 lg:gap-12'>
                    <button
                        onClick={handlePrev}
                        className='size-8 lg:size-10 !aspect-square bg-transparent border-1 border-[#404040] rounded-full flex items-center justify-center cursor-pointer group z-20'
                    >
                        <i className='ri-arrow-left-line text-xl group-hover:scale-110 transition-all duration-150' />
                    </button>
                    {/* Comments */}
                    <div className='flex flex-col gap-4 md:gap-6 lg:gap-8'>
                        {/* Customer Comment */}
                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={currentIndex}
                                initial={{
                                    opacity: 0,
                                    x: direction * 50,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    x: -direction * 50,
                                }}
                                className='text-center'
                            >
                                {comments[currentIndex].description}
                            </motion.p>
                        </AnimatePresence>
                        {/* Customer Name */}
                        <AnimatePresence mode='wait'>
                            <motion.p
                                key={currentIndex}
                                variants={slideVariants}
                                initial='enter'
                                animate='center'
                                exit='exit'
                                transition={{
                                    x: {
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30,
                                    },
                                    opacity: { duration: 0.2 },
                                }}
                                className={`font-semibold text-lg md:text-xl lg:text-2xl text-center ${cormorant.className}`}
                            >
                                {comments[currentIndex].name}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                    <button
                        onClick={handleNext}
                        className='size-8 lg:size-10 !aspect-square bg-transparent border-1 border-[#404040] rounded-full flex items-center justify-center cursor-pointer group z-20'
                    >
                        <i className='ri-arrow-right-line text-xl group-hover:scale-110 transition-all duration-150' />
                    </button>
                </div>
            </div>
            <i className='ri-double-quotes-l absolute -top-10 sm:-top-12 lg:-top-16 xl:-top-24 2xl:-top-32 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:left-0 lg:translate-x-0 text-7xl sm:text-8xl lg:text-[10rem] xl:text-[14rem] 2xl:text-[18rem] text-[#D7C2AE] pointer-events-none leading-none z-30' />
            <i className='ri-double-quotes-r absolute -bottom-10 sm:-bottom-12 lg:-bottom-16 xl:-bottom-24 2xl:-bottom-32 max-lg:right-1/2 max-lg:translate-x-1/2 lg:right-0 lg:translate-x-0 text-7xl sm:text-8xl lg:text-[10rem] xl:text-[14rem] 2xl:text-[18rem] text-[#D7C2AE] pointer-events-none leading-none z-30' />
        </section>
    );
};

export default CommentsSection;
