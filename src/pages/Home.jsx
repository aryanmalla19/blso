import React from 'react'
import Navbar from '../components/Navbar'
import SocialMedia from '../components/SocialMedia'
import Carousel from '../components/Carousal'
import Section from '../components/Section'
import About from '../components/About'
import Need from '../components/Need'
import Newsletter from '../components/Newsletter'
import Events from '../components/Events'
import MeetVol from '../components/MeetVol'
import Footer from '../components/Footer'
import TeamSection from '../components/TeamSection'

function Home() {
  return (
    <div className='min-h-screen'>
        <Navbar/>
        <SocialMedia/>  
        <Carousel />
        <Section/>
        <About/>
        <Need/>
        <Events/>
        <MeetVol/>
        <TeamSection/>
        <Newsletter/>
        <Footer/>
    </div>
  ) 
}

export default Home