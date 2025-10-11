import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Award, Users, Clock, Shield } from "lucide-react"

export default function ClinicVideoSection() {
  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Клиника КАПЛАБ</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Современная клиника витаминных капельниц в центре Москвы на Чистопрудном бульваре. Мы специализируемся на
              инфузионной терапии с использованием сертифицированных препаратов и новейших технологий в области
              витаминотерапии.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold">15+</div>
                  <div className="text-sm text-muted-foreground">Врачей</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold">5 лет</div>
                  <div className="text-sm text-muted-foreground">Опыта</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Clock className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold">9:00-20:00</div>
                  <div className="text-sm text-muted-foreground">Без выходных</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold">100%</div>
                  <div className="text-sm text-muted-foreground">Безопасность</div>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>
                <strong>Адрес:</strong> 101000, г. Москва, 121170, город Москва, Поклонная ул, д. 4, помещ. 97
              </p>
              <p>
                <strong>Телефон:</strong> +7 (495) 473-43-52
              </p>
              <p>
                <strong>Email:</strong> drops.lab@yandex.com
              </p>
            </div>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white">Узнать больше о клинике</Button>
          </div>
          <Card className="overflow-hidden">
            <div className="relative h-96">
              <Image src="/clinic-interior.png" alt="Клиника КАПЛАБ" fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <Button className="rounded-full bg-white text-pink-600 hover:bg-gray-100 w-16 h-16">
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional info cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Сертифицированные врачи</h3>
            <p className="text-muted-foreground">
              Все наши специалисты имеют высшую квалификацию и многолетний опыт работы
            </p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Конфиденциальность</h3>
            <p className="text-muted-foreground">Гарантируем полную конфиденциальность ваших медицинских данных</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Удобный график</h3>
            <p className="text-muted-foreground">Работаем ежедневно с 9:00 до 20:00 без выходных и праздников</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
