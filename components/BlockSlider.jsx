'use client'

import React from 'react'
import HeadCss from '../styles/HomepageSlider.module.css'
import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

function BlockSlider() {

  const data = [
    {
      title: 'My Title',
      description: 'The description is for the job that we do. The description will be brief to explaing what exactly we do'
    },
    {
      title: 'My Title',
      description: 'The description is for the job that we do. The description will be brief to explaing what exactly we do'
    },
    {
      title: 'My Title',
      description: 'The description is for the job that we do. The description will be brief to explaing what exactly we do'
    },
  ]

  return (
    <div className='w-full bg-white'>
      <div className={'py-16 w-full text-center text-4xl '.concat(HeadCss.color2)}>
        Our Expertese
      </div>
      <div className='px-4 mb-6'>
        <Swiper
          slidesPerView={1.3}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
          centeredSlides={true}
          className='text-white'
        >
          {data.map((d, i) => (
            <SwiperSlide >
              <div className='flex relative pb-12 justify-center'>
                <div style={{transform: 'translate(35px, 35px)'}} className={'w-full !h-4/5 absolute w-4/5 h-full '.concat(HeadCss.borderColor)}></div>
                <div className={'flex flex-col w-4/5 py-12 relative text-white px-2 items-center h-full '.concat(HeadCss.blockBg)}>
                  <div className='mb-8 text-3xl text-center'>{d.title}</div>
                  <div className='w-full text-xl font-sans leading-8 text-center px-3'>{d.description}</div>
                </div>
              </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default BlockSlider