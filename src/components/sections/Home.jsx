import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen w-full h-full flex items-center justify-center overflow-hidden">
      <RevealOnScroll>
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <div className="text-center z-10 w-full">
            <p className="text-[#A0ECD0] text-lg mb-2">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#A0ECD0] to-[#479c7e] bg-clip-text text-transparent leading-tight">
              Pinaki Upadhyay
            </h1>          
            <p className="text-gray-400 text-lg mb-8">
              A Full-stack developer with 2 years of enterprise experience who specializes in .NET development and React Front-end.  
            </p>
          </div>

          <div className="flex justify-center w-full">
            <img src="professional-headshot.jpg" alt="Pinaki Professinal HeadShot" className="w-48 h-48 md:w-60 md:h-60 max-w-full rounded-full object-cover border-4 border-[#A0ECD0]" />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
