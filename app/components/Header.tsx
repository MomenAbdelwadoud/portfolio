import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Line from './svg/line'
import {Poppins} from  "@next/font/google"

const poppins = Poppins({weight:'400',style:"normal",subsets:["latin"]})

const Header = () => {
  return (
    <header className='py-20 md:py-36 flex flex-col md:items-center lg:relative'>
    <div>
      <p className={`text-primary font-semibold ${poppins.className} text-sm md:text-xl mb-5 opacity-70`}>{"< >"}</p>
      <p className='text-sm text-secondary md:text-xl'>Hi, my name is</p>
      <h1 className='text-2xl tracking-wider mb-3 font-medium md:text-3xl lg:text-[2rem]'>MOMEN ABD-ELWADOUD</h1>
      <h2 className='font-light flex gap-2 text-xl md:text-2xl tracking-wider'>Iam a <span className='text-white flex flex-col'><p className='font-bold -mb-1'>Frontend Developer</p>
      <Line></Line>
      </span></h2>
      <p className={`text-primary font-semibold ${poppins.className} text-sm md:text-xl mb-5 opacity-70`}>{"</>"}</p>
      <Button></Button>
      <Image
      src="./reactjs-icon.svg"
      alt="reactjs-icon"
      width={80}
      height={80}
      className="absolute animate-spin right-10 bottom-1/2 md:w-[150px] md:h-[150px] md:right-0 md:left-10 lg:left-20 lg:bottom-16"
      ></Image>
    </div>
  </header>
  )
}

export default Header