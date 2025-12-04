import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Akai. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-neon hover:bg-slate-800 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
