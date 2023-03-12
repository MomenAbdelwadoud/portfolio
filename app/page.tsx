import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
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
    <Experience></Experience>
    <Contact></Contact>
    </div>
  )
}

export default Home