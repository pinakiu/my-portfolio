import './App.css'
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import "./index.css";
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Experience } from './components/sections/Experience';
import { PersonalProjects } from './components/sections/PersonalProjects';
import { SocialLinks } from './components/SocialLinks';
import { GroupProjects } from './components/sections/GroupProjects';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SocialLinks />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="flex flex-col lg:flex-row min-h-screen bg-black text-gray-100">
        {/* Fixed Hero Section on the left for large screens */}
        <div className="w-full lg:w-[420px] lg:fixed lg:inset-y-0 lg:left-0 lg:z-30 lg:flex lg:flex-col lg:justify-center lg:items-center p-0 lg:py-16 lg:px-8">
          <Home />
        </div>

        {/* Main Content, scrollable, with left margin for hero on large screens */}
        <div className="w-full lg:ml-[420px] flex-1 px-0 lg:px-8">
          <Experience />
          <PersonalProjects />
          <GroupProjects />
        </div>
      </div>
    </>
  );
}

export default App;
