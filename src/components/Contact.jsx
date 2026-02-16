import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".contact-title", { y: 60, opacity: 0 });
      gsap.set(".contact-links", { y: 30, opacity: 0 });

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
        },
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
        },
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
      <div className="py-28 lg:py-40 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Label */}
          <p className="contact-title text-stone-400 text-xs uppercase tracking-[0.25em] mb-8 font-medium">
            Contact
          </p>

          {/* Headline */}
          <h2 className="contact-title text-4xl md:text-5xl lg:text-7xl font-display font-bold text-stone-900 leading-tight mb-6 uppercase tracking-tight">
            Have a project
            <br />
            in mind<span className="text-stone-400">?</span>
          </h2>
          <p className="contact-title text-stone-500 text-lg md:text-xl mb-12 max-w-lg mx-auto">
            Let's turn your data into something extraordinary.
          </p>

          {/* Social Links */}
          <div className="contact-links flex justify-center gap-8">
            <a
              href="https://github.com/KAIKAI240307"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors duration-300 group"
            >
              <Github size={20} />
              <span className="text-sm uppercase tracking-wider">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fadli-ardiansyah-harahap"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors duration-300 group"
            >
              <Linkedin size={20} />
              <span className="text-sm uppercase tracking-wider">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
