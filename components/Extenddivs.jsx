'use client'

import React, { useState } from 'react';
import ApplyButton from './ApplyButton';
import Image from 'next/image';

function Extenddivs() {

  const shortCourses = [
    {
      name:'Calinary Arts',
      image: '/13e6b5defdc2cb87e53a9dbf027e70ca.jpg'
    },
    {
      name: 'Cake Decoration',
      image: '/7cfdc85b203699fcba4b8aa149ebd62e.jpg'
    },
    {
      name: 'Front Offive',
      image: '/6f4175f2499f20423e439f7fe12f5600.png'
    },
    {
      name: 'Tour Guiding',
      image: '/70d27ecabc0a6707fe2a9460dcb537fe.jpg'
    }
  ]

  const student = [
    {
      name: 'Allan Mwiti',
      ocupation: 'CEO, Conva Counsulants',
      testimonial: 'If I was to choose all over ​again a school to go to, I ​would choose RCCMS 100 ​times over.',
      image: '/ce1c35c07233d4a240d31e0875810db9.png'
    },
    {
      name: 'Mary Nekesa',
      ocupation: 'Chief pastry cheff',
      testimonial: 'If I was to choose all over ​again a school to go to, I ​would choose RCCMS 100 ​times over.',
      image: '/ce1c35c07233d4a240d31e0875810db9.png'
    }
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
          <div style={{maxWidth:1000}} className="p-6 grid gap-0.5 grid-cols-1 slg:grid-cols-2">
            {shortCourses.map((course, index) => (
              <div  key={index} className=" relative max-w-96 slg:max-w-full">
                <Image alt={course.name} width={800} height={600} src={course.image}/>
                <div className="absolute flex flex-col justify-end short-coursebg text-white h-2/3 bottom-0 w-full p-5">
                  <h1 className="text-3xl font-bold pb-6">{course.name}</h1>  
                  <ApplyButton shortCourse={true} applyTitle={course.name}/>
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
          <div className="flex flex-col justify-center gap-4 p-4 items-center slg:flex-row">
            {student.map((t, index) => (
              <div className="rounded-3xl w-80 p-4 bg-white items-center flex gap-6">
                <div className=" min-w-20 justify-center h-20 rounded-full overflow-hidden">
                  <Image alt="" width={150} height={150} src={t.image}/>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h4 className="text-2xl title-text font-bold w-full text-start">{t.name}</h4>
                  <h5 className="text-base title-text font-bold w-full text-start pb-1">{t.ocupation}</h5>
                  <p className="">
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