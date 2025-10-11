import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FaqSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Вопрос-ответ</h2>
            <p className="text-muted-foreground mb-6">
              Нужна дополнительная информация? Наш раздел "Вопрос-ответ" отвечает на самые важные вопросы о наших
              процедурах и услугах.
            </p>
            <Link href="/faq">
              <Button className="bg-primary-600 hover:bg-primary-700">Все ответы</Button>
            </Link>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  <span className="text-left font-medium">Какие типы капельниц вы предлагаете?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  Мы предлагаем капельницы для восстановления, красоты, здоровья, лечения, а также медицинские
                  препараты. Каждый тип направлен на решение конкретных задач: от быстрого восстановления сил до
                  омоложения и лечения заболеваний.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  <span className="text-left font-medium">Что входит в состав капельниц для красоты?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  Капельницы для красоты содержат коллаген, гиалуроновую кислоту, витамины C и E, антиоксиданты,
                  аминокислоты и другие компоненты, способствующие омоложению кожи, укреплению волос и общему улучшению
                  внешнего вида.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  <span className="text-left font-medium">Как часто можно делать капельницы?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  Частота зависит от типа капельницы и индивидуальных показаний. Восстановительные - 1-2 раза в неделю,
                  для красоты - курсами по 5-10 процедур, лечебные - по назначению врача. Точную схему определяет
                  специалист.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  <span className="text-left font-medium">Есть ли противопоказания к процедурам?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2">
                  Противопоказания включают острые инфекционные заболевания, тяжелые заболевания сердца и почек,
                  аллергические реакции на компоненты препаратов, беременность и период лактации. Обязательна
                  консультация врача.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
