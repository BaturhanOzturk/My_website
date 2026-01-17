
import React from 'react'
import Navbar from './Navbar'
import '../Css/rl.css'

function Left({children}) {
  return (
    <div id='Home' className='min-h-screen w-full md:w-1/2 bg-white px-4 py-8 md:py-0'>
      {children}
      
      {/* Mobil için  */}
      <div className='block md:hidden w-full text-center mt-16'>
        <p className='text-xl font-extralight mx-auto'>Hello! I'm</p>
        <h1 className='text-4xl pt-3 font-bold mx-auto'>Baturhan Öztürk</h1>
        <p className='text-sm mx-auto'>Let's Work Together to Live Together!</p>
      </div>
      
      {/* Desktop için */}
      <div className='hidden md:block marginsetting mt-30'>
        <p className='text-2xl font-extralight pl-1'>Hello! I'm</p>
        <h1 className='text-5xl pt-3 font-bold'>Baturhan Öztürk</h1>
        <p className='pl-1'>Let's Work Together to Live Together!</p>
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8'>
        <button
          onClick={() => {
          const link = document.createElement('a');
          link.href = '/My_Portfolio.pdf';
          link.download = 'My_Portfolio.pdf';
          link.click();}}  
          className='w-full md:w-auto bg-black rounded-md text-white px-6 py-2 button font-bold active:scale-95 hover:text-gray-300'>
            See My Portfolio
        </button>
        
        <button              
          onClick={() => {
          const link = document.createElement('a');
          link.href = '/Baturhan_Ozturk.pdf';
          link.download = 'Baturhan_Ozturk.pdf';
          link.click();}}   
          className='w-full md:w-auto border border-black rounded-md text-black px-6 py-2 md:ml-5 button font-bold active:scale-95 hover:text-gray-500 transition'>                 
            Download CV
        </button>
      </div>
    </div>
  )
}

export default Left