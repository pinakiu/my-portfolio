import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const experiences = [
  {
    company: "Wells Fargo",
    role: "Software Engineer",
    duration: "2023 - Present",
    details: [
      "Engineered APIs and microservices to optimize workflow efficiency, doubling productivity and reducing API response times by 30%.",
      "Developed Angular and C# features to streamline user interactions, automate notifications, and enhance data accessibility.", 
      "Led deployment migrations, replacing legacy processes with modern solutions, improving reliability, and reducing deployment failures by 15%.",
    ],
    tech: ["C#", ".NET", "SQL", "Kafka", "Harness"]
  },
  {
    company: "Motorola Solutions",
    role: "Software Engineering Intern",
    duration: "May 2022 - Aug 2022",
    details: [
      "Automated quality assurance tests for radios using C++, streamlining factory testing and reducing testing time by 70%.",
      "Standardized radio frequency range testing procedures through comprehensive documentation, ensuring consistent product quality throughout the batch.",
      "Debugged and resolved errors within legacy code, reducing tech debt by 26%.",
    ],
    tech: ["C++", "Excel", "BitBucket", "Jira", "Git"]
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#A0ECD0] to-[#479c7e] bg-clip-text text-transparent text-center">
            Experience
          </h2>

          <div className="relative border-l-2 border-[#479c7e]/50">
            {experiences.map((job, index) => (
              <div key={index} className="mb-8 ml-6 relative">
                <div className="absolute w-4 h-4 bg-[#479c7e] border-4 border-white rounded-full -left-2.5 top-1"></div>
                
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#479c7e]/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <p className="text-gray-400 text-sm">{job.duration}</p>
                  </div>
                  <p className="text-gray-300 mb-2">{job.role}</p>
                  <ul className="list-disc list-inside text-gray-400 mb-4 space-y-2">
                    {job.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-[#479c7e]/10 text-[#A0ECD0] py-1 px-3 rounded-full text-sm hover:bg-[#479c7e]/20 transition">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
