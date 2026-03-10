import React from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FileUploader = ({ onFileUpload, uploading }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col items-center justify-center"
        >
            <div className="glass p-12 rounded-3xl w-full max-w-lg text-center flex flex-col items-center gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                    <Upload className="text-primary" size={40} />
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Upload your PDF(s)</h2>
                    <p className="text-gray-400">Ask questions, summarize context, and extract insights from multiple documents at once.</p>
                </div>

                <label className="w-full cursor-pointer">
                    <input
                        type="file"
                        accept=".pdf"
                        multiple
                        className="hidden"
                        onChange={onFileUpload}
                        disabled={uploading}
                    />
                    <div className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${uploading ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20 active:scale-[0.98]'}`}>
                        {uploading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Processing Documents...
                            </>
                        ) : (
                            <>
                                <Upload size={20} />
                                Select PDF Files
                            </>
                        )}
                    </div>
                </label>
                <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
            </div>
        </motion.div>
    );
};

export default FileUploader;
