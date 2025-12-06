import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error("API_KEY is missing via process.env.API_KEY");
}

const ai = new GoogleGenAI({ apiKey: apiKey });

const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale del portfolio di Filippo Autiero, uno studente di Informatica dell'Istituto Tecnico Marconi Pieralisi (Classe 5bm, anno 2024/2025).
Il tuo obiettivo è rispondere in modo professionale, conciso e gentile alle domande dei visitatori (Commissione d'esame, datori di lavoro, etc.) riguardanti Filippo.

Informazioni chiave su Filippo:
- Età: 18 anni.
- Competenze Tecniche: C, C#, Python, Modellazione 3D, Hardware Testing.
- Soft Skills: Teamwork, Problem Solving, Adattabilità.
- Esperienza PCTO Principale: Loccioni (Gen-Set 2025), lavoro su macchina di test batterie, teamwork.
- Altre Esperienze: Tecnomac srl (Estate 2024), lavori elettrici e tornio CNC.
- Interessi: Nuove tecnologie, sviluppo software, innovazione digitale.
- Progetti Civici: Volontariato parrocchia, sostenibilità ambientale.

Stile di risposta:
- Usa un tono formale ma accogliente.
- Sii breve (max 3-4 frasi per risposta se possibile).
- Se ti chiedono contatti, suggerisci di guardare la sezione contatti in fondo alla pagina o l'icona della mail.
- Non inventare informazioni non presenti qui.

Se ti chiedono "Chi sei?", rispondi che sei l'assistente AI di Filippo.
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToChat = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result = await chat.sendMessage({ message });
    return result.text || "Mi dispiace, non ho potuto elaborare una risposta.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Si è verificato un errore di connessione. Riprova più tardi.";
  }
};
