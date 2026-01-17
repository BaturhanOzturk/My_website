

import React from 'react'
import "../Css/_about.css"
import "../Css/rl.css"
import baturhan from "../assets/a.jpeg"

function About() {
  return (
    <div id='About' className='min-h-screen px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-6'>
        
        {/* Sol kart*/}
        <div className='shadow-lg rounded-md w-full md:w-auto bg-gray-100 secondcard md:mr-30 mb-6 md:mb-0 max-w-sm p-4'>
          <h1 className='text-xl font-bold text-center mb-3'>My Values & Vision</h1>
  
          <div className='space-y-3'>
            <div>
              <h2 className='font-medium'>My values:</h2>
              <ul className='list-disc pl-5 space-y-1'>
                <li>Continuous learning and development</li>
                <li>Innovative thinking</li>
                <li>Problem-solving orientation</li>
                <li>Collaboration and teamwork</li>
              </ul>
            </div>
    
            <div className='mt-4'>
              <h2 className='font-medium'>My Vision:</h2>
              <p>To be a software expert who makes a mark in the world of technology and develops solutions that simplify people's lives.</p>
            </div>
          </div>
        </div>
       
        {/*Orta Kart*/}

        <div className='shadow-lg rounded-md w-full md:w-auto bg-gray-100 firstcard max-w-sm mb-6 md:mb-0 flex flex-col items-center'>
            <div className='w-full flex justify-center'>
                <img className='cardimg rounded-tr-3xl rounded-bl-3xl object-cover' 
                     style={{maxWidth: '100%', height: 'auto'}} 
                     src={baturhan} 
                     alt="Baturhan Öztürk" />
            </div>
            <h1 className='mt-3 cardtitle text-center text-xl md:text-2xl'>Baturhan Öztürk</h1>
            <p className='cardtext p-4 text-sm md:text-base text-center md:text-left'>My name is Baturhan Öztürk. I continue to develop myself in the field of software. I have focused particularly on web development. In addition, I have gained experience in robotic coding through my involvement in a robotics team. I have now shifted my focus to the field of artificial intelligence. My goal is to participate in advanced software projects.</p>
        </div>

        {/* Sağ Kart*/}

        <div className='shadow-lg rounded-md w-full md:w-auto bg-gray-100 secondcard md:ml-30 max-w-sm p-4'>
          <h1 className='text-xl font-bold text-center mb-3'>Interests</h1>
  
          <ul className='list-disc pl-5 space-y-2 mb-4'>
            <li>Software Development</li>
            <li>Artificial Intelligence & Data Science</li>
            <li>Robotics Coding</li>
            <li>Web Design</li>
          </ul>
  
          <div className='mt-6 border-t pt-4'>
            <p className='text-center italic text-sm font-medium'>
              “The real problem is not whether machines think but whether people do.”
            </p>
          </div>
        </div>
    </div>  
  )
}

export default About