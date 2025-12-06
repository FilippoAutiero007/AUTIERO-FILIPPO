import React, { useState } from 'react';
import { Home, Briefcase, Users, BookOpen, Cpu, Menu, X, Mail } from 'lucide-react';
import { Section } from '../types';

interface NavigationProps {
    activeSection: Section;
    scrollToSection: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { id: Section.HOME, label: 'Presentazione', icon: <Home size={20} /> },
        { id: Section.PCTO, label: 'PCTO', icon: <Briefcase size={20} /> },
        { id: Section.CIVICA, label: 'Ed. Civica', icon: <Users size={20} /> },
        { id: Section.UMANISTICA, label: 'Area Umanistica', icon: <BookOpen size={20} /> },
        { id: Section.PROFESSIONALE, label: 'Area Professionale', icon: <Cpu size={20} /> },
        { id: Section.CONTACT, label: 'Contatti', icon: <Mail size={20} /> },
    ];

    const handleNavClick = (section: Section) => {
        scrollToSection(section);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-white/80 backdrop-blur-xl border-r border-apple-border flex-col justify-between py-12 px-6 z-40">
                <div>
                    <div className="mb-12 pl-2">
                        <h1 className="text-xl font-bold tracking-tight text-apple-text">Filippo Autiero</h1>
                        <p className="text-sm text-apple-secondary">Portfolio Studente</p>
                    </div>

                    <div className="space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${activeSection === link.id
                                        ? 'bg-apple-blue text-white shadow-soft'
                                        : 'text-apple-secondary hover:bg-apple-gray hover:text-apple-text'
                                    }`}
                            >
                                <div className={`${activeSection === link.id ? 'text-white' : 'text-apple-secondary group-hover:text-apple-text'}`}>
                                    {link.icon}
                                </div>
                                <span>{link.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pl-2 border-t border-apple-border/50 pt-6">
                    <p className="text-xs text-apple-secondary font-medium uppercase tracking-wide">Esame di Stato 2025</p>
                    <p className="text-[10px] text-apple-secondary mt-1">Istituto Marconi Pieralisi</p>
                </div>
            </nav>

            {/* Mobile Header & Overlay */}
            <div className="lg:hidden fixed top-0 left-0 w-full z-[60]">
                <div className="glass-panel px-6 py-4 flex justify-between items-center shadow-sm border-b border-apple-border/50">
                    <span className="font-semibold text-lg text-apple-text tracking-tight">FA.</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-apple-text p-2 hover:bg-black/5 rounded-lg transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full h-[calc(100vh-64px)] bg-white/95 backdrop-blur-xl border-b border-apple-border shadow-hover py-4 px-6 flex flex-col space-y-2 animate-[fadeIn_0.2s_ease-out] overflow-y-auto">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`flex items-center space-x-4 px-4 py-4 rounded-xl text-base font-medium transition-colors ${activeSection === link.id
                                        ? 'bg-apple-gray text-apple-blue'
                                        : 'text-apple-text'
                                    }`}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};
