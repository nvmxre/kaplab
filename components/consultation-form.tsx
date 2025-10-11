import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ConsultationForm() {
  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/woman-health-consultation.png" alt="Консультация врача" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Заполните форму, чтобы получить бесплатную консультацию</h2>
            <p className="text-muted-foreground mb-6">
              Наши специалисты свяжутся с вами в течение 15 минут по телефону +7 (495) 473-43-52 и ответят на все
              вопросы о процедурах
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                {/*<div>*/}
                {/*  <label htmlFor="email" className="block text-sm font-medium mb-1">*/}
                {/*    Email (необязательно)*/}
                {/*  </label>*/}
                {/*  <input*/}
                {/*    id="email"*/}
                {/*    type="email"*/}
                {/*    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"*/}
                {/*    placeholder="example@mail.ru"*/}
                {/*  />*/}
                {/*</div>*/}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Интересующая услуга
                  </label>
                  <select
                    id="service"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="recovery">Восстановление</option>
                    <option value="beauty">Красота</option>
                    <option value="health">Здоровье</option>
                    <option value="treatment">Лечение</option>
                    <option value="consultation">Консультация врача</option>
                  </select>
                </div>
                {/*<div>*/}
                {/*  <label htmlFor="message" className="block text-sm font-medium mb-1">*/}
                {/*    Комментарий (необязательно)*/}
                {/*  </label>*/}
                {/*  <textarea*/}
                {/*    id="message"*/}
                {/*    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"*/}
                {/*    rows={3}*/}
                {/*    placeholder="Дополнительная информация"*/}
                {/*  ></textarea>*/}
                {/*</div>*/}
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" defaultChecked={true} className="mt-1" required />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  Я согласен на обработку персональных данных в соответствии с{" "}
                  <a href="#" className="text-pink-600 hover:underline">
                    политикой конфиденциальности
                  </a>
                </label>
              </div>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3">Получить консультацию</Button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
