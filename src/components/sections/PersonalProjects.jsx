import React from 'react'
import { RevealOnScroll } from '../RevealOnScroll'

export const PersonalProjects = () => {
  return (
    <section id="personalprojects" className="min-h-screen flex items-center justify-center py-20"> 
    <RevealOnScroll>
    <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#A0ECD0] to-[#479c7e]  bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#479c7e]/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
                <p className="text-gray-400 mb-4">
                    This is a Cloud Platform that was developed by a cloud platform person.
                </p>
                <div>
                    {["React", "Node", "AWS", "Docker"].map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-[#479c7e]/10 text-[#A0ECD0] py-1 px-3 rounded-full text-sm hover:bg-[#479c7e]/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-[#479c7e] hover:text-[#A0ECD0] transition-colors my-4"> View Project -^</a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#479c7e]/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">Website</h3>
                <p className="text-gray-400 mb-4">
                    Website design is for cool people who are smarticle particles.
                </p>
                <div>
                    {["Angular", ".NET", "MSSQL", "Harness", "GitHub"].map((tech, key) => (
                        <span
                        key={key}
                        className="bg-[#479c7e]/10 text-[#A0ECD0] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-[#479c7e] hover:text-[#A0ECD0] transition-colors my-4"> View Project -^</a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                <h3 className="text-xl font-bold mb-2">AI/ML Data Scraper</h3>
                <p className="text-gray-400 mb-4">
                    Scraping Data from the internet is fun and useful for this new startup with lots of eager founders.
                </p>
                <div>
                    {["OpenAI", "Python", "TensorFlow"].map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-[#479c7e]/10 text-[#A0ECD0] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <a href="#" className="text-[#479c7e] hover:text-[#A0ECD0] transition-colors my-4"> View Project -^</a>
                </div>
            </div>
        </div>
    </div>
    </RevealOnScroll>
    </section>
  )
}
