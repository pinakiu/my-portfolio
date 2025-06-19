import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const GroupProjects = () => {
  const groupProjects = [
    {
      title: "1st at South Florida Tech Hub - City Hack",
      images: [
        "/group-projects/gradebook/award-certificate.jpeg", 
        "/group-projects/gradebook/group-huddle.jpeg",
        "/group-projects/gradebook/team-at-desk-2.jpg",
        "/group-projects/gradebook/team-outside.JPG"
      ],
      description: "Developed a business model and POC for developing an educational platform that utilizes AI to reduce teacher workload and personalize student learning."
    }, 
    {
      title: "3rd at South Florida Tech Hub - NonProfit Hack",
      images: [
        "/group-projects/furniture/team-at-work.jpeg",
        "/group-projects/furniture/2023-award.jpeg",
        "/group-projects/furniture/group-pic.jpeg",
      ],
      description: "Led a team to develop 96% accurate furniture damage detection model using Azure Custom Vision AI."
    }, 
    {
      title: "Best Financial Hack at TechTogether Miami",
      images: [
        "/group-projects/cyber/miami-award-2.jpeg",
        "/group-projects/cyber/miami-team-at-work.jpeg",
        "/group-projects/cyber/miami-close-up.jpeg"
      ],
      description: "Created a two-class Boosted Decision Tree using Azure ML Designer to identify fraudulent applicants for bank accounts."
    }, 
    {
      title: "Senior Design Project",
      images: [
        "/group-projects/senior-design/senior-design-showcase.jpeg",
      ],
      description: "Directed a team of 5 to develop an application analyzing customer sentiment of products and services."
    },
  ];

  const settings = {
    dots: true,
    infinite: true, // Enables infinite loop for continuous movement
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set the speed of the auto-play (in milliseconds)
    pauseOnHover: true, // Pause autoplay on hover (optional)
    arrows: false,
  };

  return (
    <section id="groupprojects" className="hackathon-grid py-16">
      <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-[#A0ECD0] to-[#479c7e] bg-clip-text text-transparent">
        My Group Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-5xl mx-auto">
        {groupProjects.map((groupProject, index) => (
          <div key={index} className="p-4 border rounded-xl border-white/10 hover:-translate-y-1 hover:border-[#479c7e]/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">{groupProject.title}</h3>
            <p className="text-gray-400 mb-4">{groupProject.description}</p>
            <Slider {...settings}>
              {groupProject.images.map((image, idx) => (
                <div key={idx} className="relative">
                  <img 
                    src={image}
                    alt={`Hackathon ${index + 1} Image ${idx + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                    loading="lazy"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </section>
  );
};
