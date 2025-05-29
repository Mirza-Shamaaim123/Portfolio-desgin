import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Exprence from './component/Exprence'
import Project from './component/Project'
import Footer from './component/Footer'



function App() {
  return (
    <div className='w-full  overflow-hidden bg-[#171d32] '>
      <Navbar/>
      <Home/>
      <About/>
      <Exprence/>
      <Project/>
      <Footer/>
      
    </div>
  )
}

export default App

