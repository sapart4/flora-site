export default function Header() {
  return (
    <header className="py-6 px-6 max-w-6xl mx-auto flex justify-center items-center">
      {/* Контейнер логотипа с эффектом стекла и черным фоном */}
      <div className="bg-black/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 cursor-default">
        <span className="font-serif text-2xl font-bold tracking-wider text-white">
          Flora<span className="text-pastel-pink">.</span>
        </span>
      </div>
    </header>
  );
}