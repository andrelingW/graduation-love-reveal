
import React, { useState, useEffect } from 'react';
import Letter from '@/components/Letter';
import LetterConfig from '@/components/LetterConfig';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Settings } from "lucide-react";

const Index = () => {
  const [letterConfig, setLetterConfig] = useState({
    message: "Dear Graduate,\n\nCongratulations on your remarkable achievement! As you celebrate this milestone, remember that this is just the beginning of an amazing journey ahead.\n\nYour hard work, dedication, and perseverance have paid off, and I couldn't be prouder of you. May your future be filled with endless opportunities and success.\n\nThis graduation marks the end of one chapter and the beginning of an exciting new one. Embrace the challenges, cherish the memories, and keep reaching for the stars!",
    sender: "Your Secret Admirer",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  });
  
  const [showConfig, setShowConfig] = useState(false);
  
  useEffect(() => {
    // Load saved configuration from localStorage if available
    const savedConfig = localStorage.getItem('letterConfig');
    if (savedConfig) {
      setLetterConfig(JSON.parse(savedConfig));
    }
  }, []);
  
  const handleSaveConfig = (config: { message: string; sender: string; imageUrl: string }) => {
    setLetterConfig(config);
    localStorage.setItem('letterConfig', JSON.stringify(config));
    setShowConfig(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 px-6 flex justify-between items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md">
        <div className="flex items-center">
          <GraduationCap className="mr-2" />
          <h1 className="text-xl font-bold">Graduation Love Note</h1>
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setShowConfig(!showConfig)}
          className="text-white hover:bg-white/20"
        >
          <Settings />
        </Button>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4">
        {showConfig ? (
          <div className="w-full max-w-md">
            <LetterConfig onSave={handleSaveConfig} defaultConfig={letterConfig} />
          </div>
        ) : (
          <Letter 
            message={letterConfig.message} 
            sender={letterConfig.sender} 
            imageUrl={letterConfig.imageUrl}
          />
        )}
      </main>
      
      <footer className="py-3 px-6 text-center text-sm text-gray-500 border-t">
        <p>Created with ❤️ for your graduation | {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
