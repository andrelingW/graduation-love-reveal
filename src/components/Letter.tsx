
import React, { useState, useRef, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { GraduationCap, Mail, Heart, Image as ImageIcon } from "lucide-react";
import Confetti from 'react-confetti';
import { useToast } from "@/components/ui/use-toast";
import { useWindowSize } from '@/hooks/use-window-size';

interface LetterProps {
  message: string;
  sender: string;
  imageUrl?: string;
}

const Letter = ({ message, sender, imageUrl }: LetterProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  const { width, height } = useWindowSize();
  const letterRef = useRef<HTMLDivElement>(null);

  const handleOpenLetter = () => {
    if (!isOpened) {
      setIsOpened(true);
      setShowConfetti(true);
      
      toast({
        title: "Opening your special message...",
        description: "A graduation surprise awaits you!",
      });
      
      // Hide confetti after 5 seconds
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto relative">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />}
      
      {!isOpened ? (
        <div 
          onClick={handleOpenLetter}
          className="cursor-pointer transform transition-transform hover:scale-105 active:scale-95"
        >
          <Card className="bg-gradient-to-br from-purple-100 to-blue-100 p-10 shadow-xl border-2 border-purple-200 flex flex-col items-center justify-center gap-4 w-full max-w-xs mx-auto float-animation">
            <Mail size={80} className="text-primary pulse-animation" />
            <GraduationCap size={40} className="text-blue-500 absolute top-4 right-4" />
            <p className="text-center font-medium mt-4 text-lg text-gray-700">
              Tap to open your graduation message
            </p>
            <div className="absolute bottom-2 right-2">
              <Heart size={20} className="text-red-400" />
            </div>
          </Card>
        </div>
      ) : (
        <div ref={letterRef} className="w-full opacity-0 reveal-letter-animation">
          <Card className="p-8 bg-white shadow-xl border-purple-200 border-2 min-h-[300px] w-full">
            <div className="flex flex-col h-full">
              <div className="flex justify-center mb-6">
                <GraduationCap size={40} className="text-primary" />
              </div>
              
              <h2 className="text-3xl font-bold text-center mb-4 text-gradient">Congratulations, Graduate!</h2>
              
              {imageUrl && (
                <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
                  <img 
                    src={imageUrl} 
                    alt="Graduation memory" 
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              
              <div className="prose p-4 text-gray-700 flex-grow">
                <p className="whitespace-pre-line text-lg">
                  {message}
                </p>
              </div>
              
              <div className="mt-auto text-right italic text-gray-600">
                <p>With love,</p>
                <p className="font-semibold text-primary">{sender}</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Letter;
