'use client'
import React from 'react';
import Image from 'next/image'
import ujjawalimg from '../../public/ujjawal.jpg'
import tempest from '../../public/tempest.png'
import notes from '../../public/notes1.jpg'
import textSpeech from '../../public/textSpeech.png'
import blms from '../../public/blms.jpg'
import parkinson from '../../public/parkinson.png'



const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className='w-full h-[650px] bg-white mt-[14%] relative'>
            <div className='mx-[3.1%] flex flex-row justify-between w-[39%] items-start'>

                <div className='flex flex-col'>    
                    <div className='mt-5 flex flex-row gap-1 items-center mb-3'>
                        <p> Hey,</p>
                        <p className='text-[#5D47A5] text-xl font-semibold '>Ujjawal</p>
                        <p>here</p>

                    </div>
            
                    <div className='mt-9 flex flex-col justify-items-start gap-1 text-5xl font-bold flex-initial'>
                        <h2>And, I want to </h2>
                        <h2>join the ArmorCode team</h2>

                    </div>
                    <a className='h-[66px] ' href='https://drive.google.com/file/d/16A4j6np_ApZYh4V5h18Urdd14n_m_vVI/view' target="_blank" rel="noopener noreferrer" ><button className="bg-[#35198E] hover:border-[1px] focus:ring-1 focus:ring-[#A183F9] hover:border-[#A183F9] text-white text-xs font-semibold py-3 px-4 rounded-full mt-6 w-[150px] hover:px-[15px] hover:py-[11px]">
                        My resume
                    </button>
                    </a>
                    
                </div>
            </div>

            < div className='flex flex-row  w-[93.8%] mx-[3.1%] -mt-[65px] justify-between '>

            <a href="https://github.com/ujjawal-yadav/TempestTeller" className='relative w-[160px] h-[160px] rounded-full border-8 border-[#FEB94D] mt-[130px]' target="_blank" rel="noopener noreferrer">
                
                    <Image src={tempest} alt='Tempest' className='w-full h-full rounded-full' />
                    <div className='absolute inset-0 flex items-center justify-center bg-[#FEB94D] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
                        <span className='text-white font-bold text-center'>Tempest Teller</span>
                    </div>
                
                </a>
                    
                 
                 <a href="https://github.com/ujjawal-yadav/text-to-speech" className='relative w-[280px] h-[280px] rounded-full border-8 border-[#f084b8] mt-[70px]'target="_blank" rel="noopener noreferrer">
                 <Image src={textSpeech} alt='Ujjawal' className='w-full h-full rounded-full'/>
                 <div className='absolute inset-0 flex items-center justify-center bg-[#f084b8] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
                        <span className='text-white font-bold text-center'>Text To Speech</span>
                    </div>

                 </a>

                 <div >
                    <div className='w-[320px] aspect-square rounded-full border-8 border-[#5cc4ff]  absolute -top-[10px] -ml-[44px] -mt-[25px] cursor-pointer ' >
                        <Image src={ujjawalimg} alt='Ujjawal' className='w-[320px] aspect-square rounded-full'></Image>
                    </div>


                    <a href="https://github.com/ujjawal-yadav/Parkinson-Prediction" target="_blank" rel="noopener noreferrer">
                    <div className='relative w-[200px] h-[200px] rounded-full border-8 border-[#6cdc92] mt-[150px] ml-[20px] cursor-pointer  '  >
                         
                    <Image src={parkinson} alt='Ujjawal' className='w-full h-full rounded-full' />
                 <div className='absolute inset-0 flex items-center justify-center bg-[#6cdc92] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
                        <span className='text-white font-bold text-center'>Parkinson Prediction</span>
                    </div>


                    </div>
                    </a>
                    

                 </div>
                 <div className=''>

                 <a href="https://github.com/ujjawal-yadav/notes-app" className='w-[160px] h-[160px] rounded-full border-8 border-[#5d47a5] absolute  top-[16px] ml-[43px]' target="_blank" rel="noopener noreferrer" >
                 <Image src={notes} alt='Ujjawal' className='w-[160px] aspect-square rounded-full'></Image>
                 <div className='absolute inset-0 flex items-center justify-center bg-[#5d47a5] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
                        <span className='text-white font-bold text-center'>Notes</span>
                    </div>
                 </a>


                 <div className=' relative w-[200px] h-[200px] rounded-full border-8 border-[#a183f9] mt-[60px]  -mr-[13px]  ' >
                 <Image src={blms} alt='Ujjawal' className='w-[200px] aspect-square rounded-full'></Image>
                 <div className='absolute inset-0 flex items-center justify-center bg-[#a183f9] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
                        <span className='text-white font-bold text-center'>Internship Project</span>
                    </div>
                 </div>


                 </div>
                 
                 

            </div>
        
        
        

        </div>

      
    </section>
  );
};

export default HeroSection;