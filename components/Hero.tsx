"use client";
import React from 'react'
import { typeSequence } from '@/constants'
import IsmailCodes from '../public/IsmailCodes.png'
import Image from 'next/image'
import { AiOutlineDesktop }  from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import CustomButton from './CustomButton'

const Hero = () => {
  return (
    <div id='hero' className=' flex items-center justify-center'>
          <div 
        className=' h-screen lg:w-[80%] z-20 flex items-center justify-center flex-col'>
          {/* name */}
            <h1 className=' text-tertiary uppercase font-extrabold text-[150px] lg:text-[250px] xl:text-[350px] tracking-wider relative flex items-center'>
                Abu
                <Image src={IsmailCodes} width={500} height={50} quality={100} alt='' className=' absolute bottom-10  lg:bottom-10 lg:w-[800px]' />
            </h1>
            <div className=' flex items-center gap-2 justify-start'>
                <AiOutlineDesktop className=' hidden lg:block text-3xl text-accent' />
                {/* type animation */}
            <TypeAnimation
            sequence={typeSequence}
            deletionSpeed={20}
            repeat={Infinity}
            wrapper='div'
            className=' text-2xl lg:text-3xl xl:text-4xl font-comforta text-accent font-bold'
             />
               
             </div>
             {/* link to github profile */}
             <a href="https://github.com/abubakar508"  target="_blank"
            rel="noopener noreferrer">
             <CustomButton title='Explore More' containerStyles=' mt-4 py-3 font-comforta font-bold xl:py-4 xl:px-8' />
             </a>
        </div>
    </div>
  )
}

export default Hero