
import React, { useState, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { GraduationCap, Mail, Heart } from "lucide-react";
import Confetti from 'react-confetti';
import { useToast } from "@/components/ui/use-toast";
import { useWindowSize } from '@/hooks/use-window-size';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();
  const letterRef = useRef<HTMLDivElement>(null);

  const handleOpenLetter = () => {
    if (!isOpened) {
      setIsOpened(true);
      setShowConfetti(true);
      
      toast({
        title: "Pixel Letter Unlocked! 🎉",
        description: "A pixelated graduation surprise!",
      });
      
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
          className="cursor-pointer transform transition-transform hover:scale-105 active:scale-95 pixel-float"
        >
          <Card className="bg-blue-100 p-10 shadow-xl pixel-border flex flex-col items-center justify-center gap-4 w-full max-w-xs mx-auto">
            <Mail size={80} className="text-blue-600 pixel-text" />
            <GraduationCap size={40} className="text-blue-700 absolute top-4 right-4" />
            <p className="text-center font-medium mt-4 text-lg pixel-text">
              Tap to Reveal the Letter!
            </p>
            <div className="absolute bottom-2 right-2">
              <Heart size={20} className="text-red-400" />
            </div>
          </Card>
        </div>
      ) : (
        <div ref={letterRef} className="w-full opacity-0 reveal-letter-animation">
          <Card className={`p-6 ${isMobile ? 'p-4' : 'p-8'} bg-blue-50 pixel-border min-h-[300px] w-full`}>
            <div className="flex flex-col h-full">
              <div className="flex justify-center mb-6">
                <GraduationCap size={40} className="text-blue-700" />
              </div>
              
              <h2 className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold text-center mb-4 pixel-text`}>Happy Graduation!</h2>
              
              {imageUrl && (
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-md pixel-border">
                  <img 
                    src={imageUrl} 
                    alt="Graduation memory" 
                    className="object-cover w-full h-full pixel-border"
                  />
                </div>
              )}
              
              <div className={`prose p-4 ${isMobile ? 'p-2 text-sm' : 'p-4 text-lg'} text-blue-900 flex-grow pixel-text overflow-auto max-h-[50vh]`}>
                <p className="whitespace-pre-line">
                  {message}
                </p>
              </div>
              
              <div className="mt-auto text-right italic text-blue-800">
                <p>Level Complete,</p>
                <p className="font-semibold">{sender}</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Letter;
