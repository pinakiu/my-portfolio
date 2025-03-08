import React, { lazy } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HackathonCarousel = () => {
    const hackathons = [
        {
            title: "1st at South Florida Tech Hub - City Hack",
            images: [
                "/hackathons/gradebook/award-certificate.jpeg", 
                "/hackathons/gradebook/group-huddle.jpeg",
                "/hackathons/gradebook/team-at-desk-2.jpg",
                "/hackathons/gradebook/team-outside.JPG"
            ],
            description: "Developed a business model and POC for developing an educational platform that utilizes AI to reduce teacher workload and persionalize student learning."
        }, 
        {
            title: "3rd at South Florida Tech Hub - NonProfit Hack",
            images: [
                "/hackathons/furniture/team-at-work.jpeg",
                "/hackathons/furniture/2023-award.jpeg",
                "/hackathons/furniture/group-pic.jpeg",
            ],
            description: "Led a team to develop 96% accurate furniture damage detection model using Azure Custom Vision AI."
        }, 
        {
            title: "Best Financial Hack at TechTogether Miami",
            images: [
                "/hackathons/cyber/miami-award-2.jpeg",
                "/hackathons/cyber/miami-team-at-work.jpeg",
                "/hackathons/cyber/miami-close-up.jpeg"
            ],
            description: "Created a two-class Boosted Decision Tree using Azure ML Designer to identify fradulent applicants for bank accounts. "
        }, 
    ];

    const settings = {
        dots: true,          // Show navigation dots
        infinite: true,      // Loop the carousel
        speed: 500,          // Transition speed
        slidesToShow: 1,     // Show one image at a time
        slidesToScroll: 1,   // Scroll one image at a time
        centerMode: true,    // Center the active slide
        focusOnSelect: true  // Focus on the selected slide
      };

    return (
        <section className="hackathon-carousel py-16">
            <h2 className="text-center text-3xl font-bold mb-8 bg-gradient-to-r from-[#A0ECD0] to-[#479c7e] bg-clip-text text-transparent">My Hackathons</h2>
            <Slider {...settings}>
                {hackathons.map((hackathon, index) => (
                    <div key={index} className="hackathon-slide">
                        <h3 className="text-xl font-bold mb-2">{hackathon.title}</h3>
                        <p className="text-gray-400 mb-4">{hackathon.description}</p>

                        <div className="flex justify-center gap-4">
                            {hackathon.images.map((image, idx) => (
                                <div key={idx} className="image-container">
                                    <img 
                                    src={image}
                                    alt={`Hackathon ${index + 1} Image ${idx + 1}`}
                                    className="w-full h-auto rounded-lg shadow-md"
                                    loading="lazy"
                                />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};
