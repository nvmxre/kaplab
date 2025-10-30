interface Service {
  id: number
  name: string
  description: string
  price?: string
  image: string
  category?: string
}

export const services: Service[] = [
  {
    id: 1,
    name: "Быстрое восстановление",
    description: "Суперэффективная капельница для быстрого восстановления",
    price: "14 000 р.",
    image: "/service-quick-recovery.png",
    category: "Восстановление",
  },
  {
    id: 2,
    name: "Золушка",
    description: "Капельница красоты для омоложения кожи",
    price: "9 000 р.",
    image: "/service-cinderella.png",
    category: "Красота",
  },
  {
    id: 3,
    name: "Против аллергии",
    description: "Эффективное лечение аллергических реакций",
    price: "9 000 р.",
    image: "/service-anti-allergy.png",
    category: "Здоровье",
  },
  {
    id: 4,
    name: "Детокс",
    description: "Очищение организма от токсинов",
    price: "10 500 р.",
    image: "/service-detox.png",
    category: "Лечение",
  },
]
