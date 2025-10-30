import { notFound } from "next/navigation"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


import { Clock } from "lucide-react"
import {DripQuickRecovery} from "@/data/iv-drips-text/quick-recovery";
import {DripCinderella} from "@/data/iv-drips-text/cinderella";
import { DripHomeRecovery } from "@/data/iv-drips-text/home-recovery"
import {BookingButton} from "@/components/booking-button";
import {DripCollagen} from "@/data/iv-drips-text/collagen";
import {DripProtivStressa} from "@/data/iv-drips-text/protiv-stressa";
import {DripProtivAllergiyi} from "@/data/iv-drips-text/protiv-allergiyi";
import {DripVospolnenieBelka} from "@/data/iv-drips-text/vospolnenie-belka";
import {DripProtivPohmelya} from "@/data/iv-drips-text/protiv-pohmelya";
import {DripDetox} from "@/data/iv-drips-text/detox";
import {DripUkreplenieZdorovia} from "@/data/iv-drips-text/ukreplenie-zdorovia";
import {DripVinoslivostKNagruzkam} from "@/data/iv-drips-text/vinoslivost-k-nagruzkam";
import {DripProtivGerpesa} from "@/data/iv-drips-text/protiv-gerpesa";
import {DripProtivProstudy} from "@/data/iv-drips-text/protiv-prostudy";
import {DripStopMigren} from "@/data/iv-drips-text/stop-migren";
import {DripEnergizer} from "@/data/iv-drips-text/energizer";
import {DripActivnostMozga} from "@/data/iv-drips-text/activnost-mozga";
import {DripGlutation} from "@/data/iv-drips-text/glutation";
import { DripLaennek } from "@/data/iv-drips-text/laennek"
import {DripUhodZaKozhey} from "@/data/iv-drips-text/uhod-za-kozhey";
import { DripUhodZaVolosami } from "@/data/iv-drips-text/uhod-za-volosami"
import {DripBarbi} from "@/data/iv-drips-text/barbi";
import { DripBarhatnayaKozha } from "@/data/iv-drips-text/barhatnaya-kozha"
import {DripOktolipen} from "@/data/iv-drips-text/oktolipen";
import { DripTioktovayaKislota } from "@/data/iv-drips-text/tioktovaya-kislota"
import {DripPanangin} from "@/data/iv-drips-text/panangin";
import {DripRiboksin} from "@/data/iv-drips-text/riboksin";
import {DripGemodez} from "@/data/iv-drips-text/gemodez";
import {DripTsiprofloksatsin} from "@/data/iv-drips-text/tsiprofloksatsin";
import {DripMildronat} from "@/data/iv-drips-text/mildronat";
import {DripCeraxon} from "@/data/iv-drips-text/ceraxon";
import {DripRemaxol} from "@/data/iv-drips-text/remaxol";
import {DripBerlition} from "@/data/iv-drips-text/berlition";
import {DripDexametazon} from "@/data/iv-drips-text/dexametazon";
import {DripCitoflavin} from "@/data/iv-drips-text/citoflavin";
import {DripReamberin} from "@/data/iv-drips-text/reamberin";
import {DripCinderellaLux} from "@/data/iv-drips-text/cinderella-lux";
import {DripDlyaVolosINogtei} from "@/data/iv-drips-text/dlya-volos-i-nogtei";
import {DripEnergy} from "@/data/iv-drips-text/energy";
import {Metadata} from "next";

