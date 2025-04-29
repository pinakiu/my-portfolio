import './App.css'
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import "./index.css";
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Experience } from './components/sections/Experience';
import { PersonalProjects } from './components/sections/PersonalProjects';
import { Contacts } from './components/sections/Contacts'
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
        <div className="w-full lg:w-1/3 p-8">
          <Home />
        </div>

        <div className="w-full lg:w-2/3 lg:h-screen lg:overflow-y-auto px-8">
          <Experience />
          <PersonalProjects />
          <GroupProjects />
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default App;
