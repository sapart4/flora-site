"use client";

import { useState, ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface SectionToggleProps {
  title: string;
  count?: number;
  badgeText?: string;
  badgeColor?: string;
  children: ReactNode;
}

export default function SectionToggle({ title, count, badgeText, badgeColor, children }: SectionToggleProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="px-6 max-w-6xl mx-auto mb-16 text-center">
      {/* Плашка над заголовком */}
      {badgeText && (
        <span className={`inline-block ${badgeColor} text-ink text-sm font-bold px-4 py-1.5 rounded-full mb-6`}>
          {badgeText}
        </span>
      )}

      {/* Кликабельный заголовок */}
      <div 
        className="flex flex-col md:flex-row items-center justify-between mb-8 mt-4 cursor-pointer group select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink dark:text-white group-hover:text-pastel-pink dark:group-hover:text-pastel-pink transition-colors">
            {title}
          </h2>
          <div className="text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 p-1 rounded-full group-hover:bg-pastel-pink/20 transition-colors">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
        
        {count !== undefined && (
          <span className="text-sm text-gray-400 mt-2 md:mt-0 font-medium">
            {count} шт.
          </span>
        )}
      </div>

      {/* Сворачиваемый контент */}
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </section>
  );
}