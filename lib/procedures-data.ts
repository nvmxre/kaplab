export interface Procedure {
  id: string
  name: string
  description: string
  price?: string
  duration?: string
  image?: string
  category: string
  benefits: string[]
}

const procedures: Procedure[] = [
  {
    id: "botox-injections",
    name: "Инъекции ботокса",
    description: "Коррекция мимических морщин с помощью ботулотоксина",
    price: "от 8 000 ₽",
    duration: "30 мин",
    image: "/service-dermatology.png",
    category: "cosmetology",
    benefits: ["Разглаживание морщин", "Естественный результат", "Быстрая процедура"],
  },
  {
    id: "hyaluronic-fillers",
    name: "Филлеры гиалуроновой кислоты",
    description: "Восстановление объема и коррекция контуров лица",
    price: "от 15 000 ₽",
    duration: "45 мин",
    image: "/service-womens-health.png",
    category: "cosmetology",
    benefits: ["Увеличение объема", "Коррекция контуров", "Длительный эффект"],
  },
  {
    id: "chemical-peeling",
    name: "Химический пилинг",
    description: "Обновление кожи с помощью кислотных составов",
    price: "от 5 000 ₽",
    duration: "60 мин",
    image: "/service-nutrition.png",
    category: "cosmetology",
    benefits: ["Обновление кожи", "Улучшение текстуры", "Сияющий цвет лица"],
  },
  {
    id: "laser-hair-removal",
    name: "Лазерная эпиляция",
    description: "Удаление нежелательных волос лазером",
    price: "от 3 000 ₽",
    duration: "30-90 мин",
    image: "/service-psychology.png",
    category: "cosmetology",
    benefits: ["Долговременный эффект", "Безболезненность", "Гладкая кожа"],
  },
  {
    id: "rf-lifting",
    name: "RF-лифтинг",
    description: "Подтяжка кожи радиочастотными волнами",
    price: "от 12 000 ₽",
    duration: "60 мин",
    image: "/service-pediatrics.png",
    category: "hardware",
    benefits: ["Подтяжка кожи", "Стимуляция коллагена", "Без операции"],
  },
  {
    id: "mesotherapy",
    name: "Мезотерапия",
    description: "Инъекционное введение витаминных коктейлей",
    price: "от 6 000 ₽",
    duration: "45 мин",
    image: "/service-lab-tests.png",
    category: "injections",
    benefits: ["Питание кожи", "Увлажнение", "Омоложение"],
  },
  {
    id: "plasma-lifting",
    name: "Плазмолифтинг",
    description: "Омоложение собственной плазмой крови",
    price: "от 8 000 ₽",
    duration: "60 мин",
    image: "/service-cardiology.png",
    category: "injections",
    benefits: ["Естественное омоложение", "Стимуляция регенерации", "Безопасность"],
  },
  {
    id: "cryolipolysis",
    name: "Криолиполиз",
    description: "Разрушение жировых клеток холодом",
    price: "от 20 000 ₽",
    duration: "60 мин",
    image: "/service-endocrinology.png",
    category: "body-contouring",
    benefits: ["Уменьшение жира", "Без операции", "Длительный результат"],
  },
  {
    id: "lymphatic-drainage",
    name: "Лимфодренажный массаж",
    description: "Улучшение лимфотока и снятие отеков",
    price: "от 4 000 ₽",
    duration: "60 мин",
    image: "/service-neurology.png",
    category: "massage",
    benefits: ["Снятие отеков", "Детоксикация", "Улучшение самочувствия"],
  },
  {
    id: "ultrasound-therapy",
    name: "Ультразвуковая терапия",
    description: "Лечебное воздействие ультразвуком",
    price: "от 3 500 ₽",
    duration: "30 мин",
    image: "/clinic-interior.png",
    category: "therapy",
    benefits: ["Противовоспалительный эффект", "Улучшение кровообращения", "Безболезненность"],
  },
]

export function getProcedures(): Procedure[] {
  return procedures
}

export function getProcedureById(id: string): Procedure | undefined {
  return procedures.find((procedure) => procedure.id === id)
}

export function getProceduresByCategory(category: string): Procedure[] {
  return procedures.filter((procedure) => procedure.category === category)
}

export function getPopularProcedures(limit = 6): Procedure[] {
  return procedures.slice(0, limit)
}
