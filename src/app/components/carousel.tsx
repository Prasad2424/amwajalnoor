'use client'
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
    <div className='homeCarousel w-full h-[300px] xl:h-[620px] lg:h-[620px] md:h-[500px] sm:h-[420px] text-white flex items-center justify-center relative'>
    <div className='w-full h-full  flex items-center justify-center'>
        <div className='w-2/3 h-[90%] flex items-center justify-center'>
          <Image src={"/images/client-background.png"} alt="logo" fill className='object-fill' />
        </div>
        <div className='absolute w-full h-[300px] xl:h-[620px] lg:h-[620px] md:h-[620px] sm:h-[620px]  flex items-center justify-between'>
          <div className="w-[85%] xl:w-[55%] lg:w-[65%] md:w-[85%] h-full  absolute bottom-0 top-10 -left-10 xl:left-0  lg:left-0 md:-left-15 sm:-left-20 flex items-start justify-start">
            <div className=' w-1/3  h-[90%] xl:w-3/4 xl:h-[90%] lg:w-1/2 lg:h-[90%] md:w-3/4 md:h-[90%]'>
              <Image src={"/images/companyLogo3.png"} alt="logo" fill className='object-contain xl:object-cover lg:object-cover md:object-contain sm:object-contain' />
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )

}
export default HomeCarousel