import React from 'react'
import Image from 'next/image'
import { MdCall } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className="w-full text-white p-4 grid justify-items-center grid-cols-4 xmsm:grid-cols-7 title-color">
        <div className="col-span-3 self-center hidden xmsm:block">
          <Image width={150} height={150} className="" src={'/a29d2abffaa3667be2c61a94a0ccc015.png'} />
        </div>
        <div className="col-span-2">
          <div className="text-xl font-bold pb-4">Contacts</div>
          <div>Wakulima House Campus <br/> Opp Buss Terminal</div>
          <Link href={'tel:0223 231 9877'}>
            <div className="text-base flex leading-3 pb-4 gap-1.5"><MdCall/> 020 231 9877</div>
          </Link>
          <div>Finance House Campus <br/> Next To Equity Bank</div>
          <Link href={'tel:0718 448 291'}>
            <div className="text-base flex leading-3 pb-4 gap-1.5"><MdCall/>  0718 448 291</div>
          </Link>
          <div>Kiambu Road Campus <br/> Opp Kenya Prisons</div>
          <Link href={'tel:0769669919'}>
            <div className="text-base flex leading-3 pb-4 gap-1.5 "><MdCall/> 0769 669 919</div>
          </Link>
        </div>
        <div className="col-span-2">
          <div className="text-xl font-bold pb-4">Socials</div>
          <Link href={'https:// www.facebook.com/p/Ruiru-College-of-Catering-and-Management-Courses-RCCMS-100070130419338/'}>
            <div className="text-base flex leading-3 pb-4 gap-1.5"><FaFacebook/> Ruiru College</div>
          </Link>
          <div className="text-base flex leading-4 pb-4 gap-1.5"><AiFillTikTok className='text-xl'/> Ruiru College</div>
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