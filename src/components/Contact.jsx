import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-12 px-6 md:px-16 bg-[#0a0a0a] text-white">
      <h2 className="text-4xl font-bold text-center mb-8 text-cyan-400">Contact Me</h2>
      <div className="max-w-3xl mx-auto space-y-4 text-center">
        <p>Email: <span className="text-white/80">santosh.08045@gmail.com</span></p>
        <p>Phone: <span className="text-white/80">9867545798</span></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/santosh-parajuli-687491278" className="text-cyan-400 hover:underline">View Profile</a></p>
        <p>GitHub: <a href="https://github.com/Santosh008p" className="text-cyan-400 hover:underline">View Repos</a></p>
      </div>
    </section>
  );
}

export default Contact;
