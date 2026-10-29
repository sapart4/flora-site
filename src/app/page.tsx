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

        {/* Блок с полезными советами */}
        <section className="px-6 max-w-4xl mx-auto mt-24 mb-16">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ink dark:text-white transition-colors">
              Корисні поради
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Як доглядати за сукулентами, щоб вони радували вас довго
            </p>
          </div>
          
          <div className="space-y-4 text-left">
            <details className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-soft cursor-pointer">
              <summary className="font-semibold text-ink dark:text-white list-none flex justify-between items-center">
                Як поливати суккуленти?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                Поливайте тільки тоді, коли земля повністю висохне. Влітку це може бути раз на тиждень, взимку — раз на місяць. Краще недолити, ніж залити!
              </p>
            </details>

            <details className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-soft cursor-pointer">
              <summary className="font-semibold text-ink dark:text-white list-none flex justify-between items-center">
                Скільки світла потрібно?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                Суккуленти люблять яскраве, але розсіяне світло. Ідеальне місце — підвіконня на південній або східній стороні. Уникайте прямих обідніх сонячних променів влітку, щоб не було опіків.
              </p>
            </details>

            <details className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-soft cursor-pointer">
              <summary className="font-semibold text-ink dark:text-white list-none flex justify-between items-center">
                Який ґрунт використовувати?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                Звичайний ґрунт не підходить, він затримує вологу. Використовуйте спеціальний субстрат для кактусів і суккулентів, або змішайте звичайну землю з піском і дрібним керамзитом.
              </p>
            </details>
          </div>
        </section>

        <footer className="mt-24 py-10 text-center border-t border-gray-100 dark:border-gray-800 relative z-10 transition-colors">
          <p className="text-gray-400 dark:text-gray-500 text-sm mb-2">
            © {new Date().getFullYear()} Flora. Зроблено з турботою 🌱
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-xs text-gray-400">Відвідувань:</span>
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
            By @Sapart4 telegram
          </a>
        </footer>
      </div>
    </main>
  );
}