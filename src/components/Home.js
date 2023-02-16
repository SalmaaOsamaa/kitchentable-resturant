import React from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Menu from './Menu'
import Reservation from './Reservation'

function Home() {
  return (
    <>
        <Header/>
        <Hero/>
        <About/>
        <Menu/>
        <Reservation/>
        <Footer/>
        
    </>
  )
}

export default Home