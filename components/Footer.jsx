import React from 'react'
import Image from 'next/image'
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className="w-full text-white p-4 grid justify-items-center grid-cols-4 xmsm:grid-cols-7 xmd:grid-cols-12 title-color">
        <div className="col-span-3 self-center hidden xmsm:block">
          <Image alt='' width={150} height={150} className="" src={'/a29d2abffaa3667be2c61a94a0ccc015.png'} />
        </div>
        <div className='col-span-4 grid-cols-4 xmd:grid-cols-9 xmd:col-span-9 grid gap-6'>
          <div className="col-span-2 xmd:col-span-3">
            <div className="text-xl font-bold pb-4">Contacts</div>
            <div>Wakulima House Campus 2<sup>nd</sup> Floor <br/> Opp Ruiru Bus Terminals</div>
            <Link href={'tel:020 231 9877'}>
              <div className="text-base flex leading-3 pb-4 pt-2 gap-1.5"><MdCall/> 020 231 9877</div>
            </Link>
          </div>
          <div className="col-span-2 xmd:col-span-3">
            <div className='mt-11'>Finance House Campus 4<sup>th</sup> Floor <br/> Next To Ruiru Equity Bank</div>
            <Link href={'tel:0718 448 291'}>
              <div className="text-base flex leading-3 pb-4 pt-2 gap-1.5"><MdCall/>  0718 448 291</div>
            </Link>
          </div>
          <div className="col-span-2 hidden xmd:block xmd:col-span-3">
            <div className="text-xl font-bold pb-4 xmd:pb-6">Socials</div>
            <Link href={'https:// www.facebook.com/p/Ruiru-College-of-Catering-and-Management-Courses-RCCMS-100070130419338/'}>
              <div className="text-base flex leading-3 pb-4 gap-1.5"><FaFacebook/> Ruiru College</div>
            </Link>
            <Link href={'https://www.tiktok.com/@ruiru.college?_t=8q6DYUzydHS&_r=1'}>
              <div className="text-base flex leading-4 pb-4 gap-1.5"><AiFillTikTok className='text-xl'/> Ruiru College</div>
            </Link>
          </div>
          <div className="col-span-2 xmd:col-span-3">
            <div>Kiambu Road Campus <br/> Opp Kenya Prisons College</div>
            <Link href={'tel:0769669919'}>
              <div className="text-base flex leading-3 pb-4 pt-2 gap-1.5 "><MdCall/> 0769 669 919</div>
            </Link>
          </div>
          <div className="col-span-2 block xmd:hidden">
            <div className="text-xl font-bold pb-4">Socials</div>
            <Link href={'https://www.facebook.com/p/Ruiru-College-of-Catering-and-Management-Courses-RCCMS-100070130419338/'}>
              <div className="text-base flex leading-3 pb-4 gap-1.5"><FaFacebook/> Ruiru College</div>
            </Link>
            <Link href={'https://www.tiktok.com/@ruiru.college?_t=8q6DYUzydHS&_r=1'}>
              <div className="text-base flex leading-4 pb-4 gap-1.5"><AiFillTikTok className='text-xl'/> Ruiru College</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full text-white px-6 py-2 title-color">
        <div className="border-b-2 border-white w-full"></div>
        <div className="p-0.5">Copyright © 2024 RCCMS College</div>
      </div>
    </>
  )
}

export default Footer