
import React, { useState, useEffect } from 'react';
import Letter from '@/components/Letter';
import naomiPicture from '@/assets/picture.jpg';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [letterConfig, setLetterConfig] = useState({
    message: "Halo sayangkuh Naomi,\n\nSelamat yah akhirnya kamu jadi sarjana. Aku bangga sama kamu karena jarang ada orang yang bisa kerja full-time sambil kuliah dengan IPK yang bagus sayang. Kamu bisa dibilang fresh graduate tapi pengalaman udah 3 tahun sayang wkwkkw.\n\nJangan berkecil hati yah ayang, yang penting kamu itu hebat sekali. Yah semoga dengan bekal ilmu dan gelar sarjana ini, kamu kedepannya bisa berkembang karirnya yah.\n\nI love you so much sayang dan congrats sayang, you made it!.",
    sender: "Andrew - your lover",
    imageUrl: naomiPicture
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
        <p>Created by your ❤️ Andrew</p>
      </footer>
    </div>
  );
};

export default Index;
