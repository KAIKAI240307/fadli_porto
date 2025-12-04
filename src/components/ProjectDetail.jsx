import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, CheckCircle, Zap, Target, X, ZoomIn } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getProjectById, getRelatedProjects } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = getProjectById(id);
    const relatedProjects = project ? getRelatedProjects(id, project.category) : [];

    const headerRef = useRef(null);
    const contentRef = useRef(null);

    // State untuk image lightbox
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Function untuk buka lightbox
    const openLightbox = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsLightboxOpen(true);
    };

    // Function untuk tutup lightbox
    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedImage(null);
    };

    // Effect untuk manage body scroll ketika lightbox buka/tutup
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isLightboxOpen]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(headerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Content sections animation
            gsap.from(".detail-section", {
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                }
            });
        });

        return () => ctx.revert();
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
                    <p className="text-slate-400 mb-8">The project you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-neon text-slate-950 rounded-full font-bold hover:bg-white transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Back Button */}
            <div className="fixed top-8 left-8 z-50">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full hover:border-neon/50 transition-all duration-300 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back</span>
                </button>
            </div>

            {/* Hero Section */}
            <div ref={headerRef} className="relative pt-32 pb-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon/10 border border-neon/30 rounded-full mb-6">
                        <div className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-neon uppercase tracking-wider">{project.category}</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-2xl md:text-3xl font-script text-neon mb-8">
                        {project.subtitle}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-8 mb-12">
                        <div>
                            <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Year</span>
                            <span className="text-lg font-mono text-white">{project.year}</span>
                        </div>
                        <div>
                            <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Awards</span>
                            <span className="text-lg font-bold text-neon">{project.awards}</span>
                        </div>
                        <div>
                            <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Technologies</span>
                            <span className="text-lg text-white">{project.technologies.slice(0, 3).join(', ')}</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-neon text-slate-950 rounded-full font-bold hover:bg-white transition-all duration-300 hover:scale-105"
                            >
                                <ExternalLink className="w-5 h-5" />
                                View Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 border border-slate-700 rounded-full font-bold hover:border-neon hover:bg-neon/10 transition-all duration-300"
                            >
                                <Github className="w-5 h-5" />
                                View Source
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Image/Gallery */}
            <div className="px-6 mb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.images.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => openLightbox(img)}
                                className={`${idx === 0 ? 'md:col-span-2' : ''} h-96 rounded-3xl border border-slate-800 overflow-hidden relative group cursor-pointer hover:border-neon/50 transition-all duration-300`}
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
                                
                                {/* Zoom Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-neon/90 flex items-center justify-center backdrop-blur-sm">
                                        <ZoomIn className="w-8 h-8 text-slate-950" />
                                    </div>
                                </div>
                                
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-xs text-slate-400 font-mono">Screenshot {idx + 1} - Klik untuk Perbesar</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div ref={contentRef} className="px-6 pb-20">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* Overview */}
                    <section className="detail-section">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center">
                                <Target className="w-6 h-6 text-neon" />
                            </div>
                            <h2 className="text-3xl font-display font-bold">Project Overview</h2>
                        </div>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {project.detailedDescription}
                        </p>
                    </section>

                    {/* Technologies */}
                    <section className="detail-section">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-neon" />
                            </div>
                            <h2 className="text-3xl font-display font-bold">Technologies Used</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-full text-sm font-medium hover:border-neon/50 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Features */}
                    <section className="detail-section">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-neon" />
                            </div>
                            <h2 className="text-3xl font-display font-bold">Key Features</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {project.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-neon/30 transition-colors"
                                >
                                    <CheckCircle className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Challenges & Solutions */}
                    <section className="detail-section">
                        <h2 className="text-3xl font-display font-bold mb-6">Challenges</h2>
                        <div className="space-y-4">
                            {project.challenges.map((challenge, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 bg-gradient-to-r from-slate-900/50 to-transparent border-l-4 border-neon rounded-r-xl"
                                >
                                    <p className="text-slate-300">{challenge}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Results */}
                    <section className="detail-section">
                        <h2 className="text-3xl font-display font-bold mb-6">Results & Impact</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {project.results.map((result, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center hover:border-neon/50 transition-colors"
                                >
                                    <div className="text-3xl font-bold text-neon mb-2">✓</div>
                                    <p className="text-slate-300">{result}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <div className="px-6 py-20 border-t border-slate-900">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-display font-bold mb-12">Related Projects</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedProjects.map((relProject) => (
                                <Link
                                    key={relProject.id}
                                    to={`/project/${relProject.id}`}
                                    className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-neon/50 transition-all duration-300 hover:scale-105"
                                >
                                    <div className="h-48 relative">
                                        <img
                                            src={relProject.image}
                                            alt={relProject.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors">
                                            {relProject.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 line-clamp-2">
                                            {relProject.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Image Lightbox Modal */}
            {isLightboxOpen && selectedImage && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="fixed top-8 right-8 z-[10000] w-12 h-12 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center hover:bg-neon hover:border-neon hover:text-slate-950 transition-all duration-300 group"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Image Container */}
                    <div 
                        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Full size preview"
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                        />
                    </div>

                    {/* Instructions */}
                    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 text-sm font-mono">
                        <span className="bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800">
                            Klik tombol X untuk menutup
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
