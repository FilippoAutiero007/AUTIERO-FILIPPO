import React from 'react';
import { Code, Box, Users, Cpu, FileText, Download, Briefcase, ExternalLink } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="professionale" className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-apple-border">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-16">
           <div className="flex items-center gap-3 mb-3">
             <div className="p-2.5 bg-apple-blue/10 rounded-xl text-apple-blue"><Cpu size={28}/></div>
             <h2 className="text-3xl md:text-4xl font-bold text-apple-text tracking-tight">Area Professionale</h2>
           </div>
           <p className="text-apple-secondary text-lg max-w-2xl pl-1 md:pl-14 font-light">
             Competenze tecniche, strumenti tecnologici e documentazione ufficiale del percorso.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Skills Column */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-apple-secondary mb-8">Competenze Tecniche</h3>
            
            <div className="grid grid-cols-1 gap-5">
                <div className="p-6 rounded-3xl bg-apple-gray border border-apple-border/50 flex items-center gap-5 hover:bg-white hover:shadow-soft transition-all duration-300 group">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-apple-text group-hover:text-apple-blue transition-colors"><Code size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-apple-text mb-1">Linguaggi di Programmazione</h4>
                    <div className="flex gap-2 mt-1">
                        <span className="px-2 py-0.5 bg-white rounded text-xs font-medium text-apple-secondary border border-apple-border">C</span>
                        <span className="px-2 py-0.5 bg-white rounded text-xs font-medium text-apple-secondary border border-apple-border">C#</span>
                        <span className="px-2 py-0.5 bg-white rounded text-xs font-medium text-apple-secondary border border-apple-border">Python</span>
                    </div>
                  </div>
                </div>

                <div className="group p-6 rounded-3xl bg-apple-gray border border-apple-border/50 flex items-center justify-between gap-4 transition-all hover:bg-white hover:shadow-soft duration-300">
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-white rounded-2xl shadow-sm text-apple-text group-hover:text-apple-blue transition-colors"><Box size={24} /></div>
                    <div>
                      <h4 className="text-lg font-bold text-apple-text mb-1">Modellazione 3D</h4>
                      <p className="text-sm text-apple-secondary">Design e visualizzazione spaziale per stampa 3D.</p>
                    </div>
                  </div>
                  <a 
                    href="https://github.com/FilippoAutiero007/Pezzi-Stampati-in-3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-apple-secondary hover:text-apple-blue hover:bg-apple-blue/10 rounded-full transition-all"
                    title="Vedi su GitHub"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="p-6 rounded-3xl bg-apple-gray border border-apple-border/50 flex items-center gap-5 hover:bg-white hover:shadow-soft transition-all duration-300 group">
                  <div className="p-3 bg-white rounded-2xl shadow-sm text-apple-text group-hover:text-apple-blue transition-colors"><Users size={24} /></div>
                  <div>
                    <h4 className="text-lg font-bold text-apple-text mb-1">Soft Skills</h4>
                    <p className="text-sm text-apple-secondary">Lavoro di squadra, Adattabilità, Problem Solving in contesti dinamici.</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Documentation / Projects Column */}
          <div className="flex flex-col h-full">
             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-apple-secondary mb-8">Esperienze & Documenti</h3>
             
             <div className="space-y-6 flex-1">

                {/* Internship Card */}
                <div className="group p-6 rounded-3xl bg-white border border-apple-border hover:border-apple-blue/40 transition-all shadow-sm hover:shadow-hover flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                   <div className="flex gap-4 items-start">
                       <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-apple-blue shrink-0">
                         <Briefcase size={24} />
                       </div>
                       <div>
                         <h4 className="text-lg font-bold text-apple-text">Tirocinio Estivo - Tecnomac.srl</h4>
                         <span className="text-xs text-apple-secondary font-bold uppercase tracking-wide block mb-1">Estate 2024</span>
                         <p className="text-sm text-apple-secondary max-w-xs leading-relaxed">
                            Lavori elettrici e osservazione processi su tornio CNC. Assistenza alla produzione.
                         </p>
                       </div>
                   </div>
                   <a 
                     href="https://www.teknomac.it/it/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xs font-bold text-apple-blue bg-apple-blue/5 hover:bg-apple-blue/10 px-4 py-2 rounded-full transition-all self-start sm:self-center"
                   >
                     VISITA SITO
                   </a>
                </div>

                {/* Updated Relazione Card to match other cards style */}
                <div className="group p-6 rounded-3xl bg-white border border-apple-border hover:border-apple-blue/40 transition-all shadow-sm hover:shadow-hover flex flex-col sm:flex-row items-center justify-between mt-auto gap-4">
                   <div className="flex gap-4 items-center w-full sm:w-auto">
                       <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl text-apple-blue shrink-0">
                         <FileText size={24} />
                       </div>
                       <div>
                         <h4 className="text-lg font-bold text-apple-text">Relazione PCTO Loccioni</h4>
                         <p className="text-sm text-apple-secondary mt-0.5">PDF Document - Scaricabile</p>
                       </div>
                   </div>
                   
                   <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                       <a 
                         href="https://www.canva.com/design/DAG3Gm-fhd8/UwW07ecqLofHUU0IWiRliA/view?utm_content=DAG3Gm-fhd8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7a8bc164c9"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="text-xs font-bold text-apple-blue bg-apple-blue/5 hover:bg-apple-blue/10 px-4 py-2 rounded-full transition-all"
                       >
                         PREVIEW
                       </a>
                       
                       <a 
                         href="https://github.com/FilippoAutiero007/PORTFOLIO-Filippo-autiero/raw/main/Archivio/LOCCIONI%20.pdf" 
                         target="_blank"
                         rel="noopener noreferrer"
                         className="p-2.5 text-apple-secondary hover:text-apple-blue hover:bg-apple-blue/10 rounded-full transition-all"
                         title="Scarica PDF"
                       >
                         <Download size={20} />
                       </a>
                   </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};