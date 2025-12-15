import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".contact-title", { y: 60, opacity: 0 });
      gsap.set(".contact-links", { y: 30, opacity: 0 });

      // Animate
      gsap.to(".contact-title", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          toggleActions: "play none play none",
        }
      });

      gsap.to(".contact-links", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          toggleActions: "play none play none",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="contact" 
      ref={containerRef} 
      className="contact-section relative z-10 bg-[#faf8f5]"
    >
      <div className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <p className="contact-title text-stone-500 text-sm uppercase tracking-widest mb-6">
            Contact
          </p>
          <h2 className="contact-title text-3xl md:text-4xl lg:text-5xl font-display font-medium text-stone-900 leading-relaxed mb-12">
            Have a project in mind?<br />Let's work together.
          </h2>

          {/* Social Links */}
          <div className="contact-links flex justify-center gap-6">
            <a
              href="https://github.com/KAIKAI240307"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="www.linkedin.com/in/fadli-ardiansyah-harahap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
