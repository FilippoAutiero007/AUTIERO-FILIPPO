import React from 'react';
import { Mail, Github, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F5F5F7] text-apple-secondary py-20 border-t border-apple-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-apple-text tracking-tight mb-2">Filippo Autiero</h3>
            <p className="text-sm font-light text-apple-secondary leading-relaxed">
              Classe 5bm - Informatica<br/>
              Istituto Tecnico Marconi Pieralisi<br/>
              Jesi (AN)
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            {/* Email - styled as Mail App */}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=filippoautiero07@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center"
              aria-label="Invia Email"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center border border-apple-border/50 group-hover:scale-110 group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-300">
                <Mail size={32} className="text-gray-400 group-hover:text-red-500 transition-colors" />
              </div>
              <span className="absolute -bottom-8 text-[11px] font-medium text-apple-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">Gmail</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/FilippoAutiero007" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative flex flex-col items-center"
              aria-label="GitHub Profile"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center border border-apple-border/50 group-hover:scale-110 group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-300">
                <Github size={32} className="text-gray-400 group-hover:text-[#181717] transition-colors" />
              </div>
              <span className="absolute -bottom-8 text-[11px] font-medium text-apple-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">GitHub</span>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/filippo_autiero_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative flex flex-col items-center"
              aria-label="Instagram Profile"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-soft flex items-center justify-center border border-apple-border/50 group-hover:scale-110 group-hover:shadow-hover group-hover:-translate-y-1 transition-all duration-300">
                <Instagram size={32} className="text-gray-400 group-hover:text-[#E4405F] transition-colors" />
              </div>
              <span className="absolute -bottom-8 text-[11px] font-medium text-apple-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">Instagram</span>
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-apple-border/50 text-xs text-apple-secondary/60 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
           <p>Copyright © 2025 Filippo Autiero. Tutti i diritti riservati.</p>
           <p>Designed with Apple Design Principles.</p>
        </div>
      </div>
    </footer>
  );
};
