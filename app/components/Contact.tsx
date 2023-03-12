import Image from 'next/image'
import React from 'react'
import Github from './svg/github'
import Linkedin from './svg/linkedin'
import Plane from "./svg/plane"

const Contact = () => {
  return (
    <div className='min-h-[50vh] mt-40' id='contact'>
        <h6 className='text-[22px] text-secondary uppercase mb-4 font-medium'>Contact</h6>
        <p className='text-sm mb-4'>I am always looking for new opportunities and challenges. Hire me to build your website or just invite me for a game of chess.</p>
        <button className='px-4 py-2 bg-primary font-semibold text-black rounded-lg text-xs'>Send Email</button>
        <div className='mt-4 flex gap-4'>
            <a href="https://github.com/MomenAbdelwadoud/">
                <Github color="rgba(255,255,255,0.7)"></Github>
            </a>
            <a href="https://www.linkedin.com/in/momen-abdelwadoud/">
                <Linkedin></Linkedin>
            </a>
        </div>
        <Plane></Plane>
    </div>
  )
}

export default Contact