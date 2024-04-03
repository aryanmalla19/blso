import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/con' element={<Contact/>} />
        <Route path='/c' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
