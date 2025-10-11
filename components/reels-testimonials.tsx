"use client"

import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Play, Volume2, VolumeX, ChevronUp, ChevronDown, Calendar} from "lucide-react"
import {useState, useRef, useEffect} from "react"
import {BookingButton} from "@/components/booking-button";
import Link from "next/link"

export default function HeroReelsTestimonials() {
    const [currentReel, setCurrentReel] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)

    const videoRef = useRef<HTMLVideoElement>(null)

    const reels = [
        {
            id: 1,
            patientName: "Тома Т.",
            duration: "0:54",
            text: "Самая лучшая клиника, где можно сделать капельницы в Москве из тех, где я была. Сервис на высоте, врачи квалифицированные, медсестры нежные🌸\n" +
                "Удобные кресла, что очень важно в этой процедуре. Чай, кофе и вкусняшки на любой вкус🙏\n" +
                "Спасибо!\n" +
                "Всем рекомендую.",
            poster: "/assets/patient-testimonials/thumbnail-patient-1.png",
        },
        {
            id: 2,
            patientName: "Руслан Ш.",
            duration: "0:59",
            text: "После затяжного стресса и перегрузок на работе понял что нужно заняться восстановлением организма. В Каплаб прошел курс витаминных капельниц, и эффект почувствовал почти сразу - больше сил, лучше самочувствие, нормализовался сон. Понравился профессиональный подход врачей и комфортная атмосфера. И отдельная благодарность Николаю Юрьевичу, за чуткость и профессионализм! Плюс здесь есть программы медицинской реабилитации, если потребуется более серьезное восстановление. Отличное место для поддержания здоровья!",
            poster: "/assets/patient-testimonials/thumbnail-patient-2.png",
        },
        {
            id: 3,
            patientName: "Екатерина Б.",
            duration: "0:59",
            text: "Прошла курс капельниц для снижения веса в КапЛаб и осталась в полном восторге! Уже через пару недель заметила, что объемы уходят, отеки стали меньше, появилось больше энергии. Очень порадовало, что в рамках акции шли бесплатные анализы и консультация врача - все под контролем специалистов. Чувствую себя намного лучше, рекомендую всем, кто хочет комфортно и безопасно похудеть!",
            poster: "/assets/patient-testimonials/thumbnail-patient-3.png",
        },
    ]

    const nextReel = () => {
        setCurrentReel((prev) => (prev + 1) % reels.length)
    }

    const prevReel = () => {
        setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length)
    }

    const handlePlayPause = async () => {
        if (videoRef.current) {
            try {
                if (isPlaying) {
                    await videoRef.current.pause()
                } else {
                    await videoRef.current.play()
                }
                setIsPlaying(!isPlaying)
            } catch (error) {
                console.log("Video play/pause error:", error)
            }
        }
    }

    const handleMuteToggle = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load()
            setIsPlaying(false)
        }
    }, [currentReel])

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Content Section */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="space-y-4">
                            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-100 w-fit">Отзывы наших
                                пациентов</Badge>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                                Истории выздоровления
                            </h1>
                            <p className="max-w-[600px] text-gray-600 md:text-xl">
                                Послушайте реальные истории наших пациентов. Их опыт лечения и восстановления в нашей
                                клинике.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">98%</div>
                                    <div className="text-sm text-gray-600">Довольных пациентов</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">5.0</div>
                                    <div className="text-sm text-gray-600">Средний рейтинг</div>
                                </div>
                            </div>

                            <Card className="bg-white border-primary-200">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                                              <span className="font-semibold text-primary-600">
                                                {reels[currentReel].patientName
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                              </span>
                                        </div>
                                        <div>
                                            <div
                                                className="font-semibold text-gray-900">{reels[currentReel].patientName}</div>
                                        </div>
                                    </div>
                                    <p className="mt-3 text-gray-700 italic">"{reels[currentReel].text}"</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className={"flex flex-col lg:flex-row gap-2 lg:gap-4"}>
                            <Button asChild variant={"secondary"}>
                                <Link href={"https://yandex.ru/maps/org/7484757409/reviews"} target={"_blank"}>Все
                                    отзывы</Link>
                            </Button>
                            <BookingButton fullWidth={false}/>
                        </div>
                    </div>

                    {/* Reels Player Section */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Mobile-like Reels Player */}
                            <Card className="w-80 h-[600px] overflow-hidden shadow-2xl bg-black">
                                <div className="relative w-full h-full">
                                    {/* Video */}
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        poster={reels[currentReel].poster}
                                        muted={isMuted}
                                        loop
                                        playsInline
                                        onLoadedData={() => {
                                            if (videoRef.current && isPlaying) {
                                                videoRef.current.play()
                                            }
                                        }}
                                    >
                                        <source
                                            src={`/assets/patient-testimonials/patient-${reels[currentReel].id}.mp4`}
                                            type="video/mp4"/>
                                    </video>

                                    {/* Play/Pause Overlay */}
                                    <div
                                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                        onClick={handlePlayPause}
                                    >
                                        {!isPlaying && (
                                            <div className="bg-black/50 rounded-full p-4">
                                                <Play className="h-8 w-8 text-white ml-1"/>
                                            </div>
                                        )}
                                    </div>

                                    {/* Navigation Controls */}
                                    <div
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="bg-black/30 text-white hover:bg-black/50 rounded-full w-12 h-12 p-0"
                                            onClick={prevReel}
                                        >
                                            <ChevronUp className="h-6 w-6"/>
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="bg-black/30 text-white hover:bg-black/50 rounded-full w-12 h-12 p-0"
                                            onClick={nextReel}
                                        >
                                            <ChevronDown className="h-6 w-6"/>
                                        </Button>
                                    </div>

                                    {/* Bottom Info */}
                                    {/*          <div className="absolute bottom-4 left-4 right-16 text-white">*/}
                                    {/*              <div className="space-y-2">*/}
                                    {/*                  <div className="flex items-center gap-2">*/}
                                    {/*                      <div*/}
                                    {/*                          className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">*/}
                                    {/*<span className="text-xs font-semibold">*/}
                                    {/*  {reels[currentReel].patientName*/}
                                    {/*      .split(" ")*/}
                                    {/*      .map((n) => n[0])*/}
                                    {/*      .join("")}*/}
                                    {/*</span>*/}
                                    {/*                      </div>*/}
                                    {/*                      <span*/}
                                    {/*                          className="font-semibold text-sm">{reels[currentReel].patientName}</span>*/}
                                    {/*                  </div>*/}
                                    {/*                  <p className="text-sm opacity-90">{reels[currentReel].text}</p>*/}
                                    {/*                  <div className="text-xs opacity-75">*/}
                                    {/*                      #{reels[currentReel].treatment.toLowerCase()} #отзыв #клиника*/}
                                    {/*                  </div>*/}
                                    {/*              </div>*/}
                                    {/*          </div>*/}

                                    {/* Top Controls */}
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="bg-black/30 text-white hover:bg-black/50 rounded-full w-10 h-10 p-0"
                                            onClick={handleMuteToggle}
                                        >
                                            {isMuted ? <VolumeX className="h-4 w-4"/> : <Volume2 className="h-4 w-4"/>}
                                        </Button>
                                    </div>

                                    {/* Duration Badge */}
                                    <div className="absolute top-4 left-4">
                                        <Badge
                                            className="bg-black/50 text-white hover:bg-black/50">{reels[currentReel].duration}</Badge>
                                    </div>

                                    {/* Progress Indicators */}
                                    <div className="absolute top-2 left-4 right-4 flex gap-1">
                                        {reels.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`flex-1 h-0.5 rounded-full ${currentReel === index ? "bg-white" : "bg-white/30"}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </Card>

                            {/* Reel Counter */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                <Badge variant="secondary" className="bg-white shadow-md">
                                    {currentReel + 1} из {reels.length}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
