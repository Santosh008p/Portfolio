import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md text-white px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer" onClick={() => scrollToSection("home")}>
        Santosh
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
        <li className="cursor-pointer hover:text-cyan-400 transition" onClick={() => scrollToSection("home")}>Home</li>
        <li className="cursor-pointer hover:text-cyan-400 transition" onClick={() => scrollToSection("projects")}>Projects</li>
        <li className="cursor-pointer hover:text-cyan-400 transition" onClick={() => scrollToSection("skills")}>Skills</li>
        <li className="cursor-pointer hover:text-cyan-400 transition" onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <div className="w-6 h-0.5 bg-white mb-1 transition-transform" style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
        <div className="w-6 h-0.5 bg-white mb-1 transition-opacity" style={{ opacity: isOpen ? 0 : 1 }}></div>
        <div className="w-6 h-0.5 bg-white transition-transform" style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center py-4 gap-4 md:hidden">
          <li className="cursor-pointer hover:text-cyan-400 transition" onClick={() => scrollToSection("home")}>Home</li>
          <li className="cursor-pointer hover:text-cyan-400 transition" onClick={() => scrollToSection("projects")}>Projects</li>
          <li className="cursor-pointer hover:text-cyan-400 transition" onClick={() => scrollToSection("skills")}>Skills</li>
          <li className="cursor-pointer hover:text-cyan-400 transition" onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
