import React from 'react'
import Image from 'next/image'

const Button = () => {
  return (
    <button className='py-2 px-4 justify-center items-center bg-primary text-black rounded-lg flex gap-2 font-medium text-sm'>
        <p>Get in touch</p>
        <Image
        src="/arrow-down.svg"
        width={15}
        height={15}
        alt=""
        ></Image>
    </button>
  )
}

export default Button