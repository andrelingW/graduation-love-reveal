
import React, { useState, useEffect } from 'react';
import Letter from '@/components/Letter';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [letterConfig, setLetterConfig] = useState({
    message: "Dear Graduate,\n\nCongratulations on your remarkable achievement! As you celebrate this milestone, remember that this is just the beginning of an amazing journey ahead.\n\nYour hard work, dedication, and perseverance have paid off, and I couldn't be prouder of you. May your future be filled with endless opportunities and success.\n\nThis graduation marks the end of one chapter and the beginning of an exciting new one. Embrace the challenges, cherish the memories, and keep reaching for the stars!",
    sender: "Your Secret Admirer",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  });
  
  useEffect(() => {
    // Load saved configuration from localStorage if available
    const savedConfig = localStorage.getItem('letterConfig');
    if (savedConfig) {
      setLetterConfig(JSON.parse(savedConfig));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center p-4">
        <Letter 
          message={letterConfig.message} 
          sender={letterConfig.sender} 
          imageUrl={letterConfig.imageUrl}
        />
      </main>
      
      <footer className="py-3 px-6 text-center text-sm text-gray-500 border-t">
        <p>Created with ❤️ for your graduation | {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;
