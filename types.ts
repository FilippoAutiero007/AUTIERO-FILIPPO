export enum Section {
  HOME = 'home',
  PCTO = 'pcto',
  CIVICA = 'civica',
  UMANISTICA = 'umanistica',
  PROFESSIONALE = 'professionale',
  CONTACT = 'contact'
}

export interface Project {
  id: number;
  title: string;
  company?: string;
  category: 'Experience' | 'Civic' | 'Humanities' | 'Tech';
  period?: string;
  description: string;
  details: string;
  technologies?: string[];
  image: string;
  link?: string;
  pdfUrl?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
