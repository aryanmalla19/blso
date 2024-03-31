import React from 'react'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'
import Carousel from '../components/Carousal'
import Section from '../components/Section'
import About from '../components/About'
import Need from '../components/Need'

function Home() {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <SocialMedia/>  
        <Carousel />
        <Section/>
        <About/>
        <Need/>
    </div>
  ) 
}

export default Home