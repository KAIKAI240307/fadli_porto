import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".hero-text", { y: 60, opacity: 0 });
      gsap.set(".hero-subtitle", { y: 30, opacity: 0 });
      
      gsap.to(".hero-text", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      })
      gsap.to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#faf8f5]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 py-32">
        {/* Main headline */}
        <div className="mb-8">
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-display font-medium text-stone-900 leading-tight max-w-4xl">
            Data Analyst, Data Scientist, and Machine Learning Engineer based in Jakarta.
          </h1>
        </div>

        {/* Subtitle */}
        <div className="hero-subtitle flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-12">
          <p className="text-stone-500 text-lg md:text-xl max-w-xl leading-relaxed">
            Turning complex data into actionable insights. Bridging the gap between raw data and meaningful solutions.
          </p>
          
          <a
            href="#works"
            className="inline-flex items-center gap-3 text-stone-900 hover:text-stone-600 transition-colors group"
          >
            <span className="text-sm uppercase tracking-widest">View Works</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
