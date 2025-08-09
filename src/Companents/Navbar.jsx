
import React, { useState } from 'react'
import "../Css/_navbar.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='text-center mt-10 md:mt-20'>
      {/* Mobil menü butonu */}
      <button 
        className='md:hidden bg-gray-200 p-2 rounded mb-4'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menü {isMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobil menü */}
      <div className={`md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-0'>
          <a href="#Home" className='text md:ml-10 py-2'> Home </a>
          <a href="#About" className='text md:ml-10 py-2'> About </a>
          <a href="#Contact" className='text md:ml-10 py-2'> Contact </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar