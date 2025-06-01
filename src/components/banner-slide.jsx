"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "@/assets/styles/swiper-custom.css";
import { BANNER_IMAGES } from "@/data/banner";

export default function BannerSlideComponent() {
  const pagination = {
    clickable: true,
    renderBullet: function (_, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}>
        {BANNER_IMAGES.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-full md:h-[560px] h-[287px]'>
              <img src={item.url} className='w-full h-full object-cover' alt='FPT Software' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
