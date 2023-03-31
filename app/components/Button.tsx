'use client'
import React from 'react'
import Open from './svg/new-window'
import {motion} from "framer-motion"

const Button = () => {
  return (
    <motion.a
    initial= {{y:10, opacity:0}}
    animate= {{y:0, opacity:1}}
    transition={{delay: 0.1 * 5}}
    rel="noreferrer" target={"_blank"} href="https://drive.google.com/file/d/1rrCDZibL8jwFQZlQPN4BrPWjzN6hGRDg/view?usp=sharing">
      
      <button className='py-2 px-5 justify-center items-center bg-primary opacity-80 text-black rounded-lg flex gap-2 font-semibold text-sm'>
          <p>Open CV</p>
              <Open></Open>
      </button>
    </motion.a>
  )
}

export default Button