// Данные о капельницах
const ivDripsData: any = {
  "quick-recovery": {
    name: "Суперэффективная капельница «Быстрое восстановление»",
    description:
      "Есть симптомы простуды? Но нужно работать и дедлайн в делах?",
    type: "Восстановление",
    price: "14 000 р.",
    duration: "от 30 мин до 2 часов",
    image: "/assets/iv-therapy/stress/1.webp",
    text: <DripQuickRecovery/>
  },
  "dlya-volos-i-nogtei": {
    name: "Капельница «Для волос и ногтей»",
    description:
        "Капельница для волос и ногтей — это не косметический трюк, а полноценная нутритивная терапия, которая питает организм изнутри. Компоненты поступают сразу в кровь, обеспечивая 100% усвоение.",
    type: "Восстановление",
    price: "10 000 р.",
    duration: "от 30 мин до 2 часов",
    image: "/assets/iv-therapy/recovery/0.webp",
    text: <DripDlyaVolosINogtei/>
  },
  "cinderella": {
    name: "Капельница «Золушка»",
    description:
        "Процедура за 50 мин, омолаживающий эффект через 7 дней вместо 3 месяцев таблеток!",
    type: "Красота и молодость",
    price: "9000 р.",
    duration: "от 30 мин до 2 часов",
    image: "/assets/iv-therapy/stress/2.webp",
    text: <DripCinderella/>
  },
  "cinderella-lux": {
    name: "Капельница «Золушка Люкс»",
    description:
        "Процедура за 50 мин, омолаживающий эффект через 7 дней вместо 3 месяцев таблеток!",
    type: "Красота и молодость",
    price: "13000 р.",
    duration: "от 30 мин до 2 часов",
    image: "/assets/iv-therapy/stress/0.webp",
    text: <DripCinderellaLux/>
  },
  "energy": {
    name: "Капельница «Энергия»",
    description:
        "Усталость, снижение концентрации, апатия, плохое восстановление после тренировок или болезни — это сигналы, что организму нужна поддержка. Капельницы «Энергия» восстанавливают силы и запускают внутренние резервы.",
    type: "Восстановление после тренировок или болезни",
    price: "15000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripEnergy/>
  },
  "home-recovery": {
    name: "Капельница «Восстановление на дому»",
    type: "Красота и молодость",
    price: "18 000 р.",
    duration: "от 30 мин до 2 часов",
    image: "/assets/iv-therapy/stress/3.webp",
    text: <DripHomeRecovery/>
  },
  "collagen": {
    metaTitle: "Капельница «Коллаген» — молодость кожи | КАПЛАБ",
    metaDescription: "Комплекс «Коллаген» повышает упругость кожи, содержит аминокислоты и витамин C. КАПЛАБ ставит капельницу на дому — запишитесь на удобное время.",
    name: "Капельницы с коллагеном для здоровой кожи и подвижных суставов",
    type: "Здоровая кожа",
    price: "8000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripCollagen/>
  },
  "protiv-stressa": {
    name: "Капельница «Против стресса»",
    type: "Против стресса",
    price: "8000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripProtivStressa/>
  },
  "protiv-allergiyi": {
    name: "Капельница «Против аллергии»",
    type: "Против аллергии",
    price: "9000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripProtivAllergiyi/>
  },
  "vospolnenie-belka": {
    name: "Капельница «Восполнение белка»",
    type: "Восполнение белка",
    price: "8000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripVospolnenieBelka/>
  },
  "protiv-pohmelya": {
    name: "Капельница «Против похмелья»",
    type: "Против похмелья",
    price: "9000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripProtivPohmelya/>
  },
  "detox": {
    name: "Капельница «Детокс»",
    type: "Детокс",
    price: "10500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripDetox/>
  },
  "ukreplenie-zdorovia": {
    name: "Капельница «Укрепление здоровья и иммунитета»",
    type: "Здоровье",
    price: "11000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripUkreplenieZdorovia/>
  },
  "vinoslivost-k-nagruzkam": {
    name: "Капельница «Выносливость к нагрузкам»",
    type: "Восстановление",
    price: "11000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripVinoslivostKNagruzkam/>
  },
  "protiv-gerpesa": {
    name: "Капельница «Против Герпеса»",
    type: "Подавление вируса",
    price: "10000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripProtivGerpesa/>
  },
  "protiv-prostudy": {
    name: "Капельница «Против простуды»",
    type: "Подавление вируса",
    price: "10000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripProtivProstudy/>
  },
  "stop-migren": {
    name: "Капельница «Стоп Мигрень»",
    type: "От головной боли",
    price: "9000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripStopMigren/>
  },
  "energizer": {
    name: "Капельница «Энерджайзер»",
    type: "Восполнение энергии",
    price: "8000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripEnergizer/>
  },
  "activnost-mozga": {
    name: "Капельница «Активность мозга»",
    type: "Активность мозга",
    price: "8000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripActivnostMozga/>
  },
  "glutation": {
    name: "Капельница «Глутатион»",
    type: "Мощный антиоксидант",
    price: "8000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripGlutation/>
  },
  "laennek": {
    name: "Капельница «Лаеннек»",
    type: "Anti-age эффект",
    price: "14 200 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripLaennek/>
  },
  "uhod-za-kozhey": {
    name: "Капельница «Уход за кожей»",
    type: "Красота и молодость",
    price: "10000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripUhodZaKozhey/>
  },
  "uhod-za-volosami": {
    name: "Капельница «Уход за волосами»",
    type: "Красота и молодость",
    price: "10000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripUhodZaVolosami/>
  },
  "barbi": {
    name: "Капельница «Барби»",
    type: "Красота и молодость",
    price: "10000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripBarbi/>
  },
  "barhatnaya-kozha": {
    name: "Капельница «Бархатная кожа»",
    type: "Красота и молодость",
    price: "7000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripBarhatnayaKozha/>
  },
  "oktolipen": {
    name: "Капельница «Октолипен»",
    type: "Отдельные препараты для составных капельниц",
    price: "2000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripOktolipen/>
  },
  "tioktovaya-kislota": {
    name: "Капельница «Тиоктовая кислота»",
    type: "Отдельные препараты для составных капельниц",
    price: "2000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripTioktovayaKislota/>
  },
  "panangin": {
    name: "Капельница «Панангин»",
    type: "Отдельные препараты для составных капельниц",
    price: "1500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripPanangin/>
  },
  "riboksin": {
    name: "Капельница «Рибоксин»",
    type: "Отдельные препараты для составных капельниц",
    price: "1500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripRiboksin/>
  },
  "gemodez": {
    name: "Капельница «Гемодез»",
    type: "Отдельные препараты для составных капельниц",
    price: "2500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripGemodez/>
  },
  "tsiprofloksatsin": {
    name: "Капельница «Ципрофлоксацин»",
    type: "Отдельные препараты для составных капельниц",
    price: "1500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripTsiprofloksatsin/>
  },
  "mildronat": {
    name: "Капельница «Милдронат»",
    type: "Отдельные препараты для составных капельниц",
    price: "1500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripMildronat/>
  },
  "ceraxon": {
    name: "Капельница «Цераксон»",
    type: "Отдельные препараты для составных капельниц",
    price: "1500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripCeraxon/>
  },
  "remaxol": {
    name: "Капельница «Ремаксол»",
    type: "Отдельные препараты для составных капельниц",
    price: "3500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripRemaxol/>
  },
  "berlition": {
    name: "Капельница «Берлитион»",
    type: "Отдельные препараты для составных капельниц",
    price: "2000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripBerlition/>
  },
  "dexametazon": {
    name: "Капельница «Дексаметазон»",
    type: "Отдельные препараты для составных капельниц",
    price: "1000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripDexametazon/>
  },
  "citoflavin": {
    name: "Капельница «Цитофлавин»",
    type: "Отдельные препараты для составных капельниц",
    price: "2000 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripCitoflavin/>
  },
  "reamberin": {
    name: "Капельница «Реамберин»",
    type: "Отдельные препараты для составных капельниц",
    price: "3500 р.",
    duration: "от 30 мин до 2 часов",
    text: <DripReamberin/>
  },
}

