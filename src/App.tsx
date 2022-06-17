import { useState } from 'react'
import logo from './logo.svg'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
