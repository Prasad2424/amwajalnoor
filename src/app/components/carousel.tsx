'use client'
import Link from 'next/link';
import React from 'react'
import Image from '../../../node_modules/next/image'

type HomeCarouselProps = {
  onReadMoreClick: () => void;
};


const banners = [
  '/images/banner2c.png',
  '/images/banner3c.png',
  '/images/banner4c.png',
  '/images/banner5c.png',
]
const HomeCarousel = ({ onReadMoreClick }: HomeCarouselProps) => {

  return (
    <div className='homeCarousel w-full h-[300px] xl:h-screen lg:h-screen md:h-screen sm:h-[420px] text-white flex items-center justify-center relative'>
      <div className='w-full h-full  flex items-center justify-center'>
        <div className='w-2/3 h-[90%] flex items-center justify-center'>
          <Image src={"/images/client-background.png"} alt="logo" fill className='object-fill' />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
        </div>
        <div className='absolute w-full h-[300px] xl:h-[620px] lg:h-[620px] md:h-[620px] sm:h-[620px]  flex items-center justify-between'>
          <div className="w-[70%] xl:w-[55%] lg:w-[55%] md:w-[65%] sm:w-[70%] h-full  absolute bottom-0 top-10 -left-10 xl:left-0  lg:left-0 md:-left-15 sm:-left-20 flex items-start justify-start z-50">
            <div className=' w-1/3  h-[90%] xl:w-3/4 xl:h-[90%] lg:w-1/2 lg:h-[90%] md:w-3/4 md:h-[90%]'>
              <Image src={"/images/companyLogo3.png"} alt="logo" fill className='object-contain xl:object-cover lg:object-cover md:object-contain sm:object-contain' />
            </div>
          </div>
        </div>
        <div className="relative z-20 w-[70%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-[70%] h-full flex items-center">
          <div className="w-full text-white">
            <h1 className="text-lg xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold leading-tight tracking-tight">
              Reliable Manpower. <br /> Delivered with<br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Excellence.
              </span>
            </h1>

            <p className="mt-1 xl:mt-4 lg:mt-4 md:mt-2 sm:mt-2  text-gray-200 text-[12px] xl:text-lg lg:text-lg md:text-md sm:text-sm">
              Delivering top-tier technical solutions for your complex projects.
            </p>

            {/* Buttons */}
            <div className="mt-2 xl:mt-6 lg:mt-6 md:mt-4 sm:mt-2 h-8 xl:h-12 flex gap-6 items-center justify-start">

              <Link href={"/ongoing-projectsf"} className="h-full bg-orange-500 hover:bg-orange-600 px-3 xl:px-6 lg:px-6 md:px-6 sm:px-6 py-2 rounded-lg font-semibold shadow-lg  hover:scale-105 transition-all duration-300 text-[10px] xl:text-[18px] lg:text-[18px] md:text-[14px] sm:text-[12px]">
                Our Projects
              </Link >

              <Link href={"/contact-us"} className="h-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 px-3 py-2 rounded-lg font-semibold hover:scale-105 transition-all duration-300 xl:px-6 lg:px-6 md:px-6 sm:px-6 text-[10px] xl:text-[18px] lg:text-[18px] md:text-[14px] sm:text-[12px]">
                Contact Us
              </Link >

            </div>

          </div>

        </div>
      </div>
    </div>
  )

}
export default HomeCarousel