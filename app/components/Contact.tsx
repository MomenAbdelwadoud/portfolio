'use client'
import React from 'react'
import Github from './svg/github'
import Linkedin from './svg/linkedin'
import Plane from "./svg/plane"
import {motion} from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import Email from "./svg/email"

const Contact = () => {
  const notPc = useMediaQuery("(max-width: 640px)")

  return (
    <motion.section
    initial= {{y:30, opacity:0}}
    whileInView= {{y:0, opacity:1}}
    viewport={!notPc ? {margin: "-300px"}: {margin:"-100px"}}
    transition={{delay:0.1}}
    className='min-h-[50vh] mt-24 flex justify-center items-center flex-col' id='contact'>
      <h3 className='text-2xl tracking-wide font-medium mb-2 lg:text-3xl'>MOMEN ABD-ELWADOUD</h3>
      <p className='text-sm text-secondary mb-4'>Reach me at <a href='mailto:momenwadoudg@gmail.com' className='underline' target={"_blank"} rel="noreferrer">momenwadoudg@gmail.com</a></p>
      <p className='font-light py-8'>Find me on</p>
      <div className='flex gap-8 items-center'>
        <a href="https://github.com/MomenAbdelwadoud" target={"_blank"} rel="noreferrer">
            <Github color="rgba(255,255,255,0.7)"></Github>
        </a>
        <a href="https://www.linkedin.com/in/momen-abdelwadoud/" target={"_blank"} rel="noreferrer">
            <Linkedin ></Linkedin>
        </a>
        
      </div>
       
    </motion.section>
  )
}

export default Contact