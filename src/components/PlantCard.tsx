"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Plant } from "@/data/plants";
import ImageModal from "./ImageModal";

export default function PlantCard({ plant }: { plant: Plant }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
        
        {/* Блок с фото (кликабельный) */}
        <div 
          className={`relative aspect-square ${plant.bgColor} flex flex-col items-center justify-center ${plant.image ? 'cursor-pointer' : ''}`}
          onClick={() => plant.image && setIsModalOpen(true)}
        >
          {plant.image ? (
            <img 
              src={plant.image} 
              alt={plant.name} 
              className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <>
              <span className="text-4xl mb-2 opacity-50">🌱</span>
              <span className="text-sm font-medium text-ink/50 dark:text-gray-400">
                Фото з'явиться скоро
              </span>
            </>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-serif text-xl font-semibold text-ink dark:text-white mb-2">{plant.name}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1">{plant.description}</p>
          
          <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mb-6 bg-gray-50 dark:bg-gray-800 w-fit px-3 py-1.5 rounded-full">
            <span>🌱</span> {plant.care}
          </div>

          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold text-ink dark:text-white">{plant.price} ₴</span>
            <a
              href={plant.olxLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-ink dark:bg-white text-white dark:text-ink px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Send size={16} />
              Замовити
            </a>
          </div>
        </div>
      </div>

      {/* Само модальное окно */}
      {isModalOpen && plant.image && (
        <ImageModal image={plant.image} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}