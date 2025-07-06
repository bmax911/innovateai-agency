// src/components/AIAssistant/ChatWindow.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatWindow = ({ closeChat }: { closeChat: () => void }) => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi there! I'm the InnovateAI assistant. How can I help you explore our automation services today?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/.netlify/functions/ai-assistant', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: [...messages, userMessage] }) // Send conversation history
            });

            if (!response.ok) throw new Error("Failed to get response from AI");
            
            const data = await response.json();
            const assistantResponse = data.choices[0].message;
            setMessages(prev => [...prev, assistantResponse]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having a little trouble connecting right now. Please try again in a moment." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-24 right-5 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-card dark:bg-dark-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border dark:border-dark-border"
        >
            {/* Header */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-border dark:border-dark-border flex items-center">
                <Bot className="text-primary mr-3" size={24} />
                <h3 className="font-bold text-foreground dark:text-dark-foreground">AI Sales Assistant</h3>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 text-foreground dark:text-dark-foreground rounded-bl-none'}`}>
                            <p className="text-sm">{msg.content}</p>
                        </div>
                    </div>
                ))}
                 {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="max-w-[80%] p-3 rounded-2xl bg-gray-200 dark:bg-gray-700">
                           <div className="flex items-center space-x-1">
                               <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                               <span className="h-2 w-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                               <span className="h-2 w-2 bg-primary rounded-full animate-bounce"></span>
                           </div>
                        </div>
                    </div>
                 )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border dark:border-dark-border">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask me anything..."
                        className="w-full bg-gray-100 dark:bg-gray-700 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button onClick={handleSend} disabled={isLoading} className="bg-primary text-primary-foreground rounded-full p-3 disabled:bg-primary/50">
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ChatWindow;