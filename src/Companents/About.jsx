

import React from 'react'
import "../Css/_about.css"
import "../Css/rl.css"
import baturhan from "../assets/a.jpeg"

function About() {
  return (
    <div id='About' className='min-h-screen px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-6'>
        
        {/* Sol kart*/}
        <div className='shadow-lg rounded-md w-full md:w-auto bg-gray-100 secondcard md:mr-30 mb-6 md:mb-0 max-w-sm p-4'>
          <h1 className='text-xl font-bold text-center mb-3'>Değerlerim & Vizyonum</h1>
  
          <div className='space-y-3'>
            <div>
              <h2 className='font-medium'>Değerlerim:</h2>
              <ul className='list-disc pl-5 space-y-1'>
                <li>Sürekli öğrenme ve gelişim</li>
                <li>Yenilikçi düşünme</li>
                <li>Problem çözme odaklılık</li>
                <li>İşbirliği ve takım çalışması</li>
              </ul>
            </div>
    
            <div className='mt-4'>
              <h2 className='font-medium'>Vizyonum:</h2>
              <p>Teknoloji dünyasında iz bırakan, insanların hayatını kolaylaştıran çözümler geliştiren bir yazılım uzmanı olmak.</p>
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
            <p className='cardtext p-4 text-sm md:text-base text-center md:text-left'>Ben Baturhan Öztürk. Yazılım alanında kendimi geliştirmeye devam ediyorum. Özellikle web geliştirme alanında yoğunlaştım. Bunun yanı sıra, yer aldığım robotik takımı sayesinde robotik kodlama konusunda da deneyim kazandım. Şuanda odağımı yapay zeka alanına çevirdim. Hedefim, ileri düzey yazılım projelerinde yer almak.</p>
        </div>

        {/* Sağ Kart*/}

        <div className='shadow-lg rounded-md w-full md:w-auto bg-gray-100 secondcard md:ml-30 max-w-sm p-4'>
          <h1 className='text-xl font-bold text-center mb-3'>İlgi Alanları</h1>
  
          <ul className='list-disc pl-5 space-y-2 mb-4'>
            <li>Yazılım Geliştirme</li>
            <li>Yapay Zeka & Veri Bilimi</li>
            <li>Robotik Kodlama</li>
            <li>Web Tasarım</li>
          </ul>
  
          <div className='mt-6 border-t pt-4'>
            <p className='text-center italic text-sm font-medium'>
              "Eğer her şey tahmin edilebilirse o zaman hiç bilgi yoktur. Eğer işin içinde rassallık varsa, o zaman her şey hakkında bilgiye ihtiyacınız var."
            </p>
          </div>
        </div>
    </div>  
  )
}

export default About