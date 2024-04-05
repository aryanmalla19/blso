import React from 'react'
import SocialMedia from '../components/SocialMedia'
import Carousel from '../components/Carousal'
import Section from '../components/Section'
import About from '../components/About'
import Need from '../components/Need'
import Newsletter from '../components/Newsletter'
import Events from '../components/Events'
import MissionGoal from '../components/MissionGoal'
import JoinVolunteer from '../components/JoinVolunteer'

function Home() {
  return (
    <div className='min-h-screen'>
        <Carousel />
        <SocialMedia/>  
        <Section/>
        <About/>
        <Events/>
        <Need/>
        <JoinVolunteer/>
        <MissionGoal/>
        <Newsletter/>
    </div>
  ) 
}

export default Home