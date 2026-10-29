"use client";

import { X } from "lucide-react";

export default function ImageModal({ image, onClose }: { image: string; onClose: () => void }) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button 
        className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
        onClick={onClose}
      >
        <X size={24} />
      </button>
      <img 
        src={image} 
        alt="Full screen view" 
        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()} 
      />
    </div>
  );
}