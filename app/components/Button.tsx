import React from 'react'
import Image from 'next/image'
import ArrowDown from './svg/arrow-down'

const Button = () => {
  return (
    <button className='py-2 px-4 justify-center items-center bg-primary text-black rounded-lg flex gap-2 font-medium text-sm'>
        <p>Get in touch</p>
            <ArrowDown viewBox="-5 -5 25 25"></ArrowDown>

    </button>
  )
}

export default Button