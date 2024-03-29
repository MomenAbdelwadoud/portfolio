'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { useMediaQuery } from '@mui/material'



const About = () => {
  const notPc = useMediaQuery("(max-width: 640px)")
  return (
    <motion.section
      initial= {{y:30, opacity:0}}
      whileInView= {{y:0, opacity:1}}
      viewport={!notPc ? {margin: "-350px"}: {margin:"-100px"}}
      // transition={{delay:0.3}}
      id='about' className='mt-14 md:mt-24 py-10 font-light flex flex-wrap gap-4 items-center justify-center md:justify-between'>
        <div>
            <h6 className='text-sm text-secondary -mb-1 lg:text-base'>ABOUT</h6>
            <h3 className='text-2xl tracking-wide font-medium mb-2 lg:text-3xl'>MOMEN ABD-ELWADOUD</h3>
            <p className='text-sm py-2 max-w-xs lg:text-base lg:max-w-md'>Iam a self-taught front-end developer and an undergraduate student. I build beautiful, responsive, and user-friendly websites.</p>
            <p className='text-primary py-2'>{"{"}</p>
            <p className='text-sm'><b className='font-medium'>Frameworks: </b>[ReactJS, NextJS],</p>
            <p className='text-sm'><b className='font-medium'>CSS: </b>[TailwindCSS, Material UI],</p>
            <p className='text-sm'><b className='font-medium'>Animations: </b>[GSAP, Framer Motion],</p>
            <p className='text-primary py-2'>{"}"}</p>
        </div>
     
        <div className='profile rounded-lg relative -ml-8 mt-4 lg:scale-105'>
            <Image
            src="/profile.jpg"
            alt="Profile Image"
            width={200}
            height={220}
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[220px] z-10 relative"
            ></Image>
            <div className='absolute rounded-lg left-9 top-7 h-full w-full border-[1px] border-secondary opacity-50'></div>
        </div>

    </motion.section>
  )
}

export default About