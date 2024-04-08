import React from 'react'
import AllEvents from '../components/AllEvents'

function EducationProject() {
    const arr = [
        {
            "name":"Introduction",
            "message":"The quality of education in rural areas is often affected by the lack of qualified and well-trained teachers. It is essential to equip teachers with the necessary skills and knowledge to provide students with a proper education. This proposal outlines a teacher training project aimed at improving the educational outcomes for students in rural communities by providing training to their teachers.",
        },
        {
            "name":"Project Background",
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
        <AllEvents title="Teacher Training Project" arr={arr} img="https://www.blsonepal.org.np/uploads/medium/img-6815-askk6LbZPIdOEjnQfdDe704FiXLCnrXSVtgF36TK.JPG"/>
    </div>
  )
}

export default EducationProject