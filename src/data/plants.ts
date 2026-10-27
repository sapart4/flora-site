export type Plant = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  care: string;
  badge?: "Хіт" | "Новинка" | "Мало";
  bgColor: string; 
  olxLink: string;
};

export const plants: Plant[] = [
  {
    id: "plant-1",
    name: "Суккулент",
    price: 50,
    image: "", 
    description: "Опис з'явиться скоро",
    care: "Догляд з'явиться скоро",
    bgColor: "bg-pastel-sky",
    olxLink: "https://www.olx.ua/d/obyavlenie/sukulentnye-rasteniya-ID11y41Z.html", 
  },
  {
    id: "plant-2",
    name: "Суккулент",
    price: 50,
    image: "",
    description: "Опис з'явиться скоро",
    care: "Догляд з'явиться скоро",
    bgColor: "bg-pastel-mint",
    olxLink: "https://www.olx.ua/d/obyavlenie/sukulentnye-rasteniya-ID11y41Z.html",
  },
  {
    id: "plant-3",
    name: "Суккулент",
    price: 50,
    image: "",
    description: "Опис з'явиться скоро",
    care: "Догляд з'явиться скоро",
    bgColor: "bg-pastel-peach",
    olxLink: "https://www.olx.ua/d/obyavlenie/sukulentnye-rasteniya-ID11y41Z.html",
  },
  {
    id: "plant-4",
    name: "Суккулент",
    price: 50,
    image: "",
    description: "Опис з'явиться скоро",
    care: "Догляд з'явиться скоро",
    bgColor: "bg-pastel-lemon",
    olxLink: "https://www.olx.ua/d/obyavlenie/sukulentnye-rasteniya-ID11y41Z.html",
  }
];