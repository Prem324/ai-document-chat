import React from 'react';
import { Bot, User } from 'lucide-react';
import { motion } from 'framer-motion';

const MessageBubble = ({ role, content }) => {
    const isUser = role === 'user';

    return (
        <motion.div
            initial={{ opacity: 0, x: isUser ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
        >
            <div className={`flex gap-4 max-w-[85%] ${isUser ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md ${isUser ? 'bg-primary' : 'bg-gray-800'}`}>
                    {isUser ? <User size={20} /> : <Bot size={20} />}
                </div>
                <div className={`p-4 rounded-2xl shadow-sm ${isUser ? 'bg-primary text-white rounded-tr-none' : 'bg-gray-800/50 border border-white/5 text-gray-200 rounded-tl-none'}`}>
                    <p className="leading-relaxed whitespace-pre-wrap">{content}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default MessageBubble;
