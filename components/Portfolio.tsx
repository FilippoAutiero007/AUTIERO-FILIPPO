import React from 'react';
import { Project } from '../types';
import { Briefcase, Users, BookOpen } from 'lucide-react';

const pctoExperiences: Project[] = [
  {
    id: 1,
    title: "Convergenza Scuola Lavoro",
    company: "Loccioni",
    category: "Experience",
    period: "Gen 2025 - Set 2025",
    description: "Collaborazione in team per la costruzione di una macchina di test per pacchi batteria auto.",
    details: "Un'esperienza educativa fondamentale che ha permesso di toccare con mano le dinamiche aziendali reali. Il focus è stato sul lavoro di squadra, sulla comprensione dei flussi di produzione e sul testing hardware di componenti critici.",
    technologies: ["Teamwork", "Hardware Testing", "Battery Systems", "Automation"],
    image: "https://github.com/FilippoAutiero007/PORTFOLIO-Filippo-autiero/blob/main/Archivio/loccioni.jpg?raw=true"
  }
];

const civicaProjects: Project[] = [
    {
        id: 3,
        title: "Responsabilità Sociale & Volontariato",
        category: "Civic",
        description: "Animatore presso parrocchia Santa Maria del Cammino.",
        details: "Sviluppo di forti competenze relazionali e organizzative. Gestione di gruppi di giovani, pianificazione di attività ricreative e formative in collaborazione con Padre Gianfranco Ceci.",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Sostenibilità Ambientale",
      category: "Civic",
      description: "Mobilità Elettrica e Impatto Ambientale.",
      details: "Approfondimento tematico collegato all'esperienza in Loccioni. Studio dei sistemi di accumulo, delle energie rinnovabili e dell'impatto della transizione energetica sulla società moderna.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop"
    }
];

const humanitiesProjects: Project[] = [
  {
    id: 5,
    title: "Letteratura e Linguaggio Tecnico",
    category: "Humanities",
    description: "Terminologia tecnica e manualistica in lingua inglese.",
    details: "Analisi della lingua inglese applicata al contesto informatico industriale. Studio di datasheet, documentazione tecnica e comunicazione professionale internazionale.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Storia dell'Innovazione",
    category: "Humanities",
    description: "Evoluzione dei sistemi produttivi.",
    details: "Analisi storica dell'automazione industriale, dalla prima rivoluzione industriale all'Industria 4.0, e il suo impatto socio-economico sul tessuto lavorativo italiano.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop"
  }
];

const SectionHeader: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2.5 bg-apple-blue/10 rounded-xl text-apple-blue shadow-sm">{icon}</div>
      <h2 className="text-3xl md:text-4xl font-bold text-apple-text tracking-tight">{title}</h2>
    </div>
    <p className="text-apple-secondary text-lg max-w-2xl pl-1 md:pl-14 font-light leading-relaxed">
      {subtitle}
    </p>
  </div>
);

const Card: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-[2rem] overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 group cursor-default h-full flex flex-col border border-apple-border/40">
    <div className="h-56 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10" />
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {project.company && (
        <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-apple-text shadow-lg border border-white/20">
          {project.company}
        </div>
      )}
    </div>
    <div className="p-8 flex flex-col flex-1">
      {project.period && <span className="text-xs text-apple-blue font-bold uppercase tracking-widest mb-3 block">{project.period}</span>}
      <h3 className="text-2xl font-bold text-apple-text mb-3 tracking-tight">{project.title}</h3>
      <p className="text-apple-secondary text-[15px] leading-relaxed mb-6 flex-1">
        <span className="font-medium text-apple-text/80 block mb-2">{project.description}</span>
        {project.details}
      </p>
      {project.technologies && (
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-apple-border/30">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-[11px] uppercase font-semibold px-3 py-1.5 bg-apple-gray text-apple-text rounded-lg border border-apple-border/50">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export const Portfolio: React.FC = () => {
  return (
    <div className="bg-[#F5F5F7]">
      {/* PCTO Section */}
      <section id="pcto" className="py-24 px-6 md:px-12 lg:px-24 border-t border-apple-border/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="PCTO" 
            subtitle="Esperienze pratiche in azienda: il ponte tra formazione scolastica e mondo del lavoro."
            icon={<Briefcase size={28}/>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {pctoExperiences.map((exp) => <Card key={exp.id} project={exp} />)}
          </div>
        </div>
      </section>

      {/* Educazione Civica Section */}
      <section id="civica" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-apple-border/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Educazione Civica" 
            subtitle="Cittadinanza attiva: responsabilità sociale, etica e consapevolezza ambientale."
            icon={<Users size={28}/>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {civicaProjects.map((proj) => <Card key={proj.id} project={proj} />)}
          </div>
        </div>
      </section>

      {/* Area Umanistica Section */}
      <section id="umanistica" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F5F5F7] border-t border-apple-border/50">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            title="Area Umanistica" 
            subtitle="Collegamento tra cultura umanistica e realtà tecnologica moderna."
            icon={<BookOpen size={28}/>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {humanitiesProjects.map((proj) => <Card key={proj.id} project={proj} />)}
          </div>
        </div>
      </section>
    </div>
  );
};
