import React from 'react'
import Nav from './components/Nav'

const Home = () => {
  return (
    <div className='text-white'>
    <Nav></Nav>
    <header>
      <p className='text-primary font-light text-xs'>{"<>"}</p>
      <p className='font-light text-xs text-primary'>Hi, my name is</p>
      <h1 className='text-xl'>MOMEN ABD-ELWADOUD</h1>
      <h2 className='text-gray'>Iam a <span>Frontend Developer</span></h2>
      <p className='text-primary font-light text-xs'>{"</>"}</p>
    </header>
    </div>
  )
}

export default Home