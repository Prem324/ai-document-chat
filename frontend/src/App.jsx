import React, { useState } from 'react';
import Header from './components/Header';
import FileUploader from './components/FileUploader';
import ChatArea from './components/ChatArea';
import { useDocChat } from './hooks/useDocChat';
import SplashScreen from './components/SplashScreen';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function App() {
  const [input, setInput] = useState('');
  const {
    files,
    uploading,
    documentReady,
    messages,
    loading,
    handleFileUpload,
    handleSendMessage,
    resetChat
  } = useDocChat();

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500); // Show splash for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  const onSendMessage = (e) => {
    e.preventDefault();
    handleSendMessage(input, setInput);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="w-full max-w-5xl flex flex-col items-center flex-1"
      >
        <Header documentReady={documentReady} onReset={resetChat} />

        <main className="w-full flex-1 flex flex-col gap-6 relative z-10">
          {!documentReady ? (
            <FileUploader onFileUpload={handleFileUpload} uploading={uploading} />
          ) : (
            <ChatArea
              messages={messages}
              loading={loading}
              input={input}
              setInput={setInput}
              onSendMessage={onSendMessage}
              files={files}
            />
          )}
        </main>
      </motion.div>

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[130px] rounded-full sm:w-[50%] sm:h-[50%]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/5 blur-[130px] rounded-full sm:w-[50%] sm:h-[50%]"></div>
      </div>
    </div>
  );
}

export default App;
