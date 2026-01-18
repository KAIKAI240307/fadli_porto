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

    const [selectedImage, setSelectedImage] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedImage(null);
    };

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
            gsap.set(".detail-animate", { y: 40, opacity: 0 });
            
            gsap.to(".detail-animate", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });

            gsap.set(".detail-section", { y: 60, opacity: 0 });
            
            gsap.to(".detail-section", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
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
            <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-display font-medium text-stone-900 mb-4">Project Not Found</h2>
                    <p className="text-stone-500 mb-8">The project you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-700 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#faf8f5] text-stone-900">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md py-4">
                <div className="max-w-6xl mx-auto px-6 lg:px-16 flex justify-between items-center">
                    <button
                        onClick={() => navigate("/#works")}
                        className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm">Back</span>
                    </button>
                    <Link to="/" className="text-xl font-display font-medium">
                        FadliArdiansyah
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div ref={headerRef} className="pt-32 pb-16 px-6 lg:px-16">
                <div className="max-w-5xl mx-auto">
                    {/* Category & Year & Status */}
                    <div className="detail-animate flex items-center gap-4 mb-8">
                        <span className="text-stone-400 text-sm">{project.category}</span>
                        <span className="text-stone-300">•</span>
                        <span className="text-stone-400 text-sm">{project.year}</span>
                        {project.status === 'ongoing' && (
                            <>
                                <span className="text-stone-300">•</span>
                                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                                    In Progress ({project.progress}%)
                                </span>
                            </>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="detail-animate text-4xl md:text-5xl lg:text-6xl font-display font-medium text-stone-900 leading-tight mb-6">
                        {project.title}
                    </h1>
                    
                    <p className="detail-animate text-xl md:text-2xl text-stone-500 mb-12 max-w-3xl">
                        {project.subtitle}
                    </p>

                    {/* CTA Buttons */}
                    <div className="detail-animate flex flex-wrap gap-4">
                        {project.hasDocumentation && (
                            <Link
                                to={`/project/${id}/docs`}
                                className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full text-sm hover:bg-stone-700 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                View Documentation
                            </Link>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-full text-sm hover:bg-stone-700 transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                View Source
                            </a>
                        )}
                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-stone-300 text-stone-700 rounded-full text-sm hover:border-stone-900 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Main Image Gallery */}
            <div className="px-6 lg:px-16 mb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.images.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => openLightbox(img)}
                                className={`${idx === 0 ? 'md:col-span-2' : ''} aspect-video rounded-2xl overflow-hidden relative group cursor-pointer bg-stone-200`}
                            >
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ZoomIn className="w-5 h-5 text-stone-900" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Sections */}
            <div ref={contentRef} className="px-6 lg:px-16 pb-24">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* My Process - Timeline */}
                    {project.process && project.process.length > 0 && (
                        <section className="detail-section">
                            <p className="text-stone-400 text-sm uppercase tracking-widest mb-8">My Process</p>
                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200 hidden md:block" />
                                
                                <div className="space-y-6">
                                    {project.process.map((step, idx) => (
                                        <div key={idx} className="flex items-start gap-6 group">
                                            {/* Step Number */}
                                            <div className="relative z-10 w-12 h-12 rounded-full bg-stone-100 border-2 border-stone-200 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-900 group-hover:border-stone-900 transition-colors duration-300">
                                                <span className="text-sm font-mono text-stone-600 group-hover:text-white transition-colors duration-300">
                                                    {String(step.step).padStart(2, '0')}
                                                </span>
                                            </div>
                                            
                                            {/* Step Content */}
                                            <div className="flex-1 pb-6">
                                                <h4 className="text-lg font-display font-medium text-stone-900 mb-1">
                                                    {step.title}
                                                </h4>
                                                <p className="text-stone-500 text-sm">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Case Study - The Challenge */}
                    {project.caseStudy && (
                        <>
                            <div className="w-full h-px bg-stone-200" />
                            <section className="detail-section">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                                        <Target className="w-5 h-5 text-stone-600" />
                                    </div>
                                    <p className="text-stone-400 text-sm uppercase tracking-widest">The Challenge</p>
                                </div>
                                <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
                                    {project.caseStudy.challenge}
                                </p>
                            </section>
                        </>
                    )}

                    {/* Case Study - My Approach */}
                    {project.caseStudy && project.caseStudy.approach && (
                        <>
                            <div className="w-full h-px bg-stone-200" />
                            <section className="detail-section">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-stone-600" />
                                    </div>
                                    <p className="text-stone-400 text-sm uppercase tracking-widest">My Approach</p>
                                </div>
                                <div className="space-y-4">
                                    {project.caseStudy.approach.map((step, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-4 p-5 bg-stone-50 border border-stone-100 rounded-xl"
                                        >
                                            <span className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center text-xs font-medium text-stone-600 flex-shrink-0">
                                                {idx + 1}
                                            </span>
                                            <p className="text-stone-700">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {/* Case Study - The Solution + Technologies */}
                    {project.caseStudy && (
                        <>
                            <div className="w-full h-px bg-stone-200" />
                            <section className="detail-section">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center">
                                        <CheckCircle className="w-5 h-5 text-stone-600" />
                                    </div>
                                    <p className="text-stone-400 text-sm uppercase tracking-widest">The Solution</p>
                                </div>
                                <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8">
                                    {project.caseStudy.solution}
                                </p>
                                
                                {/* Technologies */}
                                <div className="pt-6 border-t border-stone-100">
                                    <p className="text-stone-500 text-sm mb-4">Technologies Used</p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-stone-100 border border-stone-200 rounded-full text-sm text-stone-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </>
                    )}

                    {/* Case Study - Impact & Results */}
                    {project.caseStudy && project.caseStudy.impact && (
                        <>
                            <div className="w-full h-px bg-stone-200" />
                            <section className="detail-section">
                                <p className="text-stone-400 text-sm uppercase tracking-widest mb-8">Impact & Results</p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {project.caseStudy.impact.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="p-6 bg-white border border-stone-200 rounded-2xl text-center hover:border-stone-400 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="text-4xl md:text-5xl font-display font-medium text-stone-900 mb-2">
                                                {item.metric}
                                            </div>
                                            <p className="text-stone-500 text-sm">{item.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {/* Fallback: Original format if no caseStudy data */}
                    {!project.caseStudy && (
                        <>
                            {/* Overview */}
                            <section className="detail-section">
                                <p className="text-stone-400 text-sm uppercase tracking-widest mb-4">Overview</p>
                                <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
                                    {project.detailedDescription}
                                </p>
                            </section>

                            <div className="w-full h-px bg-stone-200" />

                            {/* Technologies */}
                            <section className="detail-section">
                                <p className="text-stone-400 text-sm uppercase tracking-widest mb-6">Technologies</p>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-stone-100 border border-stone-200 rounded-full text-sm text-stone-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </section>

                            <div className="w-full h-px bg-stone-200" />

                            {/* Features */}
                            <section className="detail-section">
                                <p className="text-stone-400 text-sm uppercase tracking-widest mb-6">Key Features</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {project.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3 p-4 bg-stone-50 border border-stone-100 rounded-xl"
                                        >
                                            <CheckCircle className="w-5 h-5 text-stone-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-stone-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Challenges */}
                            {project.challenges && project.challenges.length > 0 && (
                                <>
                                    <div className="w-full h-px bg-stone-200" />
                                    <section className="detail-section">
                                        <p className="text-stone-400 text-sm uppercase tracking-widest mb-6">Challenges</p>
                                        <div className="space-y-4">
                                            {project.challenges.map((challenge, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-6 bg-stone-50 border-l-2 border-stone-300 rounded-r-xl"
                                                >
                                                    <p className="text-stone-700">{challenge}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </>
                            )}

                            {/* Results */}
                            {project.results && project.results.length > 0 && (
                                <>
                                    <div className="w-full h-px bg-stone-200" />
                                    <section className="detail-section">
                                        <p className="text-stone-400 text-sm uppercase tracking-widest mb-6">Results</p>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {project.results.map((result, idx) => (
                                                <div
                                                    key={idx}
                                                    className="p-6 bg-stone-50 border border-stone-100 rounded-xl text-center"
                                                >
                                                    <div className="text-2xl text-stone-400 mb-3">✓</div>
                                                    <p className="text-stone-700 text-sm">{result}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <div className="px-6 lg:px-16 py-20 border-t border-stone-200">
                    <div className="max-w-6xl mx-auto">
                        <p className="text-stone-400 text-sm uppercase tracking-widest mb-8">Related Projects</p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedProjects.map((relProject) => (
                                <Link
                                    key={relProject.id}
                                    to={`/project/${relProject.id}`}
                                    className="group"
                                >
                                    <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 mb-4">
                                        <img
                                            src={relProject.image}
                                            alt={relProject.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-lg font-display font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                                        {relProject.title}
                                    </h3>
                                    <p className="text-sm text-stone-500 mt-1">{relProject.category}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="px-6 lg:px-16 py-12 border-t border-stone-200">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-stone-400 text-sm">© {new Date().getFullYear()} Fadli Ardiansyah Harahap</p>
                    <Link 
                        to="/"
                        className="text-stone-500 hover:text-stone-900 text-sm transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </footer>

            {/* Image Lightbox Modal */}
            {isLightboxOpen && selectedImage && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="fixed top-6 right-6 z-[10000] w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                        aria-label="Close lightbox"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div 
                        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Full size preview"
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>

                    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
                        Click anywhere to close
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;
