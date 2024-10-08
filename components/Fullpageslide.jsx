'use client'

import React from 'react'
import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import HeadCss from '../styles/HomepageSlider.module.css'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Fade } from 'react-awesome-reveal';

import 'swiper/css';

function Fullpageslide() {

  const anin = 'animate'

  const data = [
    {
      image: '/Designer(8).jpeg',
      title: 'Intellectual Property',
      description: 'We can help you protect your ideas, creative content and brands. '
    },
    {
      image: '/ai.png',
      title: 'Entertainment Law',
      description: `We represent individuals and businesses in the film, television, theatre, live entertainment, music, sports, social media and publishing industries.`
    },
    {
      image: '/openart-image_NAvHb-r-_1726640547841_raw.jpg',
      title: 'Business Law',
      description: `We provide clarity, guidance and strategic business law counsel to our clients as they establish their entities, raise financing and buy or sell assets.`
    },
    {
      image: '/Designer(5).jpeg',
      title: 'Disputes',
      description: `Whether you need to enforce or protect your rights, our experienced litigators can help you and mediation.`
    },
  ]

  return (
    <div className='w-full graypic'>
      <Swiper
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
        className='text-white'
      >
        {data.map((d, i) => (
          <SwiperSlide style={{height: '80vh'}}>
            <div className='flex items-center h-full'>
              <Image style={{objectFit: 'cover'}} className={i == 0 && 'flip'} fill={true} src={d.image}/>
              <Fade className={'absolute left-5'} delay={300}>
                <div className={' bg-transparent flex flex-col justify-center h-4/5 w-2/3 max-w-lg min-w-64 p-10  '}>
                  <h4 className={'text-3xl mb-6 '.concat(HeadCss.color2)}>{d.title}</h4>
                  <p className='text-lg leading-8 text-black'>{d.description}</p>
                  <div className={'py-2 px-6 text-white mt-6 flex gap-3 items-center w-fit '.concat(HeadCss.bg1)}>Learn more <HiOutlineArrowLongRight className='text-2xl'/></div>
                </div>
              </Fade>
            </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Fullpageslide