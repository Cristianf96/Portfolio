import { useState } from 'react'
import logo from './logo.svg'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
