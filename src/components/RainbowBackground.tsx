"use client";

import { useState } from "react";

type Heart = {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
};

export default function RainbowBackground() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  // Прикольчик при клике
  const handleClick = (e: React.MouseEvent) => {
    const newHeart = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      emoji: Math.random() > 0.5 ? "🌸" : "🌿", 
      size: Math.random() * 20 + 20, 
    };

    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 1500);
  };

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-auto cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      {/* Статичная радуга по бокам */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-pastel-pink/40 via-pastel-peach/30 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pastel-sky/40 via-pastel-lavender/30 to-transparent pointer-events-none"></div>

      {/* Эмодзи */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-up pointer-events-none select-none"
          style={{
            left: heart.x,
            top: heart.y,
            fontSize: `${heart.size}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {heart.emoji}
        </span>
      ))}
    </div>
  );
}