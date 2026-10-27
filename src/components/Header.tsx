import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="py-6 px-6 max-w-6xl mx-auto flex justify-between items-center relative z-20">
      <div className="font-serif text-2xl font-bold tracking-tight text-ink dark:text-white">
        Flora<span className="text-pastel-pink">.</span>
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}