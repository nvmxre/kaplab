"use server"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Activity, Heart, Zap } from "lucide-react"
import {BookingButton} from "@/components/booking-button";

export const DripSuper= () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-primary text-primary-foreground rounded-lg">
                <div className="container mx-auto p-4">
                    <div className="space-y-6 text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div className="space-y-4 sm:space-y-6">
                            <Badge variant="secondary" className="mx-auto lg:mx-0">
                                Программа премиум-класса
                            </Badge>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Снижение веса Super</h1>
                            <p className="text-lg sm:text-xl opacity-90">
                                Анализы + консультация и сопровождение врача + жиросжигающие капельницы + капельницы от отеков
                            </p>
                            <div className="space-y-2 sm:space-y-0 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center lg:justify-start">
                                <div className="flex items-center justify-center lg:justify-start gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>Курс: 3 месяца</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start gap-2">
                                    <Activity className="w-5 h-5" />
                                    <span>От -9кг за курс</span>
                                </div>
                            </div>
                            <div className="space-y-3 sm:space-y-0 sm:flex sm:flex-col sm:gap-3 lg:flex-row lg:gap-4">
                                <div className="space-y-3 sm:space-y-0 sm:flex sm:justify-center lg:justify-start">
                                    <BookingButton service={{id: 0, title: "Снижение веса Super"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <Image
                                src="/assets/programs/super.jpg"
                                alt="Консультация врача по снижению веса"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Details */}
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold mb-1 text-sm">ПРОДОЛЖИТЕЛЬНОСТЬ</h3>
                                <p className="text-xl sm:text-2xl font-bold text-primary">3 месяца</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                                <h3 className="font-semibold mb-1 text-sm">ЧАСТОТА ПРОЦЕДУР</h3>
                                <p className="text-xl sm:text-2xl font-bold text-primary">2 раза в неделю</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <CheckCircle className="w-8 h-8 accent-foreground mx-auto mb-2" />
                                <h3 className="font-semibold mb-1 text-sm">АНАЛИЗЫ</h3>
                                <p className="text-xl sm:text-2xl font-bold accent-foreground">Включены</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6 text-center">
                                <Heart className="w-8 h-8 accent-foreground mx-auto mb-2" />
                                <h3 className="font-semibold mb-1 text-sm">СОПРОВОЖДЕНИЕ</h3>
                                <p className="text-xl sm:text-2xl font-bold accent-foreground">Включены</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="bg-muted">
                        <CardContent className="p-6 sm:p-8">
                            <p className="text-base sm:text-lg leading-relaxed">
                                С помощью программы вы не только похудеете, но и улучшите качество своей кожи, повысите уровень энергии
                                и ускорите метаболизм. Сначала мы предложим вам сдать обширный комплекс анализов, а после этого врач
                                даст расшифровку результатов. Таким образом вы получаете эффективное долгосрочное решение с
                                индивидуальным подходом.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Program Content */}
            <section className="py-12 sm:py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Содержание программы</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Activity className="w-5 h-5 text-primary" />
                                    Анализы
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm sm:text-base">Комплексное обследование для выявления дефицитов и нарушений</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Users className="w-5 h-5 text-primary" />
                                    Консультация врача
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm sm:text-base">Профессиональное сопровождение на каждом этапе программы</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Zap className="w-5 h-5 text-primary" />
                                    Восполнение дефицитов
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm sm:text-base">Протоколы для нормализации уровня витаминов и микроэлементов</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Activity className="w-5 h-5 accent-foreground" />
                                    Снижение веса Super
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm sm:text-base">
                                    8 капельниц для эффективного жиросжигания и ускорения метаболизма
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    <Heart className="w-5 h-5 text-primary" />
                                    Против Отеков Super
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm sm:text-base">8 капельниц для восстановления водно-солевого баланса</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Detailed Program Info */}
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Подробнее о программе</h2>
                    <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Сдача комплекса анализов</h3>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Анализы позволяют собрать точную информацию о состоянии вашего организма. Вы узнаете, есть ли у вас
                                    гормональный дисбаланс, дефицит витаминов и/или микроэлементов и сбои в работе внутренних органов.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Профессиональная поддержка</h3>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Вы получите подробную расшифровку анализов от врача-эксперта, а затем мы подстроим комплекс по
                                    оптимизации белкового обмена под вас.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Восполнение дефицитов</h3>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Дефицит питательных веществ может негативно влиять на здоровье. Восполняя дефицит витаминов и
                                    микроэлементов, вы ускоряете метаболизм, нормализуете уровень липидов в крови.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-6 sm:space-y-8">
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 accent-foreground">
                                    Протокол Снижение веса Super
                                </h3>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Помогает эффективному похудению за счет нормализации уровня сахара в крови, стимуляции липолиза,
                                    ускорения процессов сжигания жира и улучшения метаболизма.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">Протокол против Отеков Super</h3>
                                <p className="text-sm sm:text-base text-muted-foreground">
                                    Отёки способствуют накоплению избыточной жидкости в организме. Специальный протокол восстанавливает
                                    водно-солевой баланс организма и избавляет от отёков.
                                </p>
                            </div>
                            <div className="mt-6">
                                <Image
                                    src="/assets/programs/super-2.jpg"
                                    alt="Капельная терапия для снижения веса"
                                    width={400}
                                    height={250}
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-12 sm:py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Результат</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
                        {[
                            "Снижение массы тела — уменьшение объёмов жировой ткани",
                            "Ускорение метаболизма — улучшение обмена веществ, повышение энергии",
                            "Улучшение состояния кожи — увеличение тургора",
                            "Улучшение работы сердечно-сосудистой системы",
                            "Улучшение физической формы — обретение стройного силуэта",
                            "Нормализация давления и уровня холестерина",
                        ].map((result, index) => (
                            <Card key={index}>
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 accent-foreground mt-1 flex-shrink-0" />
                                        <p className="text-sm sm:text-base">{result}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Energy Programs */}
            {/*<section className="py-12 sm:py-16">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Программы «Энергия»</h2>*/}
            {/*        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">*/}
            {/*            <Card>*/}
            {/*                <CardHeader>*/}
            {/*                    <CardTitle className="text-xl text-primary">Энергия База</CardTitle>*/}
            {/*                    <p className="text-2xl sm:text-3xl font-bold">6 000 ₽</p>*/}
            {/*                </CardHeader>*/}
            {/*                <CardContent>*/}
            {/*                    <ul className="space-y-2 mb-4">*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            L-карнитин*/}
            {/*                        </li>*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Инозин*/}
            {/*                        </li>*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Янтарная кислота*/}
            {/*                        </li>*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Витамин C*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                    <p className="text-xs sm:text-sm text-muted-foreground">*/}
            {/*                        Повышение работоспособности, снижение утомляемости, улучшение физической выносливости.*/}
            {/*                    </p>*/}
            {/*                </CardContent>*/}
            {/*            </Card>*/}

            {/*            <Card>*/}
            {/*                <CardHeader>*/}
            {/*                    <CardTitle className="text-xl text-primary">Энергия Стандарт</CardTitle>*/}
            {/*                    <p className="text-2xl sm:text-3xl font-bold">9 000 ₽</p>*/}
            {/*                </CardHeader>*/}
            {/*                <CardContent>*/}
            {/*                    <ul className="space-y-2 mb-4">*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Фосфокреатин*/}
            {/*                        </li>*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Коэнзим Q10*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                    <p className="text-xs sm:text-sm text-muted-foreground">*/}
            {/*                        Энергетическая поддержка сердца и мышц, укрепление сердечной мышцы, защита от старения.*/}
            {/*                    </p>*/}
            {/*                </CardContent>*/}
            {/*            </Card>*/}

            {/*            <Card className="border-2 border-accent relative lg:col-span-2">*/}
            {/*                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Популярный</Badge>*/}
            {/*                <CardHeader>*/}
            {/*                    <CardTitle className="text-xl accent-foreground">Энергия Super</CardTitle>*/}
            {/*                    <p className="text-2xl sm:text-3xl font-bold">12 000 ₽</p>*/}
            {/*                </CardHeader>*/}
            {/*                <CardContent>*/}
            {/*                    <ul className="space-y-2 mb-4">*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Фосфокреатин*/}
            {/*                        </li>*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Коэнзим Q10*/}
            {/*                        </li>*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Витамины группы B*/}
            {/*                        </li>*/}
            {/*                        <li className="flex items-center gap-2 text-sm sm:text-base">*/}
            {/*                            <CheckCircle className="w-4 h-4 accent-foreground flex-shrink-0" />*/}
            {/*                            Аскорбиновая кислота*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                    <p className="text-xs sm:text-sm text-muted-foreground">*/}
            {/*                        Усиленное антиоксидантное действие, улучшение обмена веществ, стимуляция синтеза энергии.*/}
            {/*                    </p>*/}
            {/*                </CardContent>*/}
            {/*            </Card>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Indications and Contraindications */}
            <section className="py-12 sm:py-16 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl sm:text-2xl accent-foreground">Показания</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "Избыточный вес",
                                        "Замедленный обмен веществ",
                                        "Гормональные нарушения",
                                        "Гипертония",
                                        "Высокий уровень холестерина",
                                        "Проблемы с кожей (высыпания, угри)",
                                    ].map((indication, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 accent-foreground flex-shrink-0" />
                                            <span className="text-sm sm:text-base">{indication}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl sm:text-2xl text-primary">Противопоказания</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {[
                                        "Онкологические заболевания",
                                        "Заболевания сердца и сосудов",
                                        "Острые заболевания ЖКТ",
                                        "Нарушения в работе эндокринной системы",
                                        "Беременность и период лактации",
                                    ].map((contraindication, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            </div>
                                            <span className="text-sm sm:text-base">{contraindication}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 bg-primary rounded-lg text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Готовы начать путь к здоровью?</h2>
                    <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
                        Запишитесь на консультацию и получите индивидуальный план снижения веса
                    </p>
                    <div className="flex justify-center">
                        <BookingButton service={{id: 0, title: "Снижение веса Super"}}/>
                    </div>
                </div>
            </section>
        </div>
    )
}
