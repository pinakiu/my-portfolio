import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
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
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        {/* Left Section (Fixed) */}
        <div className="w-1/3 min-h-screen fixed top-0 left-0 p-8 bg-black">
          <Home />
        </div>
        <div className="w-2/3 ml-auto overflow-y-auto h-screen px-8 bg-black text-gray-100">
          <Experience />
          <PersonalProjects />
          <div className="relative z-10">
            <GroupProjects />
          </div>
          <Contacts />
        </div>
    </>
  );
}

export default App;
