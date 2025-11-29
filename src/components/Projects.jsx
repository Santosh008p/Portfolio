import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = [
  {
    title: "Malicious URL Detection",
    description:
      "Chrome extension using Python, scikit-learn, Pandas, Numpy to detect malicious URLs with Random Forest & XGBoost.",
    image: "/malicious-url.png",
    details: "Full details about the project, implementation steps, challenges faced, and outcome.",
  },
  {
    title: "StockInfo",
    description:
      "Responsive web app displaying NEPSE stocks data and interactive charts.",
    image: "/stockinfo.png",
    details: "Full details about the project, APIs used, chart libraries, and responsiveness.",
  },
  {
    title: "SportsYard",
    description:
      "Full Stack E-commerce platform for sports products with cart, checkout, and user authentication.",
    image: "/sportsyard.png",
    details: "Full details about backend, database, authentication, and payment integration.",
  },
  {
    title: "QR Generator",
    description: "Generate QR codes dynamically from any input text.",
    image: "/projects/qr-generator.png",
  },
  {
    title: "Recipe Finder",
    description: "Search and discover recipes using an external API.",
    image: "/projects/recipe-finder.png",
  },
  {
    title: "Movie Explorer",
    description: "Search for movies, view details and ratings using an API.",
    image: "/projects/movie-explorer.png",
  },
];

Modal.setAppElement("#root");

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 px-6 md:px-16 bg-[#0a0a0a] text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">Projects</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="group max-w-md mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className="relative bg-white/5 p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer max-w-md w-full"
              onClick={() => openModal(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-64 object-cover hover:scale-105 transition-transform duration-300 shadow-lg"
              />
              <h3 className="text-2xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-white/70">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedProject && (
        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="bg-[#0a0a0a] text-white p-6 md:p-12 rounded-2xl max-w-2xl mx-auto mt-20 relative outline-none shadow-lg"
          overlayClassName="fixed inset-0 bg-black/80 flex justify-center items-start z-50 overflow-auto"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-cyan-400 font-bold text-xl hover:text-cyan-300 transition"
          >
            ×
          </button>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-lg mb-6 w-full h-64 object-cover shadow-lg"
          />
          <h3 className="text-3xl font-bold mb-4 text-cyan-400">{selectedProject.title}</h3>
          <p className="text-white/80">{selectedProject.details}</p>
        </Modal>
      )}

      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: #00ffff;
            top: 50%;
            transform: translateY(-50%);
            width: 2rem;
            height: 2rem;
          }
          .swiper-button-next { right: 0.5rem; }
          .swiper-button-prev { left: 0.5rem; }
        `}
      </style>
    </section>
  );
}

export default Projects;
