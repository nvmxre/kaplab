"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


import { Check, Star } from "lucide-react"

const priceCategories = [
  {
    category: "Капельницы для восстановления",
    services: [
      { name: "Быстрое восстановление", price: "12 000 р.", duration: "45-60 мин", popular: true },
      { name: "Восстановление на дому", price: "16 000 р.", duration: "60-90 мин" },
      { name: "Против утомления", price: "6 000 р.", duration: "30-45 мин" },
      { name: "Против похмелья", price: "7 000 р.", duration: "45 мин" },
      { name: "Энерджайзер", price: "6 000 р.", duration: "45 мин" },
      { name: "Выносливость к нагрузкам", price: "9 000 р.", duration: "60 мин" },
    ],
  },
  {
    category: "Капельницы для красоты",
    services: [
      { name: "Золушка", price: "8 000 р.", duration: "60 мин", popular: true },
      { name: "Уход за кожей", price: "8 000 р.", duration: "60 мин" },
      { name: "Уход за волосами", price: "8 000 р.", duration: "60 мин" },
      { name: "Барби-капельница", price: "8 000 р.", duration: "60 мин" },
      { name: "Бархатная кожа", price: "7 000 р.", duration: "45 мин" },
      { name: "Глутатион", price: "6 000 р.", duration: "45 мин" },
      { name: "Лаеннек", price: "12 200 р.", duration: "60 мин" },
    ],
  },
  {
    category: "Капельницы для здоровья",
    services: [
      { name: "Против аллергии", price: "8 000 р.", duration: "45 мин" },
      { name: "Укрепление иммунитета", price: "9 000 р.", duration: "60 мин" },
      { name: "Против стресса", price: "6 000 р.", duration: "45 мин" },
      { name: "Против герпеса", price: "9 000 р.", duration: "45 мин" },
      { name: "Против простуды", price: "9 000 р.", duration: "45 мин" },
      { name: "Стоп мигрень", price: "7 000 р.", duration: "30 мин" },
      { name: "Активность мозга", price: "6 000 р.", duration: "45 мин" },
    ],
  },
  {
    category: "Лечебные капельницы",
    services: [
      { name: "Детокс", price: "9 000 р.", duration: "60 мин", popular: true },
      { name: "При железодефиците", price: "8 000 р.", duration: "60 мин" },
      { name: "Восполнение белка", price: "7 000 р.", duration: "45 мин" },
      { name: "Для похудения", price: "6 000 р.", duration: "45 мин" },
      { name: "Ускорение метаболизма", price: "9 000 р.", duration: "60 мин" },
      { name: "Против отёков", price: "9 000 р.", duration: "45 мин" },
    ],
  },
  {
    category: "Программы лечения",
    services: [
      { name: "Миланский коктейль", price: "от 35 000 р.", duration: "5-7 процедур" },
      { name: "Мужское здоровье", price: "от 30 000 р.", duration: "4-6 процедур" },
      { name: "Снижение веса Super", price: "от 25 000 р.", duration: "6-8 процедур" },
      { name: "Коллагеностимулирующие", price: "от 10 000 р.", duration: "4-6 процедур" },
    ],
  },
  {
    category: "Консультации врачей",
    services: [
      { name: "Первичная консультация терапевта", price: "3 000 р.", duration: "30 мин" },
      { name: "Повторная консультация", price: "2 500 р.", duration: "20 мин" },
      { name: "Консультация кардиолога", price: "3 500 р.", duration: "30 мин" },
      { name: "Консультация эндокринолога", price: "3 500 р.", duration: "30 мин" },
      { name: "Консультация невролога", price: "3 500 р.", duration: "30 мин" },
      { name: "Консультация дерматолога", price: "3 000 р.", duration: "30 мин" },
    ],
  },
]

export default function PricesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1 pt-16">
        <section className="py-12">
          <div className="container px-4">
            {/* Breadcrumb */}
            <nav className="text-sm text-muted-foreground mb-6">
              <Link href="/" className="hover:text-foreground">
                Главная
              </Link>{" "}
              &gt; <span>Цены</span>
            </nav>

            <h1 className="text-3xl font-bold mb-4">Цены на услуги</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Прозрачное ценообразование без скрытых платежей. Все цены указаны с учетом стоимости препаратов и работы
              медицинского персонала.
            </p>

            {/* Price Categories */}
            <div className="space-y-8">
              {priceCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="p-6">
                  <h2 className="text-xl font-bold mb-6">{category.category}</h2>
                  <div className="grid gap-4">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{service.name}</h3>
                              {service.popular && (
                                <Badge className="bg-pink-100 text-pink-700 text-xs">
                                  <Star className="h-3 w-3 mr-1" />
                                  Популярно
                                </Badge>
                              )}
                            </div>
                            <div className="text-sm text-muted-foreground">{service.duration}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-pink-600">{service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Что входит в стоимость</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Консультация врача перед процедурой</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Все необходимые препараты и расходные материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Наблюдение медицинского персонала во время процедуры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Рекомендации врача после процедуры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Комфортные условия в современном медицинском центре</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Способы оплаты</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Принимаем к оплате:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Наличные средства</li>
                      <li>• Банковские карты (Visa, MasterCard, МИР)</li>
                      <li>• Безналичный расчет для юридических лиц</li>
                      <li>• Оплата через СБП</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Скидки и акции:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Скидка 10% при покупке курса процедур</li>
                      <li>• Специальные предложения для постоянных клиентов</li>
                      <li>• Сезонные акции и промокоды</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-pink-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Нужна консультация по выбору процедуры?</h2>
              <p className="text-muted-foreground mb-6">
                Наши врачи помогут подобрать оптимальную программу лечения с учетом ваших потребностей и бюджета
              </p>
              <Button className="bg-pink-600 hover:bg-pink-700">Получить консультацию</Button>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}
