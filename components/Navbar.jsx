"use client"

import Image from 'next/image'
import React from 'react'
import { ChevronDown, CircleUserRound, MapPin, User } from 'lucide-react'
import LoginBtn from './LoginBtn'
import BigSearchBar from './BigSearchBar'

const Navbar = () => {
  return (
    <nav className='sticky top-0 px-[9%] py-2 border-[1px] border-gray-300 flex w-full items-center justify-between'>
        <div className='flex items-center gap-7'>
          {/* logo image */}
          <Image src="https://images.apollo247.in/images/icons/apollo247.svg" alt='logo' height={66} width={66}></Image>
          
        {/* location */}
        <div className='flex items-center gap-2'>
          <MapPin></MapPin>
          <div className='flex flex-col items-start justify-center'>
            <p className='text-gray-600 text-xs'>Select Location</p>
            <div className='flex gap-1 items-center'>
            <p className='text-gray-900 text-md font-semibold'>Select Address</p>
            <ChevronDown size={15}></ChevronDown>
            </div>
          </div>
        </div>
        </div>

        {/* login btn */}
        <BigSearchBar />
        <LoginBtn btnText={"Login"} icon={<CircleUserRound></CircleUserRound>}/>
    </nav>
  )
}

export default Navbar