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

function App() {
  document.title = "Better Life Social Organization"
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/donation' element={<HelpDonation/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/education-project' element={<EducationProject/>} />
      </Routes>
      <Footer2/>
    </>
  );
}

export default App;
