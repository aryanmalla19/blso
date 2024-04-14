import React from 'react'
import TeamSection from '../components/TeamSection'
import Intoduction from '../components/Intoduction'
import MissionGoal from '../components/MissionGoal'
import Objective from '../components/Objective'
import FAQ from '../components/FAQ'
import Reveal from '../components/Reveal'
function AboutPage() {
  return (
    <div>
      <Reveal>
        <Intoduction/>
      </Reveal>
      <Reveal>
        <Objective/>
        </Reveal>
        <Reveal>
        <MissionGoal />
        </Reveal>
        <Reveal>
        <FAQ/>
        </Reveal>
        <TeamSection/>
    </div>
  )
}

export default AboutPage