import React from 'react'
import Image from 'next/image'
import { MdCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className="w-full text-white p-4 grid justify-items-center grid-cols-4 xmsm:grid-cols-7 title-color">
        <div className="col-span-3 hidden xmsm:block">
          <Image width={150} height={150} className="" src={'/a29d2abffaa3667be2c61a94a0ccc015.png'} />
        </div>
        <div className="col-span-2">
          <div className="text-xl font-bold pb-4">Contacts</div>
          <Link href={'tel:0223 231 9877'}>
            <div className="text-base flex leading-3 pb-4 gap-1.5"><MdCall/> 0223 231 9877</div>
          </Link>
          <Link href={'tel:0223 231 9877'}>
            <div className="text-base flex leading-3 pb-4 gap-1.5"><MdCall/> 07​33 44 5566</div>
          </Link>
          <div className="text-base leading-3 "> info@ruirucollege.ac.ke</div>
        </div>
        <div className="col-span-2">
          <div className="text-xl font-bold pb-4">Socials</div>
          <div className="text-base flex leading-3 pb-4 gap-1.5"><FaFacebookF/> Ruiru College</div>
          <div className="text-base flex leading-3 pb-4 gap-1.5"><BsTwitterX/> Ruiru College</div>
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