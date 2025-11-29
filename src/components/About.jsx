import React from "react";

function About() {
  return (
    <section id="about" className="py-12 px-6 md:px-16 bg-[#0a0a0a]">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">About Me</h2>
      <div className="max-w-3xl mx-auto text-white/80 text-lg">
        <p className="mb-4">
          I’m a passionate frontend developer with experience in React, Tailwind, and modern web tools. I enjoy turning ideas into beautiful, functional websites.
        </p>
        <p>
          I’m always learning and improving, aiming to write clean code that’s easy to maintain and fun to use.
        </p>
      </div>
    </section>
  );
}

export default About;
