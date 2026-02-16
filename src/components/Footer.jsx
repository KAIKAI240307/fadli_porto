import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#faf8f5] py-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright + tagline */}
          <div>
            <p className="text-stone-400 text-sm">
              © {new Date().getFullYear()} Fadli Ardiansyah Harahap
            </p>
            <p className="text-stone-300 text-xs mt-1">
              Every data tells a story.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/KAIKAI240307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-900 text-sm transition-colors duration-300 uppercase tracking-wider"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fadli-ardiansyah-harahap-9629a322b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-900 text-sm transition-colors duration-300 uppercase tracking-wider"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="text-stone-400 hover:text-stone-900 text-sm transition-colors duration-300 uppercase tracking-wider group"
            >
              Back to top{" "}
              <span className="inline-block group-hover:-translate-y-0.5 transition-transform">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
