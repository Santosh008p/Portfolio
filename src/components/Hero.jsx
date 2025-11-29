import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-28 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between bg-[#0a0a0a] relative">
      {/* Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">
          Hi, I'm Santosh
        </h1>
        <p className="text-white/80 mb-6 text-lg leading-relaxed">
          I'm a  learning frontend developer passionate about building user-friendly, visually engaging web experiences.
        </p>
        <p className="text-white/80 mb-6 text-lg leading-relaxed">
          Skills:{" "}
          <span className="text-cyan-400 font-semibold">
            <Typewriter
              words={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>

        <button
          onClick={scrollToProjects}
          className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 shadow-lg transition"
        >
          View My Work
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/me4.jpg"
          alt="My Photo"
          className="rounded-full w-64 h-64 object-cover shadow-cyan-400/50 shadow-lg transition-transform hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Hero;
