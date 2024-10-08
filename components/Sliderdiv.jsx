'use client'

import React from 'react'
import HeadCss from '../styles/HomepageSlider.module.css'
import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

function Sliderdiv() {
  return (
    <div className={'py-12 '.concat(HeadCss.gradientDiv)}>
      <div className='px-20'>
        <div className='py-3 text-white text-3xl'>
          Success Stories
        </div>
        <div className='py-3'>
          <Swiper
            slidesPerView={3}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false
            }}
            loop={true}
            speed={3000}
            className='text-white'
          >
            <SwiperSlide>Slider 1</SwiperSlide>
            <SwiperSlide>Slider 2</SwiperSlide>
            <SwiperSlide>Slider 3</SwiperSlide>
            <SwiperSlide>Slider 4</SwiperSlide>
            <SwiperSlide>Slider 5</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Sliderdiv