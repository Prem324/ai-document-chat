import React from 'react';
import { Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ documentReady, onReset }) => {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-5xl flex justify-between items-center mb-6 md:mb-12 px-2"
        >
            <div className="flex items-center gap-2 md:gap-3">
                <div className="w-9 h-9 md:w-11 md:h-11 overflow-hidden flex items-center justify-center rounded-xl shadow-lg border border-white/5 bg-gray-900">
                    <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    DocuChat AI
                </h1>
            </div>
            {documentReady && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onReset}
                    className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-red-400 hover:bg-red-400/10 rounded-xl border border-red-400/20 transition-all"
                >
                    <Trash2 size={14} className="md:w-4 md:h-4" />
                    Reset
                </motion.button>
            )}
        </motion.header>
    );
};

export default Header;
