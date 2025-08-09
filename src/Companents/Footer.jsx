
import React from 'react'

function Footer() {
  return (
    <footer id='Contact' className="bg-black text-white py-6 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    
            <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-sm">&copy; 2025 Baturhan Öztürk. Tüm hakları saklıdır.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <a href="mailto:ozturkbaturhan8@gmail.com" className="hover:text-blue-400 transition mb-2 sm:mb-0">
                    📧 ozturkbaturhan8@gmail.com
                </a>
                <a href="tel:+905456064806" className="hover:text-blue-400 transition mb-2 sm:mb-0">
                    📱 +90 545 606 48 06
                </a>
                <a href="https://www.instagram.com/batur.ozturk/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                    📸 @batur.ozturk
                </a>
            </div>
    
        </div>
    </footer>
  )
}

export default Footer