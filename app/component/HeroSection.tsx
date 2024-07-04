'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ujjawalimg from '../../public/ujjawal.jpg';
import tempest from '../../public/tempest.png';
import notes from '../../public/notes1.jpg';
import textSpeech from '../../public/textSpeech.png';
import blms from '../../public/blms.jpg';
import parkinson from '../../public/parkinson.png';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Type assertion to HTMLElement to access classList
    const target = e.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

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
            <a className='h-[66px]' href='https://drive.google.com/file/d/1d-AgQu-nMgRfwNef_Xnwz5re2oeLbm-R/view?usp=sharing' target="_blank" rel="noopener noreferrer">
              <button className="bg-[#35198E] hover:border-[1px] focus:ring-1 focus:ring-[#A183F9] hover:border-[#A183F9] text-white text-xs font-semibold py-3 px-4 rounded-full mt-6 w-[150px] hover:px-[15px] hover:py-[11px]">
                My resume
              </button>
            </a>
          </div>
        </div>

        <div className='flex flex-row w-[93.8%] mx-[3.1%] -mt-[65px] justify-between'>
          <a href="https://github.com/ujjawal-yadav/TempestTeller" className='relative w-[160px] h-[160px] rounded-full border-8 border-[#FEB94D] mt-[130px]' target="_blank" rel="noopener noreferrer">
            <Image src={tempest} alt='Tempest' className='w-full h-full rounded-full' />
            <div className='absolute inset-0 flex items-center justify-center bg-[#FEB94D] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
              <span className='text-white font-bold text-center'>Tempest Teller</span>
            </div>
          </a>

          <a href="https://github.com/ujjawal-yadav/text-to-speech" className='relative w-[280px] h-[280px] rounded-full border-8 border-[#f084b8] mt-[70px]' target="_blank" rel="noopener noreferrer">
            <Image src={textSpeech} alt='Ujjawal' className='w-full h-full rounded-full' />
            <div className='absolute inset-0 flex items-center justify-center bg-[#f084b8] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
              <span className='text-white font-bold text-center'>Text To Speech</span>
            </div>
          </a>

          <div>
            <div className='w-[320px] aspect-square rounded-full border-8 border-[#5cc4ff] absolute -top-[10px] -ml-[44px] -mt-[25px] cursor-pointer'>
              <Image src={ujjawalimg} alt='Ujjawal' className='w-[320px] aspect-square rounded-full'></Image>
            </div>

            <a href="https://github.com/ujjawal-yadav/Parkinson-Prediction" target="_blank" rel="noopener noreferrer">
              <div className='relative w-[200px] h-[200px] rounded-full border-8 border-[#6cdc92] mt-[150px] ml-[20px] cursor-pointer'>
                <Image src={parkinson} alt='Ujjawal' className='w-full h-full rounded-full' />
                <div className='absolute inset-0 flex items-center justify-center bg-[#6cdc92] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
                  <span className='text-white font-bold text-center'>Parkinson Prediction</span>
                </div>
              </div>
            </a>
          </div>

          <div>
            <a href="https://github.com/ujjawal-yadav/notes-app" className='w-[160px] h-[160px] rounded-full border-8 border-[#5d47a5] absolute top-[16px] ml-[43px]' target="_blank" rel="noopener noreferrer">
              <Image src={notes} alt='Ujjawal' className='w-[160px] aspect-square rounded-full'></Image>
              <div className='absolute inset-0 flex items-center justify-center bg-[#5d47a5] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer'>
                <span className='text-white font-bold text-center'>Notes</span>
              </div>
            </a>

            <div className='relative w-[200px] h-[200px] rounded-full border-8 border-[#a183f9] mt-[60px] -mr-[13px] cursor-pointer modal-overlay' onClick={openModal}>
              <Image src={blms} alt='Ujjawal' className='w-[200px] aspect-square rounded-full'></Image>
              <div className='absolute inset-0 flex items-center justify-center bg-[#a183f9] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full'>
                <span className='text-white font-bold text-center'>Internship Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center  justify-center modal-overlay" onClick={handleModalClick}>
          <div className="bg-[#F7F4FE] rounded-lg p-6 top-[40px] relative w-[90%] max-w-md">
            <button className="absolute top-2 right-2 text-xl font-bold text-black" onClick={closeModal}>×</button>
            <h2 className="text-xl font-bold text-center mb-4">Internship Project</h2>
            <p className='mb-3'>During my internship at Binarama, I played a pivotal role in developing a learning management platform for a client. I designed and implemented the wishlist, cart, and payment sections, ensuring a seamless user experience. Additionally, I developed an instructor verification system to streamline the validation process.</p>
            <p>Working in Agile 10-day sprints, I contributed to delivering key features within deadlines. I implemented real-time notifications using Socket.IO to provide instant updates. My technical expertise encompassed Socket.io, Redis, MongoDB, Next.js, TypeScript, Express, Postman, and JWT tokens. Furthermore, I conducted comprehensive manual, unit, and integration testing to ensure the reliability and functionality of the system.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
