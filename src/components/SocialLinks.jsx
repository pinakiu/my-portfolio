import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => {
    return (
        <div className="fixed left-4 top-7/8 transform -translate-y-1/2 flex flex-col gap-4 text-2xl z-50">
        <a href="https://www.linkedin.com/in/pinaki-upadhyay/" target="_blank" rel="noopener noreferrer" className="text-[#A0ECD0] hover:text-white transition">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/pinakiu" target="_blank" rel="noopener noreferrer" className="text-[#A0ECD0] hover:text-white transition">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
};
