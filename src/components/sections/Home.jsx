import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="flex items-center justify-between w-full px-4">
        <div className="text-left z-10 px-4">
          <p className="text-[#A0ECD0] text-lg mb-2">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-[#A0ECD0] to-[#479c7e] bg-clip-text text-transparent leading-[1.2]">
            Pinaki Upadhyay
          </h1>          
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            A Full-stack developer with 2 years of enterprise experience who specializes in .NET development and React Front-end.  
          </p>
        </div>

        <div className="relative flex-shrink-0 ml-10">
          <img src="professional-headshot.jpg" alt="Pinaki Professinal HeadShot" className="w-52 h-52 rounded-full object-cover border-4 border-[#A0ECD0]">
          </img>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
