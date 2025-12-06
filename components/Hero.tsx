import React from 'react';
import { Section } from '../types';
import { ArrowRight, Code, Target, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-6xl mx-auto pt-24 md:pt-0">
      
      {/* Profile Image */}
      <div className="mb-10 animate-[fadeIn_0.6s_ease-out]">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-soft">
           <img 
             src="https://github.com/FilippoAutiero007/PORTFOLIO-Filippo-autiero/blob/main/profilo.jpg?raw=true" 
             alt="Filippo Autiero" 
             className="w-full h-full object-cover object-[25%_50%]"
             loading="lazy"
           />
        </div>
      </div>

      <div className="space-y-8 max-w-4xl">
        <div className="animate-[fadeIn_0.8s_ease-out]">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-apple-text tracking-tight leading-[1.05]">
            Filippo Autiero <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-purple-500 text-3xl md:text-5xl lg:text-6xl block mt-2">
              Digital Portfolio
            </span>
          </h1>
        </div>

        {/* Dati di Base */}
        <p className="text-lg md:text-xl text-apple-secondary leading-relaxed font-light animate-[fadeIn_1.0s_ease-out] max-w-2xl">
          18 Anni. Studente presso <span className="text-apple-text font-medium">Istituto Tecnico Marconi Pieralisi</span>. <br/>
          Appassionato di tecnologia, sviluppo software e Intelligenza Artificiale.
        </p>

        {/* Passioni & Obiettivi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-[fadeIn_1.2s_ease-out]">
          <div className="bg-white p-6 rounded-3xl shadow-soft border border-apple-border/40 hover:border-apple-blue/30 transition-colors group">
            <div className="flex items-center gap-3 mb-3 text-apple-blue">
              <div className="p-2 bg-apple-blue/10 rounded-lg group-hover:bg-apple-blue group-hover:text-white transition-all">
                  <Code size={24} />
              </div>
              <h3 className="font-semibold text-apple-text text-lg">Passioni</h3>
            </div>
            <p className="text-sm text-apple-secondary leading-relaxed">
              Programmazione, modellazione 3D e nuove tecnologie. Curiosità insaziabile verso l'innovazione digitale e l'automazione.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-soft border border-apple-border/40 hover:border-purple-500/30 transition-colors group">
            <div className="flex items-center gap-3 mb-3 text-purple-600">
              <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Target size={24} />
              </div>
              <h3 className="font-semibold text-apple-text text-lg">Obiettivi Futuri</h3>
            </div>
            <p className="text-sm text-apple-secondary leading-relaxed">
              Consolidamento delle competenze tecniche e aspirazione a contribuire allo sviluppo di sistemi software complessi in ambito aziendale.
            </p>
          </div>
        </div>

        <div className="pt-4 animate-[fadeIn_1.4s_ease-out] flex flex-wrap gap-4">
          <button 
            onClick={() => scrollToSection(Section.PCTO)}
            className="group flex items-center gap-2 px-8 py-4 bg-apple-text text-white rounded-full font-medium hover:bg-black transition-all active:scale-95 shadow-lg shadow-black/10"
          >
            Esplora il Percorso <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};