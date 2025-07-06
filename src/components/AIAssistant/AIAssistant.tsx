// src/components/AIAssistant/AIAssistant.tsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import ChatWindow from './ChatWindow';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed bottom-5 right-5 z-50">
                {/* The Floating Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
                    aria-label="Toggle AI Assistant"
                >
                    <AnimatePresence initial={false}>
                        {isOpen ? (
                            <X size={30} key="close" />
                        ) : (
                            <MessageSquare size={30} key="open" />
                        )}
                    </AnimatePresence>
                </button>
            </div>
            
            {/* The Chat Window */}
            <AnimatePresence>
                {isOpen && <ChatWindow closeChat={() => setIsOpen(false)} />}
            </AnimatePresence>
        </>
    );
};

export default AIAssistant;