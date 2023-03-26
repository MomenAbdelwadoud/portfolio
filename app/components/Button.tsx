import React from 'react'
import Image from 'next/image'
import ArrowDown from './svg/arrow-down'

const Button = () => {
  return (
    <a href="#contact">
      <button className='py-2 px-5 justify-center items-center bg-primary opacity-80 text-black rounded-lg flex gap-2 font-semibold text-sm'>
          <p>Get in touch</p>
              {/* <ArrowDown viewBox="-5 -5 25 25"></ArrowDown> */}
      </button>
    </a>
  )
}

export default Button