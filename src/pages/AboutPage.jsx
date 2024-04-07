import React from 'react'
import TeamSection from '../components/TeamSection'
import Intoduction from '../components/Intoduction'
import MissionGoal from '../components/MissionGoal'
import Objective from '../components/Objective'
import FAQ from '../components/FAQ'
function AboutPage() {
  return (
    <div>
        <Intoduction/>
        <Objective/>
        <MissionGoal />
        <FAQ/>
        <TeamSection/>
    </div>
  )
}

export default AboutPage