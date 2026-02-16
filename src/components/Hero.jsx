import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-line", { y: 80, opacity: 0 });
      gsap.set(".hero-subtitle", { y: 40, opacity: 0 });
      gsap.set(".hero-cta", { y: 30, opacity: 0 });
      gsap.set(".hero-marquee", { opacity: 0 });

      gsap.to(".hero-line", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.8,
      });

      gsap.to(".hero-cta", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.1,
      });

      gsap.to(".hero-marquee", {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 1.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const marqueeText =
    "DATA ANALYST • DATA SCIENTIST • ML ENGINEER • PROBLEM SOLVER • ";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#faf8f5]"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-16">
        {/* Small label */}
        <div className="hero-line mb-8">
          <span className="inline-block px-4 py-1.5 border border-stone-300 rounded-full text-stone-500 text-xs uppercase tracking-[0.25em] font-medium">
            Based in Jakarta
          </span>
        </div>

        {/* Main headline — oversized */}
        <div className="mb-10">
          <h1 className="hero-line text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-stone-900 leading-[0.9] uppercase tracking-tight">
            Every Data
          </h1>
          <h1 className="hero-line text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold leading-[0.9] uppercase tracking-tight mt-2">
            <span className="text-stone-900">Tells A </span>
            <span className="text-stone-400">Story</span>
          </h1>
        </div>

        {/* Subtitle + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-12">
          <p className="hero-subtitle text-stone-500 text-base md:text-lg max-w-md leading-relaxed font-light">
            Turning complex data into actionable insights. Bridging the gap
            between raw data and meaningful solutions.
          </p>

          <a
            href="#works"
            className="hero-cta inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full font-display font-bold uppercase tracking-wider text-sm hover:bg-stone-700 transition-all duration-300 group"
          >
            <span>View Works</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Marquee Strip */}
      <div className="hero-marquee relative w-full py-6 border-y border-stone-200 mt-auto overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-stone-200 text-6xl md:text-8xl font-display font-black uppercase tracking-tight mx-4 select-none"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
