import { plants } from "@/data/plants";
import PlantCard from "@/components/PlantCard";
import Header from "@/components/Header";
import RainbowBackground from "@/components/RainbowBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-20 overflow-hidden">
      
      {/* Фон на самом дне (z-0) */}
      <RainbowBackground />

      {/* Контент (z-10) */}
      <div className="relative z-10">
        <Header />

        <section className="px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-pastel-mint text-ink text-sm font-bold px-4 py-1.5 rounded-full mb-6">
            З любов'ю від бабусі
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6 text-ink">
            Маленькі рослини <br/> для великого затишку
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Оберіть свій мініатюрний сукулент з нашого каталогу та переходьте на OLX, щоб замовити.
          </p>
        </section>

        <section className="px-6 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink">Наш каталог</h2>
            <span className="text-sm text-gray-400">{plants.length} рослини</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

        <footer className="mt-24 py-10 text-center border-t border-gray-100 relative z-10">
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} Flora. Зроблено з турботою 🌱
          </p>
          <a 
            href="https://t.me/sapart4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-gray-300 hover:text-gray-500 transition-colors opacity-60 hover:opacity-100"
          >
            By @Sapart4
          </a>
        </footer>
      </div>
    </main>
  );
}