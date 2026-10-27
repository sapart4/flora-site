import { plants } from "@/data/plants";
import { handmadeItems } from "@/data/handmade";
import PlantCard from "@/components/PlantCard";
import HandmadeCard from "@/components/HandmadeCard";
import Header from "@/components/Header";
import RainbowBackground from "@/components/RainbowBackground";
import SectionToggle from "@/components/SectionToggle";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-20 overflow-hidden bg-[#FFFDF9] dark:bg-[#121212] transition-colors duration-300">
      
      <RainbowBackground />

      <div className="relative z-10">
        <Header />

        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-pastel-mint text-ink text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            З любов'ю від бабусі
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 text-ink dark:text-white transition-colors">
            Маленькі речі <br/> для великого затишку
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 transition-colors">
            Оберіть свій мініатюрний сукулент або виріб ручної роботи з нашого каталогу та переходьте на OLX, щоб замовити.
          </p>
        </section>

        {/* Каталог растений (Суккуленти) */}
        <SectionToggle 
          title="Суккуленти" 
          count={plants.length} 
          badgeText="Живі рослини"
          badgeColor="bg-pastel-sky"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </SectionToggle>

        {/* Ручная работа */}
        <SectionToggle 
          title="Ручна робота" 
          count={handmadeItems.length} 
          badgeText="Рукоділля"
          badgeColor="bg-pastel-lavender"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {handmadeItems.map((item: any) => (
              <HandmadeCard key={item.id} item={item} />
            ))}
          </div>
        </SectionToggle>

        <footer className="mt-24 py-10 text-center border-t border-gray-100 dark:border-gray-800 relative z-10 transition-colors">
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">
            © {new Date().getFullYear()} Flora. Зроблено з турботою 🌱
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-xs text-gray-400">Відвідувань:</span>
            {/* Счетчик посещений */}
            <img 
              src="https://hits.sh/flor4.vercel.app.svg?style=flat-square&color=FFB3BA&labelColor=3A3A3A" 
              alt="Visitors" 
              className="h-5 opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>

          <a 
            href="https://t.me/sapart4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-400 transition-colors opacity-60 hover:opacity-100"
          >
            By @Sapart4
          </a>
        </footer>
      </div>
    </main>
  );
}