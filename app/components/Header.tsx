import React from 'react'
import Image from 'next/image'
import Button from './Button'
import Line from './svg/line'

const Header = () => {
  return (
    <header className='py-20'>
    <p className={'text-primary font-semibold text-sm mb-5'}>{"<>"}</p>
    <p className='text-sm text-secondary'>Hi, my name is</p>
    <h1 className='text-2xl tracking-wide font-medium'>MOMEN ABD-ELWADOUD</h1>
    <h2 className='font-light flex gap-2 text-xl'>Iam a <span className='text-white flex flex-col'><p className='font-bold'>Frontend Developer</p>
    <Line></Line>
    </span></h2>        
    <p className={'text-primary font-semibold text-sm mt-3 mb-5'}>{"</>"}</p>
    <Button></Button>
    <Image
    src="./reactjs-icon.svg"
    alt="reactjs-icon"
    width={80}
    height={80}
    className="absolute right-10 bottom-1/2"
    ></Image>
  </header>
  )
}

export default Header