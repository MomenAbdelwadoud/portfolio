'use client'
import React, {useState} from 'react'
import Sidebar from './Sidebar'


export default function Nav(){
    const [open, setOpen] = useState(false)
    const asideHandler = () => setOpen(!open)
    return (
    <nav >
         <div className="md:hidden">
             <button className={"flex flex-col fixed gap-1 top-20 right-12 z-30"} onClick={asideHandler}>
                <div className={"h-1 w-6 bg-gray-300 transition-transform " + (open ? " rotate-45 -mb-1" : "rotate-0 mb-0")}></div>
                <div className={"h-1 w-6 bg-gray-300 transition-transform " + (open ? " -rotate-45 -mt-1" : "rotate-0 mt-0")}></div>
                     </button>
                     <aside className={'transition-transform min-h-screen bg-black flex flex-col gap-20 pt-40 pl-10 fixed z-20 w-1/2 top-0 right-0 ' + (open ? ' translate-x-0' : ' translate-x-full')}>
                <Sidebar asideHandler={asideHandler}></Sidebar>
                     </aside>
         </div>
         <ul className='text-gray-400 text-md font-medium gap-10 hidden md:flex'>
        <a href="#home" className='hover:text-primary transition-colors'>
          <li>Home</li>
        </a>
        <a href="#about" className='hover:text-primary transition-colors'>
          <li>About</li>
        </a>
        <a href="#projects" className='hover:text-primary transition-colors'>
          <li>Projects</li>
        </a>
        <a href="#job" className='hover:text-primary transition-colors'>
          <li>Job Experience</li>
        </a>
        <a href="#contact" className='hover:text-primary transition-colors'>
          <li>Contact</li>
        </a>
      </ul>
    </nav>
    )
}