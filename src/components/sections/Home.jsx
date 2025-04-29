import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-12 md:py-0">
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
          <div className="text-left z-10">
            <p className="text-[#A0ECD0] text-lg mb-2">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#A0ECD0] to-[#479c7e] bg-clip-text text-transparent leading-tight">
              Pinaki Upadhyay
            </h1>          
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              A Full-stack developer with 2 years of enterprise experience who specializes in .NET development and React Front-end.  
            </p>
          </div>

          <div className="flex-shrink-0">
            <img src="professional-headshot.jpg" alt="Pinaki Professinal HeadShot" className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-[#A0ECD0]">
            </img>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
