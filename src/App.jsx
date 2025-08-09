
import { useState } from 'react'
import './App.css' 
import Right from './Companents/Right'
import Left from './Companents/Left'
import About from './Companents/About'
import Navbar from './Companents/Navbar'
import Footer from './Companents/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className='flex flex-col md:flex-row overflow-hidden'>
        <Left>
          <Navbar/>
        </Left>
        
        {/* Right component sadece md ve üzeri */}
        <Right className="hidden md:block" /> 
      </div>

      <About/>

      <Footer/>
    </div>
  )
}

export default App