import React from 'react'
import AllEvents from '../components/AllEvents'

function TentProvision() {
    const arr = [
        {
            "name":"Project Name",
            "message":"Tent Provision for 20 Homeless Riverside Families",
        },
        {
            "name":"Donation By",
            "message":"The project will focus on the rural areas of Sarlahi, Morang Panchthar Nepal, where the lack of academic training among rural community teachers is a critical issue. Teachers in rural schools face challenges such as low salaries, multiple grades or subject assignments, social and collegial isolation, and difficulty finding and retaining qualified teachers. As a result, students may not receive a proper education, and teachers may be discouraged from taking on rural positions or leave them after only a short period of time.",
        },
        {
            "name":"Project Goal",
            "message":"The goal of this project is to provide teacher training to community-based teachers in Sarlahi, Morang, Jhapa, Panchthar  to improve the quality of education for students in rural communities.",
        },
        {
            "name":"Objectives",
            "message":"To provide training to community-based teachers in [region or district] in order to improve their teaching skills and knowledge. To improve the educational outcomes for students in rural communities by providing teachers with the necessary tools and techniques to provide an excellent education. To address the shortage of qualified teachers in rural schools by improving the retention and satisfaction of teachers in these positions.",
        },
    ]
  return (
    <div>
        <AllEvents title="Tent Provision for 20 Homeless Riverside Families" arr={arr} img="https://www.blsonepal.org.np/uploads/medium/img-1521-H7FbBc4bH3aBvUu0OtBfK4zolWELaIqfhXoBj9XN.JPG"/>
    </div>
  )
}

export default TentProvision