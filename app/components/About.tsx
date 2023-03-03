import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className='mt-14 py-10 font-light flex flex-wrap gap-4 items-center justify-center '>
        <div>
            <h6 className='text-sm text-secondary -mb-1'>ABOUT</h6>
            <h1 className='text-2xl tracking-wide font-medium mb-2'>MOMEN ABD-ELWADOUD</h1>
            <p className='text-sm py-2'>Iam a self-taught front-end developer and an undergraduate student. I started my coding journey from years and was jumping from field to field until I picked front-end development a short time ago.</p>
            <p className='text-primary py-2'>{"{"}</p>
            <p className='text-sm'><b className='font-medium'>Frameworks: </b>[ReactJS, NextJS],</p>
            <p className='text-sm'><b className='font-medium'>CSS: </b>[TailwindCSS, Material UI],</p>
            <p className='text-sm'><b className='font-medium'>Animations: </b>[GSAP, Framer Motion],</p>
            <p className='text-primary py-2'>{"}"}</p>
        </div>
     
            <div className='profile rounded-lg relative -ml-8 mt-4'>
                <Image
                src="/profile.jpg"
                alt="Profile Image"
                width={200}
                height={220}
                className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 object-cover h-[220px]"
                ></Image>
                <div className='absolute rounded-lg -z-10 left-9 top-7 h-full w-full border-[1px] border-secondary'></div>
            </div>

    </section>
  )
}

export default About