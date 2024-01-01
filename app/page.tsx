import About from '@/components/About'
import Hero from '@/components/Hero'
import { ModeToggle } from '@/components/ModeToggle'
import Projects from '@/components/Projects'
import WebThree from '@/components/WebThree'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default page