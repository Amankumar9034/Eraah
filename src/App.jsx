import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Careers from './pages/Careers'
import Partner from './pages/Partner'
import Policy from './pages/Policy'
import TermAndConditions from './pages/TermAndConditions'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

const App = () => {
  return (
    <div className="min-h-screen">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/terms' element={<TermAndConditions />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
