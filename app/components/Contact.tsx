'use client'
import React from 'react'
import Github from './svg/github'
import Linkedin from './svg/linkedin'
import Plane from "./svg/plane"
import {motion} from 'framer-motion'
import { useMediaQuery } from '@mui/material'

const Contact = () => {
  const notPc = useMediaQuery("(max-width: 640px)")

  return (
    <motion.section
    initial= {{y:30, opacity:0}}
    whileInView= {{y:0, opacity:1}}
    viewport={!notPc ? {margin: "-300px"}: {margin:"-100px"}}
    transition={{delay:0.1}}
     className='min-h-[50vh] mt-24 md:flex md:justify-between md:items-center' id='contact'>
        <div className='basis-1/2'>
          <h6 className='text-[22px] text-secondary uppercase font-medium'>Contact</h6>
          <h3 className='text-2xl tracking-wide font-medium mb-4 lg:text-3xl'>MOMEN ABD-ELWADOUD</h3>
          <p className='text-sm mb-4 lg:mb-8 lg:text-base'>I am always looking for new opportunities and challenges. Hire me to build your website or just invite me for a game of chess.</p>
          <a href="mailto:momenwadoudg@gmail.com"><button className='px-4 py-2 bg-primary font-semibold text-black rounded-lg text-xs lg:px-6 lg:text-sm'>Send Email</button></a>
          <div className='mt-4 flex gap-4 lg:mt-8 lg:gap-10'>
              <a href="https://github.com/MomenAbdelwadoud/" className='lg:scale-150'>
                  <Github color="rgba(255,255,255,0.7)"></Github>
              </a>
              <a href="https://www.linkedin.com/in/momen-abdelwadoud/" className='lg:scale-150'>
                  <Linkedin></Linkedin>
              </a>
          </div>
        </div>
        <Plane></Plane>
    </motion.section>
  )
}

export default Contact