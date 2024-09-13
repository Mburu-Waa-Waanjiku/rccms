'use client'

import React, { useState } from 'react'
import Apply from './Apply';


function ApplyButton({ shortCourse, homeApply, applyTitle }) {

  const [open, setOpen] = useState(false);

  const openLogger = () => {
    setOpen(true);
  }

  const closeLogger = () => {
    setOpen(false);
    console.log(open);
  }

  return (
    <>
      { homeApply ?
        <div onClick={openLogger} style={{transform: 'translate(-4vw)'}} className="px-4 cursor-auto rounded-full rounded-full title-color absolute top-16 sm:top-20 title-gradien right-0 text-white text-base w-32 font-bold pb-2 pt-0 text-center ">
          Apply
        </div> : shortCourse ?
        <p onClick={openLogger} className="px-4 cursor-auto w-24 text-center pb-1.5 font-bold border-2 border-white">Apply</p> :
        <div onClick={openLogger} className="title-gradien cursor-auto mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Apply</div>
      }
      {open && 
        <>
          <Apply applyTitle={applyTitle} closeLogger={closeLogger}/>
        </>
      }
    </>
  )
}

export default ApplyButton