'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { services } from '../export';

const ServicesPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="services" className="w-full bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-200 mb-4 ">
            Explore Our Services
          </h1>
        </div>
        <div className="space-y-6">
          {services.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={item.title}
                className="bg-white h-[900px] rounded-2xl shadow-md overflow-hidden"
              >
                {/* HEADER */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {item.title}
                    </h2>
                  </div>
                </button>
                <div className="h-[500px] xl:h-[1200px] lg:h-[1100px] md:h-[900px] sm:h-[700px] border-t px-6 pb-6 pt-4 space-y-6 transform duration-1000 ">
                  <div className='w-full h-[50%] '>
                  <div className="h-full relative w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"                    />
                  </div>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start space-x-3 text-gray-700"
                      >
                        <span className="text-blue-600 font-bold">✔</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;