'use client'

import React from 'react'
import  { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

function Sliderdiv() {

  const student = [
    {
      name: 'Serita Kamau',
      ocupation: 'Beautician-Kings barber and Spur',
      testimonial: 'I am a proud student from *R.C.C.M.S,I have found great success with all education, motivation and skills instilled in me.I feel very motivated working in this field. Everyone in the institution was helpful, professional and really cared what puts students career first. Thank you R.C.C.M.S for helping me become the beautician I am today.',
      image: '/std4.jpeg'
    },
    {
      name: 'Amos Karimi',
      ocupation: 'Supervisor at Alba Hotel.',
      testimonial: 'The dedication of the tutors and the entire RCCMS fraternity went above and beyond to groom us into polished professionals ready for the corporate world. The environment was nurturing, and I was constantly encouraged to step out of my comfort zone, meet new people, and learn from every opportunity. Thank you RCCMS for believing in me and being a pivotal part of my journey!"',
      image: '/std2.jpeg'
    },
    {
      name: 'Carol  Kaunda',
      ocupation: 'Front Office Administration Assistant-Elsamere Naivasha',
      testimonial: 'Currently thriving as a Front Office Administration Assistant at Elsamere Naivasha,  My success in a dynamic environment showcases the college’s commitment to preparing students for successful careers in the Administrative and management Courses.',
      image: '/std3.jpeg'
    },
    {
      name: 'Solomon Muiruri',
      ocupation: 'Cosmetology specialist and consultant.',
      testimonial: `I acknowledge RCCMS as a professional school for it's cooperation with students and hands on approach by the tutors, I am grateful for the my experience, and I wholeheartedly wish all current and future students the very best in their academic and professional journeys.`,
      image: '/std1.jpeg'
    },
    {
      name: 'Immanuel Karanja',
      ocupation: 'Former student body President ',
      testimonial: `Ruiru college has nurtured and equipped me with boisterous skills that has helped me grow extensively in the Business sector, enabling me to venture into my own Business Thanks to RCCMS Staff  for an wholesome experience  and effort they always put to ensure a smooth learning experience.
      Anyone in search for a better and TVET Certified College, Ruiru College is your plug ,don't hesitate to enroll!!!
      `,
      image: '/std5.jpeg'
    }
  ]

  return (
    <div className={''}>
      <div className=''>
        <div className='py-3'>
          <Swiper
            breakpoints={{
              1: {
                slidesPerView: 1.1,
              },
              700: {
                slidesPerView: 2,
              },
              1030: {
                slidesPerView: 3,
              },
              1300: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay]}
            centeredSlides
            spaceBetween={6}
            autoplay={{
              delay: 2,
              disableOnInteraction: false
            }}
            loop={true}
            speed={3000}
            className='text-white'
          >
            {student.map((t, index) => (
              <SwiperSlide>
                <div className='w-full flex justify-center'>
                  <div className="rounded-3xl overflow-hidden title-color text-white w-80  bg-white items-center flex flex-col gap-2">
                    <div className='w-full flex -translate-y-6 justify-center pb-12 pt-4 scale-150 bg-white rounded-b-full'>
                      <div className=" min-w-20 scale-90 translate-y-6 mt-6 justify-center h-20 w-20 rounded-full overflow-hidden">
                        <Image alt="" width={150} height={150} className='min-h-full ' src={t.image}/>
                      </div>
                    </div>
                    <div className="flex flex-col px-5 py-4 justify-center items-center">
                      <h4 className="text-2xl  text-center font-bold pb-2 w-full ">{t.name}</h4>
                      <h5 className="text-base  text-center pb-2 font-bold w-full  pb-1">{t.ocupation}</h5>
                      <p className="pb-3">
                        {t.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Sliderdiv