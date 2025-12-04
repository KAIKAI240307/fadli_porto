import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play reverse play reverse",
        }
      });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        skewY: 7,
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.5")
      .from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      }, "-=0.5");

      // Parallax effect on scroll
      gsap.to(titleRef.current, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-neon/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="overflow-hidden mb-6">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white tracking-tighter"
          >
            akai<span className="text-neon">.</span>
          </h1>
        </div>

        <div ref={subtitleRef} className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12">
          <p>Data Analyst, Data Scientist &</p>
          <p className="text-white font-medium mt-2">Machine Learning Engineer</p>
        </div>

        <div ref={buttonRef}>
          <a
            href="#works"
            className="inline-block px-8 py-4 bg-neon text-slate-950 font-bold rounded-full hover:scale-105 transition-transform duration-300"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 uppercase tracking-widest">Scroll</span>
        <div className="animate-bounce">
          <ArrowDown className="text-neon" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
