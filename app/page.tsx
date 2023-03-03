import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Nav from './components/Nav'
import Projects from './components/Projects'


const Home = () => {
  return (
    <div className='text-white' >
    <Nav></Nav>
    <Header></Header>
    <About></About>
    <Projects></Projects>
    </div>
  )
}

export default Home