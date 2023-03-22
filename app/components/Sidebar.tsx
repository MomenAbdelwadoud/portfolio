'use client'
import React from 'react'

const Sidebar = ({asideHandler}:{asideHandler:any}) => {
  return (
    <>
      <ul className='text-gray-300 text-lg font-medium flex flex-col gap-10'>
        <a href="#home" onClick={asideHandler}>
          <li>Home</li>
        </a>
        <a href="#about" onClick={asideHandler }>
          <li>About</li>
        </a>
        <a href="#projects" onClick={asideHandler}>
          <li>Projects</li>
        </a>
        <a href="#job">
          <li>Job Experience</li>
        </a>
        <a href="#contact" onClick={asideHandler}>
          <li>Contact</li>
        </a>
      </ul>
    </>
  )
}

export default Sidebar