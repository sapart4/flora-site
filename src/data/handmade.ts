export type HandmadeItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  bgColor: string;
  olxLink: string;
};

export const handmadeItems: HandmadeItem[] = [
  {
    id: "hm-1",
    name: "Виріб 1",
    price: 150,
    image: "",
    description: "Опис з'явиться скоро",
    bgColor: "bg-pastel-lavender",
    olxLink: "https://www.olx.ua/",
  },
  {
    id: "hm-2",
    name: "Виріб 2",
    price: 200,
    image: "",
    description: "Опис з'явиться скоро",
    bgColor: "bg-pastel-pink",
    olxLink: "https://www.olx.ua/",
  },
  {
    id: "hm-3",
    name: "Виріб 3",
    price: 250,
    image: "",
    description: "Опис з'явиться скоро",
    bgColor: "bg-pastel-peach",
    olxLink: "https://www.olx.ua/",
  }
];