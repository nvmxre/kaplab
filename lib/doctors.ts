export interface Doctor {
  id: number
  name: string
  specialty: string
  image?: string
  experience?: string
  education?: string | string[]
  higherEducation?: string | string[]
  additionalEducation?: string | string[]
  professionalDevelopment?: string | string[]
  specializations?: string[];
  schedule?: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Цупикова Анастасия Сергеевна",
    specialty: "Основатель клиники",
    image: "/assets/doctors/doctor-anastasiya.webp",
    education: "Среднее специальное образование, высшее медицинское образование",
    // additionalEducation: "ASs"
  },
  {
    id: 2,
    name: "Потуданский Николай Юрьевич",
    specialty: "Врач-терапевт, IV-специалист.",
    image: "/assets/doctors/doctor-nikolay.webp",
    experience: "27 лет опыта",
    education: ["Кубанская государственная медицинская академия, 1996 г.",
        "Российский университет Дружбы народов, профессиональная переподготовка «Организация здравоохранения и общественное здоровье» г. Москва, 2015 г.",
        "Автономная некоммерческая организация дополнительного профессионального образования «Гуманитарно-технический институт», первичная переподготовка, повышение квалификации по специальности «Терапия», г. Москва, 2018 г."],
    professionalDevelopment: ["Автономная некоммерческая организация дополнительного профессионального образования «Гуманитарно-технический институт», повышение квалификации по специальности «Терапия», г. Москва, 2020г.",
    "Автономная некоммерческая организация дополнительного профессионального образования «Гуманитарно-технический институт», повышение квалификации по специальности «Организация здравоохранения и общественное здоровье», г. Москва, 2020 г."]
  },
  {
    id: 3,
    name: "Шамилова Асия Пулатовна",
    specialty: "Старшая медицинская сестра",
    image: "/assets/doctors/doctor-asiya.webp",
    experience: "7 лет опыта",
    education: "МГМУ им. И.М. Сеченова (2018 год), Среднее специальное образование",
  },
  {
    id: 4,
    name: "Асхабов Исмаил Тагирович",
    specialty: "Врач терапевт",
    image: "/assets/doctors/doctor-ismail.webp",
    experience: "3 года опыта",
    education: "ФГБОУ «Майкопский государственный технологический университет» (2022 год) по специальности: «Лечебное дело».",
  },
  {
    id: 5,
    name: "Алексанян Сантина Андреевна",
    specialty: "Врач - дерматолог, косметолог",
    image: "/assets/doctors/aleksanyan.jpg",
    experience: "7 лет опыта",
    education: "Диплом специалиста о высшем образовании - 2017 гг. ФГАОУ ВО Первый МГМУ имени И.М. Сеченова Минздрава России (Сеченовский Университет) специальность: «Леченное дело» (квалификация «Врач»).",
    additionalEducation: "Интернатура  - 2018 ФГАОУ ВО РНИМУ имени Н.И. Пирогова Минздрава России (Пироговский Университет) По специальности: Дерматовенерология.",
    professionalDevelopment: "Профессиональная переподготовка по программе «Врач-косметолог», полученная в 2018 году."
  },
  {
    id: 6,
    name: "Попова Александра Юрьевна",
    specialty: "Врач-эндокринолог, диетолог",
    image: "/assets/doctors/popova.jpg",
    education: "· Высшее медицинское образование: Московский государственный медико-стоматологический университет, лечебный факультет (2008 г.).\n" +
        "· Интернатура: Терапия, Московский государственный медико-стоматологический университет (2009 г.).\n" +
        "· Ординатура: Эндокринология, Московский государственный медико-стоматологический университет (2011 г.).",
    professionalDevelopment: "· РУДН, «Диетология» (2024 г.)\n" +
        "· РУДН, «Лечебная физкультура и спортивная медицина» (2025 г.)"
  },
  {
    id: 7,
    name: "Андрияка София Павловна",
    specialty: "Заместитель руководителя",
    image: "/assets/doctors/female.jpg",
    education: "Окончила Российский институт театрального искусства — ГИТИС в 2023 году по специальности: «Продюсер исполнительских искусств».",
    professionalDevelopment: "Программа дополнительного профессионального образования «Юрист в медицине» в 2025 году."
  },
  {
    id: 8,
    name: "Марков Иван Васильевич",
    specialty: "Медбрат",
    image: "/assets/doctors/male.jpg",
    education: "Окончил Глазовское медицинское училище в 2016 году по специальности: «Фельдшер «Скорой помощи, «Фельдшер ОУ».",
    professionalDevelopment: "АНОДПО «Центральный многопрофильный институт» в 2020 году по специальности: «Фельдшер скорой медицинской помощи»"
  },
]

export async function getAllDoctors(): Promise<Doctor[]> {
  return doctors
}

export async function getDoctorById(id: number): Promise<Doctor | undefined> {
  return doctors.find((doctor) => doctor.id === id)
}

export async function getDoctorsBySpecialty(specialty: string): Promise<Doctor[]> {
  return doctors.filter((doctor) => doctor.specialty === specialty)
}

export async function getFeaturedDoctors(limit = 4): Promise<Doctor[]> {
  return doctors.slice(0, limit)
}
