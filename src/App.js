import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HelpDonation from './pages/HelpDonation';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/donation' element={<HelpDonation/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
