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
      </Routes>
      <Footer2/>
    </>
  );
}

export default App;
