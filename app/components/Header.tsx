'use client'
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Line from './svg/line'
import {Poppins} from  "@next/font/google"
import {motion} from 'framer-motion'

const poppins = Poppins({weight:'400',style:"normal",subsets:["latin"]})

const fadeIn = {
  hidden: {y:10, opacity:0},
  visible: {y:0, opacity:1}
}
const staggerDelay = 0.05

const Header = () => {
  return (
    <header
     className='py-20 md:py-36 flex flex-col md:items-center lg:relative'>
    <div>
      <motion.p 
      variants={fadeIn}
      initial="hidden"
      animate={"visible"}
       className={`text-primary font-semibold ${poppins.className} text-sm md:text-xl mb-5 opacity-70`}>{"< >"}</motion.p>
      <motion.p 
      variants={fadeIn}
      initial="hidden"
      animate={"visible"}
      transition={{delay: staggerDelay * 1}}
       className='text-sm text-secondary md:text-xl'>Hi, my name is</motion.p>
      <motion.h1 
      variants={fadeIn}
      initial="hidden"
      animate={"visible"}
      transition={{delay: staggerDelay * 2}}

       className='text-2xl tracking-wider mb-3 font-medium md:text-3xl lg:text-[2rem]'>MOMEN ABD-ELWADOUD</motion.h1>
      <motion.h2 
      variants={fadeIn}
      initial="hidden"
      animate={"visible"}
      transition={{delay: staggerDelay * 3}}

       className='font-light flex gap-2 text-xl md:text-2xl tracking-wider'>Iam a <span className='text-white flex flex-col'><p className='font-bold -mb-1'>Frontend Developer</p>
      <Line></Line>
      </span></motion.h2>
      <motion.p
      variants={fadeIn}
      initial="hidden"
      animate={"visible"}
      transition={{delay: staggerDelay * 4}}
      className={`text-primary font-semibold ${poppins.className} text-sm md:text-xl mb-5 opacity-70`}>{"</>"}</motion.p>
      <Button
      ></Button>
      <div>
        <Image
        src="./reactjs-icon.svg"
        alt="reactjs-icon"
        width={80}
        height={80}
        className="absolute right-10 bottom-1/2 md:w-[150px] md:h-[150px] md:right-0 md:left-10 lg:left-20 lg:bottom-16 animate-pulse"
        ></Image>
      </div>
    </div>
  </header>
  )
}

export default Header