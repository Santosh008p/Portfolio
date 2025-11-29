import React from "react";

function Footer() {
  return (
    <footer className="bg-black/80 text-white py-6 text-center border-t border-white/10">
      <p>
        &copy; {new Date().getFullYear()} Santosh Parajuli. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-2">
        <a
          href="https://github.com/Santosh008p"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/santosh-parajuli-687491278"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:santosh.08045@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
