import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-info", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        }
      });

      gsap.from(".contact-form", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Info - Center Aligned */}
        <div className="contact-info max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Let's <span className="text-neon">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="p-3 bg-slate-900 rounded-full text-neon">
                <MapPin size={20} />
              </div>
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/KAIKAI240307"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:bg-neon hover:text-slate-950 transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/fadli-ardiansyah-harahap-9629a322b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-900 rounded-full text-slate-400 hover:bg-neon hover:text-slate-950 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
