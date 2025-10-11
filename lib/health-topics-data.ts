export interface HealthTopic {
  id: number
  title: string
  description: string
  image: string
  category: string
  readTime: string
  author: string
  publishDate: string
  content: string
  tags: string[]
}

const healthTopics: HealthTopic[] = [
  {
    id: 1,
    title: "Здоровый образ жизни",
    description: "Советы по поддержанию здоровья и активности",
    image: "/article-healthy-lifestyle.png",
    category: "Образ жизни",
    readTime: "5 мин",
    author: "Др. Елена Петрова",
    publishDate: "2024-01-15",
    content:
      "Здоровый образ жизни включает в себя правильное питание, регулярные физические упражнения, достаточный сон и управление стрессом.",
    tags: ["здоровье", "образ жизни", "профилактика"],
  },
  {
    id: 2,
    title: "Правильное питание",
    description: "Основы здорового питания и диетологии",
    image: "/article-healthy-nutrition.png",
    category: "Питание",
    readTime: "7 мин",
    author: "Др. Сергей Иванов",
    publishDate: "2024-01-10",
    content:
      "Сбалансированное питание - основа здоровья. Важно включать в рацион все необходимые макро- и микроэлементы.",
    tags: ["питание", "диета", "витамины"],
  },
  {
    id: 3,
    title: "Медицинские исследования",
    description: "Последние достижения в медицине",
    image: "/article-medical-research.png",
    category: "Исследования",
    readTime: "10 мин",
    author: "Др. Ольга Смирнова",
    publishDate: "2024-01-05",
    content: "Современная медицина постоянно развивается. Новые методы диагностики и лечения помогают спасать жизни.",
    tags: ["исследования", "медицина", "инновации"],
  },
  {
    id: 4,
    title: "Психическое здоровье",
    description: "Забота о ментальном благополучии",
    image: "/article-mental-health.png",
    category: "Психология",
    readTime: "6 мин",
    author: "Др. Андрей Козлов",
    publishDate: "2024-01-01",
    content:
      "Психическое здоровье так же важно, как и физическое. Стресс, депрессия и тревога требуют профессионального внимания.",
    tags: ["психология", "стресс", "ментальное здоровье"],
  },
  {
    id: 5,
    title: "Витамины и минералы",
    description: "Роль витаминов в поддержании здоровья",
    image: "/article-healthy-lifestyle.png",
    category: "Питание",
    readTime: "8 мин",
    author: "Др. Елена Петрова",
    publishDate: "2023-12-28",
    content: "Витамины и минералы играют ключевую роль в метаболизме и поддержании иммунитета.",
    tags: ["витамины", "иммунитет", "здоровье"],
  },
  {
    id: 6,
    title: "Профилактика сердечно-сосудистых заболеваний",
    description: "Как сохранить здоровье сердца",
    image: "/article-medical-research.png",
    category: "Кардиология",
    readTime: "9 мин",
    author: "Др. Сергей Иванов",
    publishDate: "2023-12-25",
    content:
      "Сердечно-сосудистые заболевания - ведущая причина смертности. Профилактика включает здоровое питание и физическую активность.",
    tags: ["кардиология", "профилактика", "сердце"],
  },
  {
    id: 7,
    title: "Иммунитет и его укрепление",
    description: "Естественные способы повышения иммунитета",
    image: "/article-healthy-nutrition.png",
    category: "Иммунология",
    readTime: "6 мин",
    author: "Др. Ольга Смирнова",
    publishDate: "2023-12-20",
    content:
      "Сильный иммунитет - защита от инфекций. Правильное питание, сон и физическая активность укрепляют защитные силы организма.",
    tags: ["иммунитет", "профилактика", "здоровье"],
  },
  {
    id: 8,
    title: "Сон и его влияние на здоровье",
    description: "Важность качественного сна для организма",
    image: "/article-mental-health.png",
    category: "Образ жизни",
    readTime: "7 мин",
    author: "Др. Андрей Козлов",
    publishDate: "2023-12-15",
    content:
      "Качественный сон необходим для восстановления организма. Недостаток сна влияет на иммунитет, память и настроение.",
    tags: ["сон", "здоровье", "восстановление"],
  },
  {
    id: 9,
    title: "Стресс и методы борьбы с ним",
    description: "Эффективные техники управления стрессом",
    image: "/article-mental-health.png",
    category: "Психология",
    readTime: "8 мин",
    author: "Др. Елена Петрова",
    publishDate: "2023-12-10",
    content:
      "Хронический стресс негативно влияет на здоровье. Медитация, дыхательные упражнения и физическая активность помогают справиться со стрессом.",
    tags: ["стресс", "релаксация", "психология"],
  },
  {
    id: 10,
    title: "Детоксикация организма",
    description: "Безопасные методы очищения организма",
    image: "/article-healthy-lifestyle.png",
    category: "Детокс",
    readTime: "9 мин",
    author: "Др. Сергей Иванов",
    publishDate: "2023-12-05",
    content:
      "Детоксикация помогает очистить организм от токсинов. Важно выбирать безопасные и научно обоснованные методы.",
    tags: ["детокс", "очищение", "здоровье"],
  },
  {
    id: 11,
    title: "Женское здоровье после 40",
    description: "Особенности заботы о здоровье в зрелом возрасте",
    image: "/article-healthy-nutrition.png",
    category: "Женское здоровье",
    readTime: "10 мин",
    author: "Др. Ольга Смирнова",
    publishDate: "2023-11-30",
    content:
      "После 40 лет женский организм нуждается в особом внимании. Гормональные изменения требуют корректировки образа жизни.",
    tags: ["женское здоровье", "гормоны", "возраст"],
  },
  {
    id: 12,
    title: "Профилактика онкологических заболеваний",
    description: "Современные подходы к предотвращению рака",
    image: "/article-medical-research.png",
    category: "Онкология",
    readTime: "12 мин",
    author: "Др. Андрей Козлов",
    publishDate: "2023-11-25",
    content:
      "Ранняя диагностика и профилактика - ключ к борьбе с онкологическими заболеваниями. Регулярные обследования спасают жизни.",
    tags: ["онкология", "профилактика", "диагностика"],
  },
]

export function getHealthTopics(): HealthTopic[] {
  return healthTopics
}

export function getHealthTopicById(id: number): HealthTopic | undefined {
  return healthTopics.find((topic) => topic.id === id)
}

export function getHealthTopicsByCategory(category: string): HealthTopic[] {
  return healthTopics.filter((topic) => topic.category === category)
}

export function getFeaturedHealthTopics(limit = 4): HealthTopic[] {
  return healthTopics.slice(0, limit)
}

export function getHealthTopicsByAuthor(author: string): HealthTopic[] {
  return healthTopics.filter((topic) => topic.author === author)
}
