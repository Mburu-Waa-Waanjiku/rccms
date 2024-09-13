'use client'

import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { Slide } from 'react-awesome-reveal';

function Homeanimations() {

  return (
    <>
      <div style={{top: '55vh'}} className="text-5xl sm:text-7xl font-bold w-full text-center text-white absolute ">
        <Slide direction="right" triggerOnce>
          <div className=" pb-4">RUIRU COLLEGE</div>
        </Slide>
        <Slide direction="left" triggerOnce>
          <div className="text-2xl">BUILT FOR A PURPOSE</div>
        </Slide>
      </div>
      <Slide direction="up" triggerOnce>
        <div className="flex justify-center font-bold absolute bottom-12 w-full">
          <div className="rounded-xl flex bg-white bg-white items-center justify-between w-3/4 h-14 p-2 min-w-72">
            <div></div>
            <div className="flex flex-col items-center justify-center">
              <GiGraduateCap className="text-3xl"/>
              <span className="leading-3 hidden sm:block mb-1.5">COURSES</span>
            </div>
            <div className="w-0.5 bg-black h-full"></div>
            <div className="flex flex-col items-center justify-center gap-0.5">
              <MdCall className="text-2xl"/>
              <span className="leading-3 hidden sm:block mb-1.5">CONTACTS</span>
            </div>
            <div className="w-0.5 bg-black h-full"></div>
            <div className="flex flex-col items-center justify-center gap-0.5">
              <IoShareSocialSharp className="text-2xl"/>
              <span className="leading-3 hidden sm:block mb-1.5">SOCIALS</span>
            </div>
            <div className="w-0.5 bg-black h-full"></div>
            <div className="flex flex-col items-center justify-center gap-10.5">
              <IoLocationSharp className="text-2xl"/>
              <span className="leading-3 hidden sm:block mb-1.5">LOCATION</span>
            </div>
            <div></div>
          </div>
        </div>
      </Slide>
    </>
  )
}

export default Homeanimations