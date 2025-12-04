import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web App", "AI / ML", "Mobile App"];
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  // Animation untuk header - hanya run sekali saat component mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []); // Empty dependency - run sekali saja

  // Animation untuk project cards - run saat filter berubah
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [filter]); // Run saat filter berubah

  return (
    <section id="works" ref={containerRef} className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Selected <span className="text-neon">Works</span>
            </h2>
            <p className="text-slate-400 max-w-xl">
              A collection of digital experiences, blending code and creativity.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 border ${
                  filter === cat 
                    ? 'bg-neon text-slate-950 border-neon' 
                    : 'bg-transparent text-slate-400 border-slate-800 hover:border-neon hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <Tilt
              key={project.id}
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              scale={1.01}
              transitionSpeed={1000}
              className="project-card"
            >
              <div className="group relative bg-slate-900/50 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-800 hover:border-neon/50 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="h-64 md:h-auto relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                        
                        {/* Decorative Elements */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-neon/50 rounded-tl-lg" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-neon/50 rounded-br-lg" />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-between bg-slate-950/50">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white font-display uppercase leading-none">
                                        {project.title}
                                    </h3>
                                    <span className="text-neon font-script text-lg">{project.subtitle}</span>
                                </div>
                                <div className="text-xs font-mono text-slate-500 rotate-90 origin-top-right translate-x-2">
                                    {project.category}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs text-slate-500 uppercase tracking-wider mb-2">Project Info</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="border-t border-slate-800 pt-4">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs text-slate-500 uppercase">Year</span>
                                        <span className="text-sm text-white font-mono">{project.year}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs text-slate-500 uppercase">Awards</span>
                                        <span className="text-sm text-white font-bold">{project.awards}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                            <Link 
                                to={`/project/${project.id}`}
                                className="px-6 py-3 rounded-full border border-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300 inline-block text-center"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
