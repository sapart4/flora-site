import { Send } from "lucide-react";
import { Plant } from "@/data/plants";

export default function PlantCard({ plant }: { plant: Plant }) {
  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300">
      {/* Вместо картинки — просто цветной блок-заглушка */}
      <div className={`relative aspect-square ${plant.bgColor} flex items-center justify-center`}>
        <span className="text-gray-400 text-sm font-medium opacity-50">
          Фото з'явиться скоро
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-semibold text-ink mb-2">{plant.name}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-1">{plant.description}</p>
        
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-6 bg-gray-50 w-fit px-3 py-1.5 rounded-full">
          <span>🌱</span> {plant.care}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-ink">{plant.price} ₴</span>
          <a
            href={plant.olxLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-ink text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Send size={16} />
            Замовити
          </a>
        </div>
      </div>
    </div>
  );
}