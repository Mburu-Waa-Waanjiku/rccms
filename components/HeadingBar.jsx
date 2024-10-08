import React from 'react'
import HeadCss from '../styles/HomepageSlider.module.css'
import Image from 'next/image'
import { TbMenu2 } from "react-icons/tb";

function HeadingBar() {
  return (
    <div className="fixed z-10 top-0 w-full bg-white">
      <div className='flex w-full block font-medium mlg:hidden text-white'>
        <div className={'flex flex-grow justify-center text-base am1:text-lg p-1.5 '.concat(HeadCss.bg1)}>
          SCHEDULE NOW
        </div>
        <div className={'flex flex-grow justify-center text-base am1:text-lg p-1.5 '.concat(HeadCss.bg2)}>
          0722 11 44 46
        </div>
      </div>
      <div className='px-3 bg-white flex w-full'>
        <div className='w-1/2 mlg:w-24'>
          <Image className='max-h-24 max-w-64' width={400} height={150} src={'/loglog.png'}/>
        </div>
        <div className={'flex p-4 flex-grow gap-2  mlg:text-base justify-end '.concat(HeadCss.color1)}>
          <TbMenu2 className='text-4xl'/>
        </div>
      </div>      
    </div>
  )
}

export default HeadingBar