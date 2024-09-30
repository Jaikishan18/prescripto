import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About';
import Contact from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappointments from './pages/Myappointments'
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';




const App = () => {

  const [token,setToken] = useState(false)
  return (
    <div className='app'>
      <Navbar token={token} setToken={setToken}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/doctors/:speciality' element={<Doctors/>}/>
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/myprofile' element={<Myprofile/>}/>
          <Route path='/myappointments' element={<Myappointments/>}/>
          <Route path='/appointment/:docId' element={<Appointment/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App