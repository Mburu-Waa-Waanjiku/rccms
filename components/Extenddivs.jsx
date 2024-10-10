'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sliderdiv from './Sliderdiv';

function Extenddivs() {

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
          <Sliderdiv/>
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
              <Image key={index} alt='' width={300} className="max-h-24 " height={300} src={i}/>
            ))}
          </div>  
        }
      </div>
    </>
  )
}

export default Extenddivs