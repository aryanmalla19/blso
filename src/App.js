import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HelpDonation from './pages/HelpDonation';
import AboutPage from './pages/AboutPage';
import EducationProject from './pages/EducationProject';
import Footer2 from './components/Footer2';
import NepalEarthquake from './pages/NepalEarthquake';
import SponserChild from './pages/SponserChild';
import AllEvents from './components/AllEvents';
import home_guidance_photo from './assets/home-gui.jpg'
import drink_waterr from './assets/pure-water.jpg'
import earthquake from './assets/earthquake-relief.jpg'
function App() {
  const shoes_dis = [
    {
        "name":"Project Location: Bhaktipur-05, Sarlahi",
        "message":"",
    },
    {
        "name":"Date of project completion: 23 October 2022",
        "message":"",
    },
    {
        "name":"Donated By: Katsuta Fumitaka Dai ",
        "message":"",
    },
    {
      "name":"",
      "message":`Children attending the beneficiary School in Sarlahi are from very poor families. Parents cannot even afford a pair of school shoes for their children. Even though shoes alone cannot solve the problems children face, we can all agree that they enhance their self-esteem and give them hope. Children's feet will be protected from infection and injuries when they wear shoes. A child in full uniform attending school is a delight to watch. Hopefully, we will be able to provide them with further educational support materials in the future through different projects.

      The sight of children walking to schools without even slippers is common in rural areas. Kids who walk barefoot to school often contract diseases that kill or seriously threaten their health. The provision of school shoes to needy students is an effective way to protect their feet on their way to school and instill hope in them.
      
      A total of 150 pairs of shoes were distributed to students in the Sarlahi district.`,
  },
  {
    "name":"Project Goal",
    "message":`The project aimed to support students in the Sarlahi district, where many students come barefoot because they cannot afford shoes.`,
},
{
  "name":"The objective of the Project",
  "message":`Support students of Janaki School in the Sarlahi district, where many students come barefoot because they cannot afford shoes.`,
},
{
  "name":"Results",
  "message":`The provision of school shoes to needy students is an effective way to protect their feet on their way to school and instill hope in them. It will be easier for children to come to school wearing shoes and they will be more motivated to stay fit. This will reduce the financial burden on parents who may be sad because their kids do not have shoes. Finally, the school officials will be pleased to see their wards dressed appropriately.

  Thus, when children wear good clothing, they are less likely to skip classes. As a result, they are able to walk with pride alongside students from more privileged backgrounds.`,
},
]
const home_guidance = [
  {
      "name":"Project Overview",
      "message":"The Home Guidance Class project at Bal Bikash Sumudayik School, located in Letang-01, Morang, has been a tremendous success in providing essential support to weak students. Sponsored by Mr. Katsuta Fumitaka Dai from Japan, the project has made a significant impact on the lives of 40 students who attend the classes regularly. By offering after-school guidance and support, the program has improved the academic performance of students and brought joy to their parents who, due to their lack of education, struggled to guide their children effectively.",
  },
  {
      "name":"Project Description",
      "message":`The Home Guidance Class project, sponsored by Mr. Katsuta Fumitaka Dai, was initiated at Bal Bikash Sumudayik School in Letang-01, Morang. Recognizing the challenges faced by weak students and the limitations of their parents, who often lacked education, the project aimed to provide additional guidance and support to enhance the academic performance of these students.

      The project started in the academic year 2022/2023 and continued with remarkable success. The school authorities identified 40 students who required extra attention and selected them for the Home Guidance Class program. The classes were conducted after regular school hours to ensure that students received personalized attention without affecting their regular curriculum.
      
      Under the dedicated guidance of qualified teachers, the Home Guidance Class program focused on strengthening the weak areas of the students' academic performance. The classes provided a conducive environment for learning, with interactive sessions, practical exercises, and individualized attention to address each student's specific needs.
      
      The impact of the Home Guidance Class program has been remarkable. Students attending the classes regularly have shown significant improvements in their academic results. The additional support and focused guidance have boosted their confidence and motivation to excel academically. Not only have their grades improved, but they have also developed a love for learning and a positive attitude towards education.
      
      The success of the program has brought immense happiness to the parents of these students. With limited educational backgrounds, they found it challenging to guide their children effectively. The Home Guidance Class program has bridged this gap, providing the necessary support to the students and empowering the parents to see their children succeed. The parents express heartfelt gratitude to Mr. Katsuta Fumitaka Dai for his generous sponsorship and commitment to improving the lives of these students.`,
  },
  {
      "name":"Conclusion",
      "message":`The Home Guidance Class project at Bal Bikash Sumudayik School has proven to be a transformative initiative for weak students in Letang-01, Morang. Through the generous sponsorship of Mr. Katsuta Fumitaka Dai, the project has provided personalized guidance and support to 40 students, enabling them to overcome their academic challenges and excel in their studies.

      By conducting after-school classes, the project has created a conducive learning environment where students receive individual attention and focused instruction. This has led to significant improvements in their academic performance, instilled confidence, and fostered a love for learning.
      
      Importantly, the Home Guidance Class program has also had a positive impact on the parents of these students. The program has empowered them to see their children succeed academically, providing hope for a brighter future. The gratitude expressed by the parents towards Mr. Katsuta Fumitaka Dai for his sponsorship is heartfelt and genuine.
      
      The Home Guidance Class project stands as a testament to the power of education and the transformative impact of philanthropy. It has not only improved the academic outcomes of the students but also brought joy, hope, and gratitude to the entire community.`,
  }
]
const drink_water = [
  {
      "name":"Project Overview",
      "message":"The Pure Water Filter with Water Tank project, generously donated by Mr. Katsuta Fumitaka from Japan, has significantly improved the water quality at Janki English Boarding School in Babarganj-02, Sarlahi. The project, implemented on 3rd November 2022, aimed to address the health concerns of the students caused by drinking unfiltered water. With the installation of a water filter system, pipes, and a water tank, the project has provided access to clean and pure drinking water, benefiting over 200 students, teachers, and staff members.",
  },
  {
      "name":"Project Description",
      "message":`The Pure Water Filter with Water Tank project was initiated at Janki English Boarding School in Babarganj-02, Sarlahi, with the objective of improving the water quality and ensuring the well-being of the students, teachers, and staff members.

      Prior to the project, the school faced a major issue as children were consuming unfiltered water, leading to various health problems. Recognizing the urgency of the situation, Mr. Katsuta Fumitaka witnessed the conditions and graciously decided to support the school. His generous donation included a state-of-the-art water filter machine, pipes for distribution, and a water tank to facilitate the supply of clean water.
      
      On 3rd November 2022, the project was implemented, with the installation of the water filter system, pipes, and the water tank. The school authorities ensured that the entire system was set up in an efficient and sustainable manner, guaranteeing a consistent supply of pure drinking water.
      
      The impact of the project has been remarkable. With the new water filter system in place, the school now provides clean and safe drinking water to over 200 students, teachers, and staff members. The installation of pipes and the water tank has streamlined the distribution process, ensuring that everyone has easy access to the filtered water.
      
      The project has not only addressed the immediate health concerns but also created a long-term solution for the school. By providing pure drinking water, the project has reduced the risk of waterborne diseases and improved the overall well-being of the school community. Students can now focus on their studies without worrying about falling ill due to contaminated water.
      
      The school community is immensely grateful to Mr. Katsuta Fumitaka for his generous donation and his commitment to improving the lives of the students. His contribution has made a lasting impact on the school, and they proudly share the success of this project with others.`,
  },
  {
      "name":"Conclusion",
      "message":`The Pure Water Filter with Water Tank project at Janki English Boarding School has been a transformative initiative, made possible by the generous donation from Mr. Katsuta Fumitaka. By addressing the issue of unfiltered water and its adverse effects on the health of the students, the project has made a significant difference in the lives of over 200 students, teachers, and staff members.

      Through the installation of a water filter system, pipes, and a water tank, the project has ensured a consistent supply of clean and safe drinking water within the school premises. This has reduced the risk of waterborne diseases and improved the overall well-being of the school community.
      
      The school expresses deep gratitude to Mr. Katsuta Fumitaka for his extraordinary contribution and his commitment to the welfare of the students. His support has not only solved an immediate problem but also provided a sustainable solution for the future. The school proudly shares the success of this project and the positive impact it has had on the lives of the students and staff members.`,
  }
]

const earthquake_relief = [
  {
      "name":" Earthquake Relief Efforts BLSO Team",
      "message":"On April 25, 2015, Nepal experienced a catastrophic earthquake that caused widespread devastation and loss of life. The Better Life Social Organization recognized the urgency of the situation and promptly initiated relief efforts to assist the affected population. Our dedicated team of volunteers, working closely with Nepal Police, played a pivotal role in providing much-needed rescue operations, as well as essential supplies like food and medicine.",
  },
  {
      "name":"Rescue Operations",
      "message":`In the immediate aftermath of the earthquake, our team of volunteers actively participated in rescue operations. They tirelessly worked alongside Nepal Police and other rescue teams to locate and save individuals trapped under collapsed buildings and debris. Their commitment, courage, and determination were instrumental in saving lives and providing a glimmer of hope amidst the chaos.`,
  },
  {
      "name":"Food and Medicine Support",
      "message":`Understanding the urgent need for sustenance and medical aid, the Better Life Social Organization swiftly organized the distribution of food and medicine to the affected communities. Our team coordinated with local authorities, relief agencies, and generous donors to gather essential supplies. These supplies were then distributed systematically to ensure equitable access to food and medicine for those in need.`,
  },
  {
    "name":"Collaboration with Nepal Police",
    "message":`The Better Life Social Organization greatly values partnerships and collaboration, recognizing the collective strength in responding to such disasters. During the earthquake relief efforts, our organization closely collaborated with Nepal Police. This collaboration enhanced the effectiveness and efficiency of our operations, as both organizations pooled resources, expertise, and manpower to provide comprehensive support to the affected population.`,
},
{
  "name":"Impact",
  "message":`The collective efforts of the Better Life Social Organization, along with Nepal Police and other dedicated volunteers, made a significant impact during the earthquake relief operations. Through our rescue operations, many lives were saved, and hope was restored to individuals and families amidst the devastation. The distribution of food and medicine provided vital sustenance and medical care to those who had been displaced or injured.`,
},
{
  "name":"Conclusion",
  "message":`The Better Life Social Organization's response to the 2015 earthquake in Nepal stands as a testament to our commitment to serving communities during times of crisis. Our team of volunteers, in collaboration with Nepal Police, displayed exceptional dedication, selflessness, and resilience in providing rescue operations, as well as distributing essential supplies to affected areas. Through our collective efforts, we aimed to alleviate suffering, restore hope, and support the affected population during their time of need.

  We express our heartfelt gratitude to all the volunteers, donors, and supporters who made these relief efforts possible. Together, we demonstrated the power of compassion and solidarity, reaffirming our commitment to making a positive difference in the lives of those facing adversity.`,
}
]
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/donation' element={<HelpDonation/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/education-project' element={<EducationProject/>} />
        <Route path='/nepal-earthquake' element={<NepalEarthquake/>} />
        <Route path='/sponser-child' element={<SponserChild/>} />
        <Route path='/shoes-distribution' element={<AllEvents img="https://www.blsonepal.org.np/uploads/medium/shoes-2-POcEmWbN0f2twJ2HBkvfHgiohko524sw1lCHPxYp.jpg" title="Shoes Distribution Project" arr={shoes_dis}/>} />
        <Route path='/home-guidance' element={<AllEvents img={home_guidance_photo} title="Home Guidance Class project" arr={home_guidance}/>} />
        <Route path='/pure-drinking-water' element={<AllEvents img={drink_waterr} title="Pure Drinking Water Project at School" arr={drink_water}/>} />
        <Route path='/earthquake-relief' element={<AllEvents img={earthquake} title="Earthquake Relief Efforts" arr={earthquake_relief}/>} />
      </Routes>
      <Footer2/>
    </>
  );
}

export default App;
