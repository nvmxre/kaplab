interface Procedure {
  id: number
  name: string
  description: string
  image: string
  price?: string
  duration?: string
}

export const procedures: Procedure[] = [
  {
    id: 1,
    name: "Физиотерапия",
    description: "Комплекс физиотерапевтических процедур для восстановлени��",
    image: "/procedure-physiotherapy.png",
    price: "3 000 р.",
    duration: "45 минут",
  },
  {
    id: 2,
    name: "Массаж",
    description: "Лечебный массаж для снятия напряжения и боли",
    image: "/procedure-massage.png",
    price: "2 500 р.",
    duration: "60 минут",
  },
  {
    id: 3,
    name: "Иглоукалывание",
    description: "Традиционная китайская медицина для лечения различных заболеваний",
    image: "/procedure-acupuncture.png",
    price: "4 000 р.",
    duration: "30 минут",
  },
]
