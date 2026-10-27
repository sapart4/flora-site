import type { Metadata } from "next";
import { Albert_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-albert-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Flora | Маленькі рослини з великою любов'ю",
  description: "Красивий каталог мініатюрних сукулентів. Обирайте рослину та замовляйте на OLX або в Telegram.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ua">
      <body className={`${albertSans.variable} ${playfair.variable} font-sans antialiased bg-[#FFFDF9] text-ink`}>
        {children}
      </body>
    </html>
  );
}