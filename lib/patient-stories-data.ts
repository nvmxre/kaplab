export interface PatientStory {
  id: number
  title: string
  description: string
  image: string
  duration: string
  category: string
  patientName: string
  age: number
  problem: string
  solution: string
  result: string
}

const patientStories: PatientStory[] = [
  {
    id: 1,
    title: "Как я вылечила хроническую мигрень",
    description: "История о том, как комплексное лечение помогло избавиться от постоянных головных болей",
    image: "/patient-story-1.png",
    duration: "5:30",
    category: "Неврология",
    patientName: "Анна К.",
    age: 34,
    problem: "Хронические мигрени в течение 8 лет",
    solution: "Комплексная терапия с капельницами и консультациями невролога",
    result: "Полное избавление от мигреней за 3 месяца",
  },
  {
    id: 2,
    title: "Мой путь к здоровому образу жизни",
    description: "Как правильное питание и медицинское сопровождение изменили мою жизнь",
    image: "/patient-story-2.png",
    duration: "7:15",
    category: "Диетология",
    patientName: "Михаил С.",
    age: 42,
    problem: "Избыточный вес и проблемы с метаболизмом",
    solution: "Индивидуальная программа питания и витаминные капельницы",
    result: "Снижение веса на 25 кг за 6 месяцев",
  },
  {
    id: 3,
    title: "Онлайн консультация спасла меня",
    description: "Как дистанционная консультация помогла вовремя выявить серьезное заболевание",
    image: "/patient-story-3.png",
    duration: "4:45",
    category: "Кардиология",
    patientName: "Елена В.",
    age: 56,
    problem: "Боли в груди и одышка",
    solution: "Срочная онлайн консультация и направление на обследование",
    result: "Своевременное выявление и лечение сердечной патологии",
  },
  {
    id: 4,
    title: "Результаты лечения за 30 дней",
    description: "Быстрое восстановление после болезни благодаря интенсивной терапии",
    image: "/patient-story-4.png",
    duration: "6:20",
    category: "Иммунология",
    patientName: "Дмитрий Л.",
    age: 38,
    problem: "Хроническая усталость и снижение иммунитета",
    solution: "Курс иммуномодулирующих капельниц",
    result: "Полное восстановление энергии и укрепление иммунитета",
  },
  {
    id: 5,
    title: "Восстановление после COVID-19",
    description: "Как специальная программа реабилитации помогла вернуться к нормальной жизни",
    image: "/patient-story-1.png",
    duration: "8:10",
    category: "Реабилитация",
    patientName: "Ольга М.",
    age: 45,
    problem: "Постковидный синдром, слабость",
    solution: "Программа реабилитации с витаминными капельницами",
    result: "Полное восстановление за 2 месяца",
  },
  {
    id: 6,
    title: "Лечение хронической усталости",
    description: "Комплексный подход к решению проблемы постоянной усталости",
    image: "/patient-story-2.png",
    duration: "5:55",
    category: "Эндокринология",
    patientName: "Александр Р.",
    age: 29,
    problem: "Хроническая усталость и апатия",
    solution: "Обследование щитовидной железы и гормональная коррекция",
    result: "Возвращение энергии и работоспособности",
  },
  {
    id: 7,
    title: "Подготовка к беременности",
    description: "Как правильная подготовка помогла легко забеременеть и выносить здорового ребенка",
    image: "/patient-story-3.png",
    duration: "9:30",
    category: "Гинекология",
    patientName: "Мария К.",
    age: 31,
    problem: "Планирование беременности после 30",
    solution: "Комплексное обследование и витаминная поддержка",
    result: "Успешная беременность и рождение здорового ребенка",
  },
  {
    id: 8,
    title: "Избавление от аллергии",
    description: "Современные методы лечения помогли справиться с сезонной аллергией",
    image: "/patient-story-4.png",
    duration: "4:20",
    category: "Аллергология",
    patientName: "Игорь Т.",
    age: 27,
    problem: "Сезонная аллергия на пыльцу",
    solution: "Иммунотерапия и профилактические капельницы",
    result: "Значительное снижение симптомов аллергии",
  },
]

export function getPatientStories(): PatientStory[] {
  return patientStories
}

export function getPatientStoryById(id: number): PatientStory | undefined {
  return patientStories.find((story) => story.id === id)
}

export function getPatientStoriesByCategory(category: string): PatientStory[] {
  return patientStories.filter((story) => story.category === category)
}

export function getFeaturedPatientStories(limit = 4): PatientStory[] {
  return patientStories.slice(0, limit)
}
