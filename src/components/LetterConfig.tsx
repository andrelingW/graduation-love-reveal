
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface LetterConfigProps {
  onSave: (config: { message: string; sender: string; imageUrl: string }) => void;
  defaultConfig?: {
    message: string;
    sender: string;
    imageUrl: string;
  };
}

const LetterConfig = ({ onSave, defaultConfig }: LetterConfigProps) => {
  const [message, setMessage] = useState(defaultConfig?.message || "Dear Graduate,\n\nCongratulations on your remarkable achievement! As you celebrate this milestone, remember that this is just the beginning of an amazing journey ahead.\n\nYour hard work, dedication, and perseverance have paid off, and I couldn't be prouder of you. May your future be filled with endless opportunities and success.\n\nThis graduation marks the end of one chapter and the beginning of an exciting new one. Embrace the challenges, cherish the memories, and keep reaching for the stars!");
  const [sender, setSender] = useState(defaultConfig?.sender || "Your Secret Admirer");
  const [imageUrl, setImageUrl] = useState(defaultConfig?.imageUrl || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80");
  
  const { toast } = useToast();

  const handleSave = () => {
    onSave({
      message,
      sender,
      imageUrl
    });
    
    toast({
      title: "Configuration saved!",
      description: "Your graduation message has been updated.",
    });
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-bold">Customize Your Graduation Message</h2>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <Textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your graduation message here..." 
          className="min-h-[200px]"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">From</label>
        <Input 
          value={sender} 
          onChange={(e) => setSender(e.target.value)}
          placeholder="Your name" 
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium flex items-center gap-2">
          <ImageIcon size={16} />
          Image URL
        </label>
        <Input 
          value={imageUrl} 
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL" 
        />
        {imageUrl && (
          <div className="relative w-full h-40 mt-2 overflow-hidden rounded-md border">
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </div>
        )}
      </div>
      
      <Button onClick={handleSave} className="w-full">
        <Save className="mr-2" size={16} />
        Save Configuration
      </Button>
    </div>
  );
};

export default LetterConfig;
