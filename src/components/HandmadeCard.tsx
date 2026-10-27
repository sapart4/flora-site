import { Send } from "lucide-react";
import { HandmadeItem } from "@/data/handmade";

export default function HandmadeCard({ item }: { item: HandmadeItem }) {
  return (
    <div className="group flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300">
      <div className={`relative aspect-square ${item.bgColor} flex flex-col items-center justify-center`}>
        <span className="text-4xl mb-2 opacity-50">✨</span>
        <span className="text-sm font-medium text-ink/50 dark:text-gray-400">
          Фото з'явиться скоро
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif text-xl font-semibold text-ink dark:text-white mb-2">{item.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-1">{item.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-gray-800">
          <span className="text-2xl font-bold text-ink dark:text-white">{item.price} ₴</span>
          <a
            href={item.olxLink}
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
  );
}