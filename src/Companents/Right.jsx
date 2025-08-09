
import React from 'react'
import ay from '../assets/ay.jpg'
import '../Css/rl.css'

function Right({ className = '' }) {
  return (
    <div className={`min-h-screen w-full md:w-1/2 bg-black px-4 py-8 md:py-0 overflow-hidden ${className}`}>
      <div className='flex flex-col md:flex-row items-center justify-between md:justify-start'>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 md:mt-10 md:ml-10 text-center md:text-left">
          <span className="block">BATURHAN</span>
          <span className="block font-semibold">ÖZTÜRK</span>
        </h1>
        <button 
          onClick={()=> window.open("https://www.linkedin.com/in/baturhan-%C3%B6zt%C3%BCrk-4b346a323/")} 
          className='bg-white rounded-md px-5 py-2 button mt-4 md:mt-15 md:ml-70 font-bold active:scale-95 hover:text-blue-400 transition'
        > 
          LinkedIn 
        </button>
      </div>
      
      <div className="flex justify-center md:block mt-6 md:mt-0">
        <img className='img w-full max-w-md md:max-w-none object-cover' src={ay} alt="Ay görüntüsü" />
      </div>
    </div>
  )
}

export default Right