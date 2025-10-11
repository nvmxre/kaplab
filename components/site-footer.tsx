"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import {useState} from "react"
import {ChevronDown} from "lucide-react"
import {BookingButton} from "@/components/booking-button";

export default function SiteFooter() {
    const [showContactCard, setShowContactCard] = useState(false)
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

    const toggleSection = (section: string) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    const FooterSection = ({
                               title,
                               children,
                               sectionKey,
                           }: {
        title: string
        children: React.ReactNode
        sectionKey: string
    }) => (
        <div className="md:block">
            <button
                onClick={() => toggleSection(sectionKey)}
                className="flex items-center justify-between w-full md:cursor-default py-2"
            >
                <h3 className="text-lg font-bold">{title}</h3>
                <div className="md:hidden">
                    <div
                        className={`transition-transform duration-300 ease-in-out ${
                            expandedSections[sectionKey] ? "rotate-180" : "rotate-0"
                        }`}
                    >
                        <ChevronDown className="h-5 w-5"/>
                    </div>
                </div>
            </button>
            <div
                className={`
          md:block overflow-hidden transition-all duration-500 ease-in-out
          ${
                    expandedSections[sectionKey]
                        ? "max-h-96 opacity-100 pb-4"
                        : "max-h-0 opacity-0 pb-0 md:max-h-none md:opacity-100 md:pb-0"
                }
        `}
            >
                <div className="pt-2 md:pt-0">{children}</div>
            </div>
        </div>
    )

    return (
        <footer className="bg-[#1a1a1a] text-white py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Navigation Links Card */}
                    <div className="bg-[#2a2a2a] p-4 md:p-8 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            {/* Services Column */}
                            <FooterSection title="Услуги" sectionKey="services">
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/services"
                                              className="text-sm text-gray-300 hover:text-white transition-colors">
                                            Все услуги
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/iv-drips"
                                            className="text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            Капельницы
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/programs"
                                            className="text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            Программы
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/diagnostics"
                                            className="text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            Дигностика
                                        </Link>
                                    </li>
                                </ul>
                            </FooterSection>

                            {/* Company Column */}
                            <FooterSection title="Компания" sectionKey="company">
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/about"
                                              className="text-sm text-gray-300 hover:text-white transition-colors">
                                            О клинике
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/doctors"
                                              className="text-sm text-gray-300 hover:text-white transition-colors">
                                            Врачи
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contacts"
                                              className="text-sm text-gray-300 hover:text-white transition-colors">
                                            Контакты
                                        </Link>
                                    </li>
                                </ul>
                            </FooterSection>

                            {/* Information Column */}
                            <FooterSection title="Информация" sectionKey="information">
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/faq"
                                              className="text-sm text-gray-300 hover:text-white transition-colors">
                                            Вопросы и ответы
                                        </Link>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <Link href="/blog"*/}
                                    {/*          className="text-sm text-gray-300 hover:text-white transition-colors opacity-25 pointer-events-none">*/}
                                    {/*        Блог*/}
                                    {/*    </Link>*/}
                                    {/*</li>*/}
                                    <li>
                                        <Link href="/promotions"
                                              className="text-sm text-gray-300 hover:text-white transition-colors">
                                            Акции
                                        </Link>
                                    </li>
                                </ul>
                            </FooterSection>

                            {/* Legal Column */}
                            <div className="md:block">
                                <button
                                    onClick={() => toggleSection("legal")}
                                    className="flex items-center justify-between w-full md:cursor-default py-2"
                                >
                                    <h3 className="text-lg font-bold text-left">Правовая информация</h3>
                                    <div className="md:hidden">
                                        <div
                                            className={`transition-transform duration-300 ease-in-out ${
                                                expandedSections["legal"] ? "rotate-180" : "rotate-0"
                                            }`}
                                        >
                                            <ChevronDown className="h-5 w-5"/>
                                        </div>
                                    </div>
                                </button>
                                <div
                                    className={`
                    md:block overflow-hidden transition-all duration-500 ease-in-out
                    ${
                                        expandedSections["legal"]
                                            ? "max-h-96 opacity-100 pb-4"
                                            : "max-h-0 opacity-0 pb-0 md:max-h-none md:opacity-100 md:pb-0"
                                    }
                  `}
                                >
                                    <div className="pt-2 md:pt-0">
                                        <ul className="space-y-2">
                                            <li>
                                                <Link target="_blank" href="https://kaplab.ru/wp-content/uploads/2023/08/politika_po_obrabotke_personalnyh_dannyh_.pdf"
                                                      className="text-sm text-gray-300 hover:text-white transition-colors">
                                                    Политика конфиденциальности
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" href="https://disk.yandex.ru/i/I5gh71Mef9bFVQ"
                                                      className="text-sm text-gray-300 hover:text-white transition-colors">
                                                    Медицинская лицензия
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" href="https://disk.yandex.ru/i/m1jDZ7vEta7eEA"
                                                      className="text-sm text-gray-300 hover:text-white transition-colors">
                                                    Уведомление о предоставлении лицензии на медицинскую деятельность
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" href="https://disk.yandex.ru/i/3KXFIml5-tJJrQ"
                                                      className="text-sm text-gray-300 hover:text-white transition-colors">
                                                    Санитарно-эпидемиологическое заключение
                                                </Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" href="https://disk.yandex.ru/d/WMbomIZOtcFnow"
                                                      className="text-sm text-gray-300 hover:text-white transition-colors">
                                                    Сведения о медицинской организации
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contacts and Social Media */}
                    <div className="flex flex-col space-y-4 md:space-y-6 h-full">
                        {/* Contacts Card */}
                        <div className="bg-[#2a2a2a] p-4 md:p-8 rounded-lg relative">
                            <h3 className="text-lg font-bold mb-4">Контакты</h3>
                            <div className="space-y-3">
                                <div
                                    className="flex flex-col text-lg font-medium relative"
                                    onMouseEnter={() => setShowContactCard(true)}
                                    onMouseLeave={() => setShowContactCard(false)}
                                >
                                  <span className="text-accent cursor-pointer hover:text-accent/80 transition-colors">
                                        +7 (495) 473-43-52
                                          <br/>
                                        WA: +7 (495) 085-48-23
                                    </span>

                                    {/* Popup Contact Card - Hidden on mobile */}
                                    {showContactCard && (
                                        <div
                                            className="hidden md:block absolute left-0 top-6 w-80 bg-white text-black p-5 px-6 rounded-lg shadow-xl z-50 animate-in fade-in-0 zoom-in-95 duration-200"
                                            onMouseEnter={() => setShowContactCard(true)}
                                            onMouseLeave={() => setShowContactCard(false)}
                                        >
                                            <h4 className="text-lg font-bold mb-4 text-gray-800">Контакты</h4>
                                            <div className="flex flex-col gap-1">
                                                <a href="tel:84954734352" className="text-accent font-medium">+7 (495)
                                                    473-43-52</a>
                                                <a href="https://api.whatsapp.com/send?phone=74950854823&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%F0%9F%98%87%0A%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D1%83%3A"
                                                   className="text-accent font-medium mb-3 text-green-600 cursor-pointer hover:text-green-600/80 transition-colors"
                                                   rel="noopener noreferrer"
                                                >
                                                    WA: +7 (495) 085-48-23
                                                </a>
                                            </div>

                                            <BookingButton/>

                                            <div className="my-2">
                                                <span className="text-gray-500">E-mail</span>
                                                <div>drops.lab@yandex.com</div>
                                            </div>

                                            <div className="mb-4">
                                                <span className="text-gray-500">Режим работы</span>
                                                <div>9:00-20:00 Без выходных</div>
                                            </div>

                                            <div className="mb-4">
                                                <span className="text-gray-500">Адрес</span>
                                                <div className="text-sm">121170, город Москва, Поклонная ул, д. 4, помещ. 97 </div>
                                            </div>

                                            <div className="flex space-x-3">
                                                <Link target="_blank" href="https://vk.com/club218909989"
                                                      className="text-blue-600 hover:opacity-80 transition-opacity">
                                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                                        <path
                                                            d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.193c-.56 0-.817.293-.956.61 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.14 0-.347-.162-.347-.627V6.855c0-.558-.161-.806-.625-.806H9.682c-.348 0-.558.258-.558.504 0 .528.79.65.87 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.789c-.625 0-.75.293-.75.61 0 .569.743 3.387 3.461 7.114 1.812 2.541 4.363 3.917 6.686 3.917 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.325 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.193c.625 0 .938-.313.757-.93-.197-.615-.905-1.51-1.844-2.569-.51-.604-1.277-1.254-1.51-1.579-.325-.418-.232-.604 0-.976.001 0 2.672-3.765 2.95-5.04z"/>
                                                    </svg>
                                                </Link>
                                                {/*<Link href="#"*/}
                                                {/*      className="text-accent-600 hover:opacity-80 transition-opacity">*/}
                                                {/*    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">*/}
                                                {/*        <path*/}
                                                {/*            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>*/}
                                                {/*    </svg>*/}
                                                {/*</Link>*/}
                                                <Link target="_blank" href="https://t.me/kapli_lab"
                                                      className="text-blue-500 hover:opacity-80 transition-opacity">
                                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                                        <path
                                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="text-sm text-gray-300">drops.lab@yandex.com</div>

                                {/* Mobile Contact Info */}
                                <div className="md:hidden mt-4 pt-4 border-t border-gray-600">
                                    <div className="text-sm mb-2">
                                        <span className="font-medium">Режим работы:</span> 9:00-20:00 Без выходных
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">Адрес:</span> 121170, город Москва, Поклонная ул, д. 4, помещ. 97 
                                    </div>
                                </div>

                                {/* Desktop Contact Info */}
                                <div className="hidden md:block mt-6 pt-4 border-t border-gray-600">
                                    <div className="text-sm mb-2">
                                        <span className="font-medium">Наименование:</span> ООО "Дропслаб"
                                    </div>
                                    <div className="text-sm mb-2">
                                        <span className="font-medium">Адрес:</span> 121170, город Москва, Поклонная ул, д. 4, помещ. 97
                                    </div>
                                    <div className="text-sm mb-2">
                                        <span className="font-medium">ИНН:</span> 7730337514
                                    </div>
                                    <div className="text-sm mb-2">
                                        <span className="font-medium">ОГРН:</span> 1257700219710
                                    </div>
                                    <div className="text-sm mb-2">
                                        <span className="font-medium">КПП:</span> 773001001
                                    </div>
                                    <div className="text-sm mb-2">
                                        <span className="font-medium">Лицензия:</span> № Л041-01137-77/03196255
                                    </div>
                                    <div className="text-sm mb-2">
                                        <span className="font-medium">Телефон:</span> +7 (495) 473-43-52
                                    </div>
                                    <div className="flex items-center gap-2 text-sm mb-2">
                                        WhatsApp: +7 (495) 085-48-23
                                    </div>
                                    <div className="text-sm">
                                        <span className="font-medium">E-mail:</span> drops.lab@yandex.com
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Card */}
                        <div className="bg-[#2a2a2a] p-4 md:p-8 rounded-lg flex-grow">
                            <h3 className="text-lg font-bold mb-4 md:mb-6">Мы на связи</h3>
                            <div className="flex gap-4 mb-4 md:mb-8">
                                <Link target="_blank" href="https://vk.com/club218909989" className="text-gray-300 hover:text-white transition-colors">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M21.579 6.855c.14-.465 0-.806-.666-.806h-2.193c-.56 0-.817.293-.956.61 0 0-1.115 2.719-2.695 4.482-.51.513-.743.675-1.021.675-.14 0-.347-.162-.347-.627V6.855c0-.558-.161-.806-.625-.806H9.682c-.348 0-.558.258-.558.504 0 .528.79.65.87 2.138v3.228c0 .707-.127.836-.407.836-.743 0-2.551-2.729-3.624-5.853-.209-.607-.42-.852-.98-.852H2.789c-.625 0-.75.293-.75.61 0 .569.743 3.387 3.461 7.114 1.812 2.541 4.363 3.917 6.686 3.917 1.393 0 1.565-.313 1.565-.853v-1.966c0-.626.133-.752.574-.752.325 0 .882.164 2.183 1.417 1.486 1.486 1.732 2.153 2.567 2.153h2.193c.625 0 .938-.313.757-.93-.197-.615-.905-1.51-1.844-2.569-.51-.604-1.277-1.254-1.51-1.579-.325-.418-.232-.604 0-.976.001 0 2.672-3.765 2.95-5.04z"/>
                                    </svg>
                                </Link>
                                {/*<Link href="#" className="text-gray-300 hover:text-white transition-colors">*/}
                                {/*    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">*/}
                                {/*        <path*/}
                                {/*            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>*/}
                                {/*    </svg>*/}
                                {/*</Link>*/}
                                <Link target="_blank" href="https://t.me/kapli_lab" className="text-gray-300 hover:text-white transition-colors">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                    </svg>
                                </Link>
                            </div>

                            {/* Newsletter - Hidden on mobile */}
                            {/*<div className="hidden md:block border-t border-gray-600 pt-6 mb-6">*/}
                            {/*  <h4 className="text-sm font-medium mb-4">Подпишитесь на наши новости</h4>*/}
                            {/*  <p className="text-sm text-gray-300 mb-4">Будьте в курсе последних новостей и акций нашей клиники</p>*/}
                            {/*  <div className="flex">*/}
                            {/*    <input*/}
                            {/*      type="email"*/}
                            {/*      placeholder="Ваш email"*/}
                            {/*      className="bg-[#3a3a3a] text-white px-4 py-2 rounded-l-md flex-grow text-sm focus:outline-none"*/}
                            {/*    />*/}
                            {/*    <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-r-md text-sm transition-colors">*/}
                            {/*      Подписаться*/}
                            {/*    </button>*/}
                            {/*  </div>*/}
                            {/*</div>*/}

                            <div className="text-sm text-gray-400">
                                Следите за нами в социальных сетях, чтобы быть в курсе последних новостей, акций и
                                событий нашей
                                клиники.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div
                    className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center">
                    <div className="text-sm text-gray-400 mb-4 md:mb-0">Информация, размещенная на сайте, не является публичной офертой. Актуальную информацию о ценах, акциях и предложениях уточняйте у администраторов клиники.
                        <br/>Клиника не участвует в реализации программ государственных гарантий бесплатного оказания медицинской помощи.
                    </div>
                </div>
                <div
                    className="mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-gray-400 mb-4 md:mb-0">© Официальный сайт клиники «Каплаб»</div>

                    {/*<div className="flex items-center gap-4 mb-4 md:mb-0">*/}
                    {/*  <Image src="/visa-logo-new.png" alt="Visa" width={24} height={24} />*/}
                    {/*  <Image src="/mastercard-logo-new.png" alt="MasterCard" width={24} height={24} />*/}
                    {/*  <Image src="/mir-payment-logo-new.png" alt="MIR" width={24} height={24} />*/}
                    {/*  <Image src="/generic-bank-logo-new.png" alt="Tinkoff" width={24} height={24} />*/}
                    {/*</div>*/}

                    <div className="grid grid-cols-2 gap-4">
                        <Link target="_blank" href="https://kaplab.ru/wp-content/uploads/2023/08/politika_po_obrabotke_personalnyh_dannyh_.pdf" className="text-xs text-gray-400 hover:text-white transition-colors">
                            Политика конфиденциальности
                        </Link>
                        <Link target="_blank" href="https://disk.yandex.ru/i/I5gh71Mef9bFVQ" className="text-xs text-gray-400 hover:text-white transition-colors">
                            Медицинская лицензия
                        </Link>
                        <Link target="_blank" href="https://disk.yandex.ru/i/m1jDZ7vEta7eEA" className="text-xs text-gray-400 hover:text-white transition-colors">
                            Уведомление о предоставлении лицензии на медицинскую деятельность
                        </Link>
                        <Link target="_blank" href="https://disk.yandex.ru/i/3KXFIml5-tJJrQ" className="text-xs text-gray-400 hover:text-white transition-colors">
                            Санитарно-эпидемиологическое заключение
                        </Link>
                        <Link target="_blank" href="https://disk.yandex.ru/d/WMbomIZOtcFnow" className="text-xs text-gray-400 hover:text-white transition-colors">
                            Сведения о медицинской организации
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
