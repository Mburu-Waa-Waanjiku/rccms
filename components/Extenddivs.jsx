'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Extenddivs() {

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

  const shortCourses = [
    'Short-Courses-In-Business',
    'Short-Courses-In-Hospitality',
    'Short-Courses-In-Front-Office-Operations',
    'Short-Courses-In-Tourism',
    'Short-Courses-In-ICT',
    'Short-Courses-In-Hairdressing',
    'Short-Courses-In-Beauty',
    'Integrated-Courses-(After-form-4)',
    'Care-Giver',
  ]

  const partners = [
    '/6a0bb79132eb790b064d1a88c2412106.png', 
    '/3fbefe978c99c935b0dc3b83099f7a82.jpg'
  ]
  
  const [viewBar, setViewbar] = useState(false);
  const [viewTests, setViewtests] = useState(false);
  const [viewPartner, setPartner] = useState(false);

  return (
    <>
      {/* ------------ Short courses ------------- */}
      <div className="bg-highlight px-3 pt-5 pb-6 mb-4">
        <div className="text-4xl title-text  sm:text-start mb-3">Short Courses</div>
        <div className="flex justify-between">
          <div className="title-text text-2xl w-32 pt-0.5 pb-2  ">Join Us today</div>
          <div onClick={()=> {viewBar ? setViewbar(false) : setViewbar(true)}} className={"title-gradien cursor-auto text-xl w-32 h-8 items-end text-center text-white ".concat( !viewBar && 'pt-0.5 !text-base')}>{ viewBar ? 'Close' : 'View Courses'}</div>
        </div>
      </div>
      {/* short courses */}
      {viewBar && 
        <div className="flex justify-center">
          <div style={{maxWidth:1000}} className="p-6 grid gap-5 w-full grid-cols-1 slg:grid-cols-2">
            {shortCourses.map((course, index) => (
              <div  key={index} className=" relative title-color w-full">
                <div className="flex flex-col justify-end  text-white  w-full p-5">
                  <h1 className="text-xl font-medium pb-6">{course.split('-').join(' ')}</h1>  
                  <Link href={`/short-courses/${course}`}>
                    <p className="px-4 cursor-pointer w-28 text-center pb-1.5 whitespace-nowrap border-2 border-white">View Courses</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      }
      {/* testimonials */}
      <div className="bg-highlight px-3 mb-4 pt-5 pb-6">
        <div className="text-3xl title-text  text-center pt-2 mb-3">
          <h5>Alumni & Student Testimonials</h5>
          <div className="flex justify-end pt-3">
            <div onClick={() => {viewTests ? setViewtests(false) : setViewtests(true)}} className={"title-gradien cursor-auto text-xl w-32 h-8 items-end text-center text-white ".concat( !viewTests && 'pt-0.5 !text-base')}>{ viewTests ? 'Close' : 'View'}</div>
          </div>
        </div>
        {viewTests &&
          <div className="flex flex-col  justify-center gap-4 p-4 items-center slg:flex-row">
            {student.map((t, index) => (
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
            ))}
          </div>
        }
      </div>
      {/* Partners */}
      <div className={"px-4 bg-highlight pb-10 ".concat(viewPartner && '!bg-white')}>
        <div className="w-full text-center pt-6 pb-12 text-3xl title-text ">
          <h5>Our Partners</h5>
          <div className="flex justify-end pt-3">
            <div onClick={() => {viewPartner ? setPartner(false) : setPartner(true)}} className={"title-gradien cursor-auto text-xl w-32 h-8 items-end text-center text-white ".concat( !viewPartner && 'pt-0.5 !text-base')}>{ viewPartner ? 'Close' : 'View'}</div>
          </div>
        </div>
        {viewPartner &&
          <div className="flex justify-center gap-8">
            {partners.map((i, index)=> (
              <Image key={index} width={300} className="max-h-24 " height={300} src={i}/>
            ))}
          </div>  
        }
      </div>
    </>
  )
}

export default Extenddivs