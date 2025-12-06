import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, ArrowUp, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { createChatSession, sendMessageToChat } from '../services/geminiService';
import { Chat } from '@google/genai';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "Ciao! Sono l'assistente digitale di Filippo. Chiedimi pure delle sue esperienze in Loccioni o delle sue competenze informatiche.", 
      timestamp: new Date() 
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chat session on mount
    try {
      chatSessionRef.current = createChatSession();
    } catch (e) {
      console.error("Failed to init chat session", e);
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    if (!chatSessionRef.current) {
       // Retry init if failed previously
       try {
         chatSessionRef.current = createChatSession();
       } catch(e) {
         setMessages(prev => [...prev, { role: 'model', text: "Errore di connessione al servizio AI.", timestamp: new Date() }]);
         return;
       }
    }

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToChat(chatSessionRef.current, userMsg.text);
      const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Mi dispiace, si è verificato un errore momentaneo.", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderMessageContent = (text: string) => {
    // Simple regex to catch markdown links [text](url)
    const parts = text.split(/(\[[^\]]+\]\(https?:\/\/[^\)]+\))/g);
    
    return parts.map((part, index) => {
      const match = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\)]+)\)$/);
      if (match) {
        return (
          <a
            key={index}
            href={match[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-white/80"
          >
            {match[1]}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-apple-secondary text-white rotate-90' : 'bg-black text-white'
        }`}
        aria-label="Toggle Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      <div
        className={`fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-[380px] h-[550px] bg-white/80 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl z-40 flex flex-col transition-all duration-500 origin-bottom-right overflow-hidden ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-apple-border/30 bg-white/40 backdrop-blur flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-1.5 rounded-lg text-white">
                <Sparkles size={16} fill="currentColor" />
            </div>
            <div>
                <span className="text-sm font-bold text-apple-text block leading-none">Filippo Intelligence</span>
                <span className="text-[10px] text-apple-secondary uppercase tracking-wide">AI Assistant</span>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F5F7]/50 scroll-smooth">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-5 py-3 text-[15px] leading-relaxed shadow-sm ${
                  msg.role === 'user'
                    ? 'bg-apple-blue text-white rounded-2xl rounded-tr-sm'
                    : 'bg-white text-apple-text rounded-2xl rounded-tl-sm border border-apple-border/30'
                }`}
              >
                {msg.role === 'user' ? msg.text : renderMessageContent(msg.text)}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-1.5 items-center border border-apple-border/30">
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-4 bg-white/60 backdrop-blur border-t border-apple-border/30">
          <div className="relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Chiedi qualcosa..."
              className="w-full bg-[#F2F2F7] border-none rounded-full pl-5 pr-12 py-3 text-sm focus:ring-2 focus:ring-apple-blue/20 outline-none text-apple-text placeholder-apple-secondary transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="absolute right-1.5 top-1.5 p-1.5 bg-apple-blue rounded-full text-white disabled:opacity-0 disabled:scale-75 transition-all hover:bg-blue-600 active:scale-95"
            >
              <ArrowUp size={20} strokeWidth={2.5} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
