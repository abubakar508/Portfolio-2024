import React from 'react'
import { ModeToggle } from './ModeToggle'
import Image from 'next/image'
import logo from '../public/Logo.png'
import typo from '../public/typography.png'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-center lg:px-24 py-3 px-2'>
      <div>
        <div className=' flex items-center gap-2'>
          <Image
          src={logo}
          width={50}
          height={50}
          alt='nav-logo'
           />
           <Image
          src={typo}
          width={180}
          height={50}
          alt='nav-logo'
           />
        </div>
      <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar