import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Loader2 } from 'lucide-react';
import MessageBubble from './MessageBubble';

const ChatArea = ({ messages, loading, input, setInput, onSendMessage, files }) => {
    const chatEndRef = useRef(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const getPlaceholder = () => {
        if (!files || files.length === 0) return "Ask a question...";
        if (files.length === 1) return `Ask about ${files[0].name}...`;
        return `Ask about ${files.length} documents...`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col glass rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl w-full"
        >
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-6 space-y-4 md:space-y-6 max-h-[calc(100vh-180px)] md:max-h-none">
                <AnimatePresence>
                    {messages.map((msg, index) => (
                        <MessageBubble key={index} role={msg.role} content={msg.content} />
                    ))}
                </AnimatePresence>

                {loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                    >
                        <div className="flex gap-3 md:gap-4 max-w-[90%] md:max-w-[85%]">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0">
                                <Bot size={16} className="md:w-5 md:h-5" />
                            </div>
                            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gray-800/50 border border-white/5 text-gray-200 rounded-tl-none flex items-center gap-2">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
                <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={onSendMessage} className="p-3 md:p-6 bg-white/[0.02] border-t border-white/5">
                <div className="relative group">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={getPlaceholder()}
                        className="w-full bg-gray-950/50 border border-white/10 rounded-xl md:rounded-2xl py-3.5 md:py-4 pl-4 md:pl-6 pr-14 md:pr-16 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-gray-600 text-sm md:text-base"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || loading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 md:p-3 bg-primary rounded-lg md:rounded-xl text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-all active:scale-95 shadow-lg shadow-primary/20"
                    >
                        {loading ? <Loader2 className="animate-spin w-4 h-4 md:w-5 md:h-5" /> : <Send size={18} className="md:w-5 md:h-5" />}
                    </button>
                </div>
                <p className="text-center text-[9px] md:text-[10px] text-gray-600 mt-3 md:mt-4 uppercase tracking-widest font-medium">
                    Intelligence via DeepSeek
                </p>
            </form>
        </motion.div>
    );
};

export default ChatArea;
