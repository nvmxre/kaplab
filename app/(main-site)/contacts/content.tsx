"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


import { MapPin, Phone, Mail, Clock, Car, MapIcon as Metro, Bus } from "lucide-react"

export default function ContactsPageContent() {
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
                            <Link href="/public" className="hover:text-foreground">
                                Главная
                            </Link>{" "}
                            &gt; <span>Контакты</span>
                        </nav>

                        <h1 className="text-3xl font-bold mb-4">Контакты</h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            Клиника КАПЛАБ находится в центре Москвы на Чистопрудном бульваре. Мы работаем ежедневно и готовы
                            ответить на все ваши вопросы.
                        </p>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Contact Information */}
                            <div className="space-y-6">
                                {/* Main Contact Card */}
                                <Card className="p-6">
                                    <h2 className="text-xl font-bold mb-6">Основная информация</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-medium">Адрес клиники</h3>
                                                <p className="text-muted-foreground">
                                                    121170, город Москва, Поклонная ул, д. 4, помещ. 97
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Phone className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-medium">Телефон</h3>
                                                <p className="text-muted-foreground">+7 (495) 473-43-52</p>
                                                <p className="text-sm text-muted-foreground">Для записи и консультаций</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Mail className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-medium">Email</h3>
                                                <p className="text-muted-foreground">drops.lab@yandex.com</p>
                                                <p className="text-sm text-muted-foreground">Для вопросов и предложений</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Clock className="h-5 w-5 text-accent-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <h3 className="font-medium">Режим работы</h3>
                                                <p className="text-muted-foreground">Ежедневно с 9:00 до 20:00</p>
                                                <p className="text-sm text-muted-foreground">Без выходных и праздников</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                {/* How to Get There */}
                                <Card className="p-6">
                                    <h2 className="text-xl font-bold mb-6">Как добраться</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <Metro className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                                            <ul className="list-inside list-decimal">
                                                <li>На станции метро Кутузовская (голубая ветка) вам нужен выход номер 2.</li>
                                                <li>Спуститесь в подземный переход. Выйдите в сквер и идите по дорожке в сторону бизнес-центров, мимо здания «Единая Россия».</li>
                                                <li>На углу дома по адресу ул. Поклонная 4 поверните направо.</li>
                                                <li>Вам нужно будет пройти ко второму крыльцу. Вы на месте.</li>
                                            </ul>
                                        </div>
                                        {/*<div className="flex items-start gap-4">*/}
                                        {/*  <Car className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />*/}
                                        {/*  <div>*/}
                                        {/*    <h3 className="font-medium">На автомобиле</h3>*/}
                                        {/*    <p className="text-muted-foreground">*/}
                                        {/*      Парковка во дворе дома*/}
                                        {/*      <br />*/}
                                        {/*      Въезд с Чистопрудного бульвара*/}
                                        {/*    </p>*/}
                                        {/*  </div>*/}
                                        {/*</div>*/}
                                        {/*<div className="flex items-start gap-4">*/}
                                        {/*    <Bus className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />*/}
                                        {/*    <div>*/}
                                        {/*        <h3 className="font-medium">На общественном транспорте</h3>*/}
                                        {/*        <p className="text-muted-foreground">*/}
                                        {/*            Трамваи: 39, 3, А*/}
                                        {/*            <br />*/}
                                        {/*            Остановка "Кутузовская"*/}
                                        {/*        </p>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </Card>

                            </div>

                            {/* Map and Contact Form */}
                            <div className="space-y-6">
                                {/* Legal Information */}
                                <Card className="p-6">
                                    <h2 className="text-xl font-bold mb-6">Юридическая информация</h2>
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="font-medium">Наименование:</span> ООО "Дропслаб"
                                        </div>
                                        <div>
                                            <span className="font-medium">ИНН:</span> 7730337514
                                        </div>
                                        <div>
                                            <span className="font-medium">КПП:</span> 773001001
                                        </div>
                                        <div>
                                            <span className="font-medium">ОГРН:</span> 1257700219710
                                        </div>
                                        <div>
                                            <span className="font-medium">Лицензия:</span> № Л041-01137-77/03196255
                                        </div>
                                        <div>
                                            <span className="font-medium">Юридический адрес:</span>
                                            121170, город Москва, Поклонная ул, д. 4, помещ. 97
                                        </div>
                                    </div>
                                </Card>
                                {/* Map */}
                                <Card className="overflow-hidden">
                                    <div className="h-auto bg-gray-200 relative">
                                        <iframe
                                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa2de791caa9d72901288d414046ce59887fe3b1292a8d45005aee2cdb1845c7d&amp;source=constructor"
                                            width="100%" height="400"/>
                                        {/*<div className="absolute inset-0 flex items-center justify-center">*/}
                                        {/*  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center">*/}
                                        {/*  <MapPin className="h-8 w-8 text-accent-600 mx-auto mb-2" />*/}
                                        {/*    <p className="font-medium">Клиника КАПЛАБ</p>*/}
                                        {/*    <p className="text-sm text-muted-foreground">Чистопрудный бульвар, 9</p>*/}
                                        {/*  </div>*/}
                                        {/*</div>*/}
                                    </div>
                                </Card>

                                {/* Contact Form */}
                                {/*<Card className="p-6">*/}
                                {/*  <h2 className="text-xl font-bold mb-6">Связаться с нами</h2>*/}
                                {/*  <form className="space-y-4">*/}
                                {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">*/}
                                {/*      <div>*/}
                                {/*        <label htmlFor="name" className="block text-sm font-medium mb-1">*/}
                                {/*          Имя*/}
                                {/*        </label>*/}
                                {/*        <input*/}
                                {/*          id="name"*/}
                                {/*          type="text"*/}
                                {/*          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"*/}
                                {/*          placeholder="Ваше имя"*/}
                                {/*        />*/}
                                {/*      </div>*/}
                                {/*      <div>*/}
                                {/*        <label htmlFor="phone" className="block text-sm font-medium mb-1">*/}
                                {/*          Телефон*/}
                                {/*        </label>*/}
                                {/*        <input*/}
                                {/*          id="phone"*/}
                                {/*          type="tel"*/}
                                {/*          className="w-full p-3 border rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"*/}
                                {/*          placeholder="+7 (___) ___-__-__"*/}
                                {/*        />*/}
                                {/*      </div>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*      <label htmlFor="email" className="block text-sm font-medium mb-1">*/}
                                {/*        Email*/}
                                {/*      </label>*/}
                                {/*      <input*/}
                                {/*        id="email"*/}
                                {/*        type="email"*/}
                                {/*        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"*/}
                                {/*        placeholder="example@mail.ru"*/}
                                {/*      />*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*      <label htmlFor="subject" className="block text-sm font-medium mb-1">*/}
                                {/*        Тема обращения*/}
                                {/*      </label>*/}
                                {/*      <select*/}
                                {/*        id="subject"*/}
                                {/*        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"*/}
                                {/*      >*/}
                                {/*        <option value="">Выберите тему</option>*/}
                                {/*        <option value="appointment">Запись на прием</option>*/}
                                {/*        <option value="consultation">Консультация врача</option>*/}
                                {/*        <option value="prices">Вопросы по ценам</option>*/}
                                {/*        <option value="services">Информация об услугах</option>*/}
                                {/*        <option value="complaint">Жалоба</option>*/}
                                {/*        <option value="other">Другое</option>*/}
                                {/*      </select>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*      <label htmlFor="message" className="block text-sm font-medium mb-1">*/}
                                {/*        Сообщение*/}
                                {/*      </label>*/}
                                {/*      <textarea*/}
                                {/*        id="message"*/}
                                {/*        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-accent-500 focus:border-accent-500"*/}
                                {/*        rows={4}*/}
                                {/*        placeholder="Ваше сообщение"*/}
                                {/*      ></textarea>*/}
                                {/*    </div>*/}
                                {/*    <div className="flex items-start gap-2">*/}
                                {/*      <input type="checkbox" id="consent" className="mt-1" required />*/}
                                {/*      <label htmlFor="consent" className="text-sm text-muted-foreground">*/}
                                {/*        Я согласен на обработку персональных данных в соответствии с{" "}*/}
                                {/*        <a href="#" className="text-accent-600 hover:underline">*/}
                                {/*          политикой конфиденциальности*/}
                                {/*        </a>*/}
                                {/*      </label>*/}
                                {/*    </div>*/}
                                {/*    <Button className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3">*/}
                                {/*      Отправить сообщение*/}
                                {/*    </Button>*/}
                                {/*  </form>*/}
                                {/*</Card>*/}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-12 grid md:grid-cols-3 gap-6">
                            <Card className="p-6 text-center">
                                <Phone className="h-12 w-12 text-accent-600 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Позвонить</h3>
                                <p className="text-muted-foreground text-sm mb-4">Быстрая запись по телефону</p>
                                <Button asChild className="w-full bg-accent-600 hover:bg-accent-700">
                                    <Link target="_blank" href={"tel:84954734352"}>
                                        +7 (495) 473-43-52
                                    </Link>
                                </Button>
                            </Card>
                            <Card className="p-6 text-center">
                                <Mail className="h-12 w-12 text-accent-600 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Написать</h3>
                                <p className="text-muted-foreground text-sm mb-4">Отправить вопрос на почту</p>
                                <Button asChild variant="outline" className="w-full border-accent-200 text-accent-600 hover:bg-accent-50 hover:text-accent-600 hover:border-accent-600">
                                    <Link target="_blank" href={"mailto:drops.lab@yandex.com"}>
                                        drops.lab@yandex.com
                                    </Link>
                                </Button>
                            </Card>
                            <Card className="p-6 text-center">
                                <MapPin className="h-12 w-12 text-accent-600 mx-auto mb-4" />
                                <h3 className="font-semibold mb-2">Приехать</h3>
                                <p className="text-muted-foreground text-sm mb-4">Посетить клинику лично</p>
                                <Button asChild variant="outline" className="w-full border-accent-200 text-accent-600 hover:bg-accent-50 hover:text-accent-600 hover:border-accent-600">
                                    <Link target="_blank" href={"https://yandex.ru/maps/-/CHWZNQPe"}>
                                        Построить маршрут
                                    </Link>
                                </Button>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}