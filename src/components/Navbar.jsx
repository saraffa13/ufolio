import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const links = [
    { name: 'Home', link: '#home' },
    { name: 'My Work', link: '#work' },
    { name: 'Skills', link: '#skills' },
    { name: 'Education', link: '#education' },
    { name: 'Contact', link: '#contact' },
    { name: 'Blogs', link: '/blogs', highlight: true },
  ];

  return (
    <nav className="fixed w-full h-20 shadow-xl bg-primary z-50">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <a href="#home" className="text-2xl font-bold text-accent">
          Utkarsh
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center space-x-8">
            {links.map(({ name, link, highlight }) => (
              <li 
                key={name} 
                className={`duration-300 ${highlight ? 'bg-accent text-primary px-4 py-2 rounded-full' : 'hover:text-accent'}`}
              >
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          {nav ? <HiX size={25} /> : <HiMenuAlt3 size={25} />}
        </div>

        {/* Mobile Menu */}
        <div className={
          nav 
            ? "md:hidden fixed left-0 top-20 w-full h-screen bg-primary/70 backdrop-blur-lg"
            : "fixed left-[-100%] top-20 p-10 ease-in duration-500"
        }>
          <ul className="flex flex-col items-center space-y-6">
            {links.map(({ name, link, highlight }) => (
              <li 
                key={name} 
                className={`text-2xl duration-300 ${highlight ? 'bg-accent text-primary px-4 py-2 rounded-full' : 'hover:text-accent'}`}
                onClick={() => setNav(false)}
              >
                <a href={link}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;