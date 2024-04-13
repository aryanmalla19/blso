import React from 'react'
import AllEvents from '../components/AllEvents'
import photo from '../assets/earthquake-nepal.jpg'
function NepalEarthquake() {
    const arr = [
        {
            "name":"Project Overview",
            "message":"On November 3, 2023, a devastating 6.4 magnitude earthquake struck Nepal, resulting in the loss of at least 132 lives and many people injured. The earthquake caused significant damage to homes and infrastructure, leaving many families in desperate need of assistance. Better Life Social Organization is committed to providing immediate support to the affected communities and assisting in long-term recovery efforts.",
        },
        {
            "name":"Project Objectives",
            "message":"To provide emergency relief and support to earthquake-affected families. To restore damaged homes, infrastructure, and essential services. To ensure the affected population can recover and rebuild their lives.",
        },
        {
            "name":"Project Activities",
            "message":"Emergency Supplies Distribution: Provide food packages, clean drinking water, and essential non-food items to affected families. Set up temporary medical camps to deliver medical care, including first aid and basic health services. Distribute blankets and shelter materials to those displaced by the earthquake.",
        },
        {
            "name":"Recovery and Rehabilitation Phase",
            "message":"Assess the damage to houses and public infrastructure. Repair and reconstruct damaged homes, schools, and public facilities. Restore water supply and sanitation systems for the affected areas.",
        }
        ,{
            "name":"Community Support",
            "message":"Provide psychosocial support for earthquake survivors.            Offer training and capacity-building for disaster preparedness and response. Support educational needs for children impacted by the disaster.",
        },
        {
            "name":"Project Budget",
            "message":"The Better Life Social Organization is requesting $17,000 to fund the emergency relief and recovery efforts in Nepal. The budget allocation will be as follows: -Immediate Relief Phase: $7,000 -Recovery and Rehabilitation Phase: $7,000 -Community Support Phase: $3,000",
        },
        {
            "name":"Partnership Opportunities",
            "message":"We welcome partnerships and collaborations with organizations, businesses, and individuals who share our commitment to helping the earthquake-affected communities in Nepal. Your partnership could make a significant impact in ensuring the success of this project.",
        },
        {
            "name":"Monitoring and Evaluation",
            "message":"Regular progress reports and assessments will be conducted to ensure that resources are effectively utilized, and project objectives are met. Transparency and accountability are essential throughout the project.",
        },
        {
            "name":"Conclusion",
            "message":"The Nepal Earthquake Relief and Recovery project by Better Life Social Organization aims to provide vital support to earthquake-affected communities, helping them rebuild their lives and infrastructure. Your support as a partner would be greatly appreciated, and together, we can make a significant difference in the lives of those in need.",
        },
    ]
  return (
    <div>
        <AllEvents title="Nepal Earthquake Relief and Recovery" arr={arr} img={photo}/>
    </div>
  )
}

export default NepalEarthquake