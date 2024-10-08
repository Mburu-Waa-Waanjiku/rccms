'use client'

import React from 'react'
import HeadCss from '../styles/HomepageSlider.module.css'
import Image from 'next/image'

function Teamgallery() {

  const imgs = [
    '/Andres.jpg',
    '/Domenic-Romano-3.jpg',
    '/Shaliz-4-1-445x500.png',
    '/SR.jpg'
  ]

  return (
    <div className={'py-20 '.concat(HeadCss.gradientDiv)}>
      <div className='w-full text-center text-white mb-12 text-4xl'>Meet the Team</div>
      <div className='flex justify-center px-8'>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 mlg:grid-cols-4'>
          {imgs.map((m) => (
            <Image src={m} width={300} height={450} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Teamgallery