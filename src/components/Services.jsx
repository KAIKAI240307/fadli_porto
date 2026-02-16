import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, LayoutDashboard, Brain, PieChart } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Data Analysis & Reporting",
    description:
      "Mengungkap tren, mengidentifikasi pola, dan menyajikan laporan komprehensif untuk mendukung pengambilan keputusan strategis.",
    icon: BarChart3,
  },
  {
    id: 2,
    title: "Dashboard Development",
    description: "Membangun dashboard interaktif dengan Power BI dan Tableau.",
    icon: LayoutDashboard,
  },
  {
    id: 3,
    title: "Machine Learning Solutions",
    description:
      "Mengembangkan model prediktif dan algoritma AI untuk mengotomatisasi proses dan memprediksi hasil di masa depan.",
    icon: Brain,
  },
  {
    id: 4,
    title: "Data Visualization",
    description:
      "Mengubah data kompleks menjadi visualisasi yang mudah dipahami dan menarik untuk dampak maksimal.",
    icon: PieChart,
  },
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".services-title", { y: 60, opacity: 0 });
      gsap.set(".service-card", { y: 50, opacity: 0 });

      gsap.to(".services-title", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.to(".service-card", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="services-section relative z-10 bg-[#faf8f5]"
    >
      {/* Header */}
      <div className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="services-title text-stone-400 text-xs uppercase tracking-[0.25em] mb-6 font-medium">
            What I Offer
          </p>
          <h2 className="services-title text-3xl md:text-4xl lg:text-6xl font-display font-bold text-stone-900 leading-tight max-w-4xl uppercase tracking-tight">
            Turning raw data into actionable insights
            <span className="text-stone-400">.</span>
          </h2>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-stone-200 mx-auto max-w-7xl" />

      {/* Services Grid */}
      <div className="services-grid py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="service-card group p-8 bg-white border border-stone-200 rounded-2xl hover:border-stone-400 hover:shadow-xl transition-all duration-500"
                >
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-stone-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-stone-200 text-4xl font-display font-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-stone-900 mb-3 uppercase tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-stone-500 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full font-display font-bold uppercase tracking-wider text-sm hover:bg-stone-700 hover:shadow-xl transition-all duration-300 group"
            >
              <span>Get in Touch</span>
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
      </div>

      <div className="h-8" />
    </section>
  );
};

export default Services;
