import React from 'react'
import SocialMedia from '../components/SocialMedia'
import Carousel from '../components/Carousal'
import Section from '../components/Section'
import About from '../components/About'
import Need from '../components/Need'
import Newsletter from '../components/Newsletter'
import Events from '../components/Events'
import TeamSection from '../components/TeamSection'

function Home() {
  return (
    <div className='min-h-screen'>
        <SocialMedia/>  
        <Carousel />
        <Section/>
        <About/>
        <Need/>
        <Events/>
        <TeamSection/>
        <Newsletter/>
    </div>
  ) 
}

export default Home