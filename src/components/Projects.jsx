import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle mouse move for cursor-following title
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate cursor label
  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: mousePos.x + 20,
        y: mousePos.y + 20,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [mousePos]);

  // Scroll animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(".works-title", { y: 60, opacity: 0 });
      gsap.set(".project-card-new", { y: 80, opacity: 0 });

      // Animate title
      gsap.to(".works-title", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".works-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });

      // Animate project cards
      gsap.to(".project-card-new", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section 
        id="works" 
        ref={containerRef} 
        className="works-section relative z-10 bg-[#faf8f5]"
      >
        {/* Header */}
        <div className="py-20 lg:py-28 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <p className="works-title text-stone-500 text-sm uppercase tracking-widest mb-6">
              Selected Works
            </p>
            <h2 className="works-title text-4xl md:text-5xl lg:text-6xl font-display font-medium text-stone-900 leading-tight max-w-4xl">
              A collection of digital experiences, blending code and creativity.
            </h2>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid pb-20 lg:pb-32 px-6 lg:px-16">
          <div className="max-w-6xl mx-auto space-y-8">
            {projectsData.map((project, index) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="project-card-new block group"
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-stone-200">
                  {/* Project Image */}
                  <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

                  {/* Project number */}
                  <div className="absolute top-6 left-6 text-stone-500 text-sm font-mono opacity-60">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-stone-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Project Info - Below Image */}
                <div className="mt-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-display font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone-500 text-sm mt-1">{project.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-stone-400 text-sm">{project.year}</span>
                    <p className="text-stone-500 text-xs mt-1">{project.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cursor-following label */}
      {hoveredProject && (
        <div 
          ref={cursorRef}
          className="fixed pointer-events-none z-50 px-4 py-2 bg-stone-900 text-white rounded-full text-sm font-medium shadow-lg"
          style={{
            left: 0,
            top: 0,
            transform: `translate(${mousePos.x + 20}px, ${mousePos.y + 20}px)`
          }}
        >
          View Project
        </div>
      )}
    </>
  );
};

export default Projects;
