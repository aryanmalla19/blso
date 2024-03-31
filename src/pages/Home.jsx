import React from 'react'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'
import Carousel from '../components/Carousal'
import Section from '../components/Section'
import About from '../components/About'
import Need from '../components/Need'
import Newsletter from '../components/Newsletter'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <SocialMedia/>  
        <Carousel />
        <Section/>
        <About/>
        <Need/>
        <Newsletter/>
        <Contact/>
    </div>
  ) 
}

export default Home