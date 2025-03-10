'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const AboutUsSection = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <section className='w-full py-8 px-2 md:px-4'>
            <div className='max-w-7xl mx-auto flex max-md:flex-col gap-3 md:gap-6 lg:gap-12'>
                {/* About Us Images */}
                <div className='relative grid grid-cols-2 gap-2 md:gap-3 w-full md:w-1/2 max-md:h-[200px]'>
                    <div className='relative col-span-2 md:col-span-1 rounded-lg md:rounded-xl overflow-hidden h-full'>
                        <Image
                            src="/images/about-us/about-us-1.jpg"
                            fill
                            alt="Picture of the author"
                            className='object-cover'
                        />
                    </div>
                    <div className='col-span-2 md:col-span-1 grid grid-cols-2 gap-2 md:gap-3 h-full'>
                        <div className='relative col-span-1 md:col-span-2 rounded-lg md:rounded-xl overflow-hidden h-full'>
                            <Image
                                src="/images/about-us/about-us-2.jpg"
                                fill
                                alt="Picture of the author"
                                className='object-cover h-full'
                            />
                        </div>
                        <div className='relative col-span-1 md:col-span-2 rounded-lg md:rounded-xl overflow-hidden h-full'>
                            <Image
                                src="/images/about-us/about-us-3.jpg"
                                fill
                                alt="Picture of the author"
                                className='object-cover h-full'
                            />
                        </div>
                    </div>
                </div>
                {/* About Us Informations */}
                <div className='w-full md:w-1/2 flex flex-col gap-3 md:gap-6'>
                    <div>
                        <h2 className='text-2xl lg:text-[2rem] font-semibold font-[cormorant-unicase] uppercase'>
                            Hakkımızda
                        </h2>
                        <p className={`${showMore ? "" : "max-md:line-clamp-3"}`}>
                        Lorem ipsum dolor sit amet consectetur. Eros leo venenatis nisi laoreet elit mus leo amet euismod. Vel tincidunt hac tellus in quis amet libero sagittis nascetur. Nunc elit cursus viverra arcu nulla in libero ipsum suscipit. Vulputate sed varius pharetra sed eget. Duis amet mi at augue elit faucibus volutpat. Elementum volutpat aliquam iaculis risus at. Porta facilisis laoreet nunc gravida. Vitae et nullam hac nullam odio id. Scelerisque orci pellentesque sit elementum pulvinar facilisi. Sem proin nisl varius sit eleifend egestas augue. Hendrerit non odio orci ultricies pellentesque facilisi. Eget sit nunc mauris ornare consectetur quis suspendisse. <br/> <br/> Lacus habitasse vel semper sagittis nisi integer gravida. Massa quis suspendisse tortor tortor pellentesque auctor ac ipsum amet. Varius. 
                        </p>
                        <button className='underline underline-offset-2 text-black inline-block md:hidden' onClick={() => setShowMore(!showMore)}>{showMore ? "Daha Az Göster" : "Daha Fazla Göster"}</button>
                    </div>
                    <Link
                        href='#reservation'
                        className='inline-flex items-center px-3 py-2 lg:px-4 lg:py-3 bg-white border-2 border-[#d7c2ae] text-[#404040] rounded-lg hover:bg-[#D7C2AE] hover:text-black transition-colors space-x-2 w-fit'
                    >
                        <i className='ri-calendar-todo-line text-lg lg:text-xl' />
                        <span>Rezervasyon Oluştur</span>
                    </Link>
                    <div className='flex gap-2 items-center'>
                        <a href='/' target='_blank' rel='noopener noreferrer' className='hover:text-[#D7C2AE] hover:rotate-12 transform transition-transform duration-300 ease-in-out'>
                            <i className='ri-facebook-box-line text-xl' />
                        </a>
                        <a href='/' target='_blank' rel='noopener noreferrer' className='hover:text-[#D7C2AE] hover:rotate-12 transform transition-transform duration-300 ease-in-out'>
                            <i className='ri-instagram-line text-xl' />
                        </a>
                        <a href='/' target='_blank' rel='noopener noreferrer' className='hover:text-[#D7C2AE] hover:rotate-12 transform transition-transform duration-300 ease-in-out'>
                            <i className='ri-youtube-line text-xl' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection;
