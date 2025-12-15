import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Circle, FileText, BarChart3, X, ChevronDown, ChevronUp, Image, FileType } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getProjectById } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const ProjectDocumentation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = getProjectById(id);
    const containerRef = useRef(null);
    
    // State untuk expanded phases
    const [expandedPhase, setExpandedPhase] = useState(null);
    // State untuk lightbox
    const [lightboxImage, setLightboxImage] = useState(null);
    // State untuk Markdown
    const [markdownContent, setMarkdownContent] = useState(null);
    const [isMarkdownOpen, setIsMarkdownOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const ctx = gsap.context(() => {
            gsap.set(".doc-animate", { y: 40, opacity: 0 });
            gsap.set(".phase-item", { x: -30, opacity: 0 });

            gsap.to(".doc-animate", {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
            });

            gsap.to(".phase-item", {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
                delay: 0.3
            });
        }, containerRef);

        return () => ctx.revert();
    }, [id]);

    // Toggle phase expansion
    const togglePhase = (phaseId) => {
        setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
    };

    // Handle Markdown Click
    const handleMarkdownClick = async (url) => {
        try {
            const response = await fetch(url);
            const text = await response.text();
            setMarkdownContent(text);
            setIsMarkdownOpen(true);
        } catch (error) {
            console.error("Error fetching markdown:", error);
        }
    };

    if (!project || !project.phases) {
        return (
            <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-display font-medium text-stone-900 mb-4">Documentation Not Found</h2>
                    <button onClick={() => navigate('/')} className="px-6 py-3 bg-stone-900 text-white rounded-full">
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const completedPhases = project.phases.filter(p => p.status === 'completed').length;
    const progressPercent = Math.round((completedPhases / project.phases.length) * 100);

    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-5 h-5 text-green-600" />;
            case 'in-progress':
                return <Clock className="w-5 h-5 text-amber-500" />;
            default:
                return <Circle className="w-5 h-5 text-stone-300" />;
        }
    };

    const getStatusBg = (status, isExpanded) => {
        if (isExpanded) {
            switch (status) {
                case 'completed':
                    return 'bg-green-50 border-green-300';
                case 'in-progress':
                    return 'bg-amber-50 border-amber-300';
                default:
                    return 'bg-stone-100 border-stone-300';
            }
        }
        switch (status) {
            case 'completed':
                return 'bg-green-50 border-green-200 hover:border-green-300';
            case 'in-progress':
                return 'bg-amber-50 border-amber-200 hover:border-amber-300';
            default:
                return 'bg-stone-50 border-stone-200 hover:border-stone-300';
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-[#faf8f5] text-stone-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/90 backdrop-blur-md py-4">
                <div className="max-w-5xl mx-auto px-6 lg:px-16 flex justify-between items-center">
                    <button
                        onClick={() => navigate(`/project/${id}`)}
                        className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm">Back to Project</span>
                    </button>
                    <Link to="/" className="text-xl font-display font-medium">
                        FadliArdiansyah
                    </Link>
                </div>
            </nav>

            {/* Header */}
            <div className="pt-32 pb-12 px-6 lg:px-16">
                <div className="max-w-5xl mx-auto">
                    <div className="doc-animate flex items-center gap-3 mb-4">
                        <FileText className="w-5 h-5 text-stone-400" />
                        <span className="text-stone-400 text-sm uppercase tracking-widest">Project Documentation</span>
                    </div>
                    
                    <h1 className="doc-animate text-3xl md:text-4xl lg:text-5xl font-display font-medium text-stone-900 leading-tight mb-4">
                        {project.title}
                    </h1>
                    
                    <p className="doc-animate text-lg text-stone-500 mb-8">
                        {project.detailedDescription}
                    </p>

                    {/* Progress Overview */}
                    <div className="doc-animate bg-white rounded-2xl border border-stone-200 p-6 mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <BarChart3 className="w-5 h-5 text-stone-400" />
                                <span className="font-medium">Project Progress</span>
                            </div>
                            <span className="text-2xl font-display font-medium text-stone-900">
                                {progressPercent}%
                            </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        
                        <div className="flex justify-between mt-3 text-sm text-stone-500">
                            <span>{completedPhases} of {project.phases.length} phases completed</span>
                            <span className="text-amber-600 font-medium">
                                {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                            </span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <p className="doc-animate text-sm text-stone-400 mb-4">
                        💡 Klik pada setiap fase untuk melihat detail dan dokumentasi
                    </p>
                </div>
            </div>

            {/* Phases Timeline */}
            <div className="px-6 lg:px-16 pb-24">
                <div className="max-w-5xl mx-auto">
                    <h2 className="doc-animate text-xl font-display font-medium text-stone-900 mb-8">
                        Project Phases
                    </h2>

                    <div className="space-y-4">
                        {project.phases.map((phase, index) => {
                            const isExpanded = expandedPhase === phase.id;
                            const hasDocuments = phase.documents && phase.documents.length > 0;
                            
                            return (
                                <div 
                                    key={phase.id}
                                    className={`phase-item rounded-xl border transition-all duration-300 overflow-hidden ${getStatusBg(phase.status, isExpanded)}`}
                                >
                                    {/* Phase Header - Clickable */}
                                    <button
                                        onClick={() => togglePhase(phase.id)}
                                        className="w-full p-5 flex items-start gap-4 text-left"
                                    >
                                        {/* Phase Number */}
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center font-mono text-sm text-stone-500">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <h3 className="font-medium text-stone-900">{phase.name}</h3>
                                                    {hasDocuments && (
                                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-600 text-xs rounded-full">
                                                            {phase.documents.length} doc
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {getStatusIcon(phase.status)}
                                                    {isExpanded ? (
                                                        <ChevronUp className="w-4 h-4 text-stone-400" />
                                                    ) : (
                                                        <ChevronDown className="w-4 h-4 text-stone-400" />
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-sm text-stone-500 mt-1">{phase.description}</p>
                                        </div>
                                    </button>

                                    {/* Expanded Content */}
                                    {isExpanded && (
                                        <div className="px-5 pb-5 border-t border-stone-200/50">
                                            <div className="pt-4 pl-14">
                                                {/* Detailed Description */}
                                                {phase.details && (
                                                    <div className="mb-4">
                                                        <p className="text-stone-600 leading-relaxed">
                                                            {phase.details}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Documents Gallery */}
                                                {hasDocuments ? (
                                                    <div className="mt-4">
                                                        <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Dokumentasi</p>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                            {phase.documents.map((doc, docIndex) => (
                                                                <div key={docIndex}>
                                                                    {doc.type === 'image' ? (
                                                                        <button
                                                                            onClick={() => setLightboxImage(doc.url)}
                                                                            className="w-full aspect-video bg-stone-200 rounded-lg overflow-hidden group relative"
                                                                        >
                                                                            <img 
                                                                                src={doc.url} 
                                                                                alt={doc.title}
                                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                                                            />
                                                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                                                                                <Image className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                            </div>
                                                                        </button>
                                                                    ) : doc.type === 'markdown' ? (
                                                                         <button
                                                                            onClick={() => handleMarkdownClick(doc.url)}
                                                                            className="w-full flex items-center gap-2 p-3 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors text-left"
                                                                        >
                                                                            <FileText className="w-5 h-5 text-stone-700" />
                                                                            <span className="text-sm text-stone-700 truncate">{doc.title}</span>
                                                                        </button>
                                                                    ) : (
                                                                        <a
                                                                            href={doc.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="flex items-center gap-2 p-3 bg-white border border-stone-200 rounded-lg hover:border-stone-400 transition-colors"
                                                                        >
                                                                            <FileType className="w-5 h-5 text-red-500" />
                                                                            <span className="text-sm text-stone-700 truncate">{doc.title}</span>
                                                                        </a>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <p className="text-sm text-stone-400 italic mt-2">
                                                        Dokumentasi akan ditambahkan setelah fase ini selesai.
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Legend */}
                    <div className="mt-8 flex flex-wrap gap-6 text-sm text-stone-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span>Completed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-amber-500" />
                            <span>In Progress</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Circle className="w-4 h-4 text-stone-300" />
                            <span>Pending</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="px-6 lg:px-16 py-12 border-t border-stone-200">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    <p className="text-stone-400 text-sm">Last updated: December 2025</p>
                    <Link to={`/project/${id}`} className="text-stone-500 hover:text-stone-900 text-sm transition-colors">
                        View Project Details →
                    </Link>
                </div>
            </footer>

            {/* Image Lightbox */}
            {lightboxImage && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        onClick={() => setLightboxImage(null)}
                        className="fixed top-6 right-6 z-[10000] w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <img
                        src={lightboxImage}
                        alt="Documentation"
                        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
            
            {/* Markdown Modal */}
            {isMarkdownOpen && markdownContent && (
                <div 
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                    onClick={() => setIsMarkdownOpen(false)}
                >
                    <div 
                        className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-stone-200 flex justify-between items-center bg-stone-50">
                            <h3 className="font-display font-medium text-lg text-stone-900">Documentation Reader</h3>
                            <button
                                onClick={() => setIsMarkdownOpen(false)}
                                className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center hover:bg-stone-300 transition-colors"
                            >
                                <X className="w-4 h-4 text-stone-600" />
                            </button>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                           <div className="prose prose-stone max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {markdownContent}
                                </ReactMarkdown>
                           </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDocumentation;