export async function generateMetadata({
                                         params,
                                       }: {
  params: { slug: string };
}): Promise<Metadata> {
  const canonicalUrl = `https://www.drops-lab.ru/services/iv-drips/${params.slug}`;

  return {
    title: ivDripsData[params.slug].metaTitle ? ivDripsData[params.slug].metaTitle : `${ivDripsData[params.slug].name} | КАПЛАБ`,
    description: ivDripsData[params.slug].metaDescription ? ivDripsData[params.slug].metaDescription : ivDripsData[params.slug].description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function IVDripDetailPage({ params }: PageProps) {
  const drip = ivDripsData[params.slug as keyof typeof ivDripsData]

  if (!drip) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
        <div className="lg:px-4 py-8">

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Badge variant="outline" className="text-pink-600 border-pink-200">
                    {drip.type}
                  </Badge>
                  {drip.price && <span className="text-2xl font-bold text-pink-600">{drip.price}</span> }
                </div>
                <h1 className="text-3xl font-bold mb-4 text-balance text-center">{drip.name}</h1>
                {drip.description && <p className="text-lg italic text-muted-foreground text-balance text-center">{drip.description}</p> }
              </div>

              {/* Image */}
                {drip.image && <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
                <Image
                  src={drip.image || "/placeholder.svg?height=400&width=800&query=medical+iv+drip"}
                  alt={drip.name}
                  fill
                  className="object-contain"
                />
              </div> }
              {drip.text}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">

                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium mb-2">Подготовка к процедуре:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Легкий завтрак за 2 часа</li>
                      <li>• Исключить алкоголь за 24 часа</li>
                      <li>• Принести результаты анализов</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">После процедуры:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Отдых 15-20 минут</li>
                      <li>• Обильное питье</li>
                      <li>• Избегать физических нагрузок</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground">
                      Процедура проводится только после консультации врача и при отсутствии противопоказаний.
                    </p>
                  </div>
                </div>

                <BookingButton className={"mt-4"} service={{id: drip.name, title: drip.name}} />
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
                    <Clock className="h-4 w-4" />
                    <span>{drip.duration}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
    </div>
  )
}
