import React, { useEffect, useRef } from 'react';
import { Code, Server, PenTool, Terminal } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Titlt from 'react-parallax-tilt';

const SkillCategory = ({ title, icon, skills }) => {
  const Icon = icon;
  return (
    
    <div className="skill-category bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-neon/30 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-800 rounded-lg text-neon">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-slate-950 rounded-md text-sm text-slate-400 border border-slate-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const categories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Vue.js", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Redux"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "Data Science",
      icon: Terminal,
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Matplotlib", "Jupyter"]
    },
    {
      title: "Tools & Design",
      icon: PenTool,
      skills: ["Git", "Docker", "AWS", "Figma", "Adobe XD", "Linux", "CI/CD"]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });

      gsap.from(".skill-category", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="skills-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technical <span className="text-neon">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical stack and tools I use to build digital products.
          </p>
        </div>

        <div className="skills-grid grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <Titlt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2000}
              className="project-card h-full"
            >
            <SkillCategory
              key={cat.title}
              {...cat}
              index={index}
            />
            </Titlt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
