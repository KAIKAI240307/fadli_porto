import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const experiences = [
  {
    id: 1,
    role: "ShopKeeper",
    company: "WarungFadli",
    period: "2015 - Present",
    description: "Mengelola operasional toko meliputi inventaris, transaksi penjualan, pelayanan pelanggan, pencatatan keuangan sederhana, serta kebersihan dan kerapihan toko.."
  },
  {
    id: 2,
    role: "QA (Quality Assurance) Engineer",
    company: "HansKongkow Warmindo",
    period: "Oktober 2024 - Januari 2025",
    description: "Melaksanakan pengujian menyeluruh untuk sistem e-commerce meliputi fungsionalitas pemesanan, payment gateway, autentikasi pengguna, dan responsivitas UI/UX lintas perangkat. Menerapkan security testing dan performance testing untuk mengidentifikasi kerentanan serta bottleneck sistem. Mengembangkan dokumentasi test case, laporan bug terperinci, dan berkolaborasi dengan tim development untuk resolusi bug dan regression testing."
  },
];

const ExperienceItem = ({ exp }) => (
  <div className="experience-item relative pl-8 md:pl-0 opacity-0">
    {/* Timeline Line (Mobile) */}
    <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-800">
      <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-neon" />
    </div>

    <div className="md:flex items-center justify-between group">
      <div className="md:w-5/12 md:text-right md:pr-8">
        <h3 className="text-xl font-bold text-white group-hover:text-neon transition-colors">{exp.role}</h3>
        <p className="text-neon font-medium mb-1">{exp.company}</p>
        <div className="flex items-center md:justify-end gap-2 text-slate-500 text-sm mb-2 md:mb-0">
          <Calendar size={14} />
          <span>{exp.period}</span>
        </div>
      </div>

      {/* Center Dot (Desktop) */}
      <div className="hidden md:flex flex-col items-center w-2/12">
        <div className="w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-neon group-hover:bg-neon transition-all duration-300 z-10" />
        <div className="h-full w-px bg-slate-800 -mt-2 -mb-4" />
      </div>

      <div className="md:w-5/12 md:pl-8">
        <p className="text-slate-400 text-sm leading-relaxed">
          {exp.description}
        </p>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        }
      });

      const items = gsap.utils.toArray(".experience-item");
      items.forEach((item, i) => {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          }
        });
        
        // Initial state set in CSS or via gsap.set
        gsap.set(item, { x: i % 2 === 0 ? -50 : 50 });
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="experience-title text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Work <span className="text-neon">Experience</span>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-0 md:gap-y-12 flex flex-col">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
