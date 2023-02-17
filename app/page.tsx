import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Nav from './components/Nav'


const Home = () => {
  return (
    <div className='text-white' >
    <Nav></Nav>
    <Header></Header>
    <About></About>
    </div>
  )
}

export default Home