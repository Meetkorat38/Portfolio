"use client"

import { useState } from "react";

export const Header = () => {
  const [activeButton, setActiveButton] = useState<string>('home');

  const handleClick = (button:string) => {
    setActiveButton(button);
  };

  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-30">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#"
          className={`nav-item ${activeButton === 'home' ? 'bg-white text-black' : ''}`}
          onClick={() => handleClick('home')}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${activeButton === 'projects' ? 'bg-white text-black' : ''}`}
          onClick={() => handleClick('projects')}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${activeButton === 'about' ? 'bg-white text-black' : ''}`}
          onClick={() => handleClick('about')}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${activeButton === 'contact' ? 'bg-white text-black' : ''}`}
          onClick={() => handleClick('contact')}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
