import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
                className="relative"
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-150 animate-pulse"></div>

                <img
                    src="/logo.png"
                    alt="DocuChat AI Logo"
                    className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                />
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 text-center"
            >
                <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    DocuChat AI
                </h1>
                <p className="text-gray-500 mt-2 tracking-[0.2em] text-xs uppercase font-medium">
                    Intelligence for your documents
                </p>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-[2px] bg-gray-900 mt-12 overflow-hidden rounded-full">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="w-full h-full bg-primary shadow-[0_0_10px_#3b82f6]"
                />
            </div>
        </motion.div>
    );
};

export default SplashScreen;
