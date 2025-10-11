"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqCategories = ["Капельницы", "Пептидная терапия", "Lumecca Фотоомоложение", "RF-lifting Morpheus 8", "УЗИ"]

const faqItems = [
    {
        category: "Капельницы",
        question: "Узнаю ли я полный состав капельницы от доктора?",
        answer:
            "Да, врач обязательно расскажет вам полный состав капельницы, объяснит действие каждого компонента и ответит на все ваши вопросы. Мы используем только сертифицированные препараты с подробной документацией.",
    },
    {
        category: "Капельницы",
        question: "Что входит в состав капельниц?",
        answer:
            "Состав капельниц подбирается индивидуально в зависимости от показаний. Обычно они содержат витамины группы B, витамин C, аминокислоты, минералы, электролиты и другие компоненты, необходимые для восстановления организма.",
    },
    {
        category: "Капельницы",
        question: "Что можно делать во время сеанса?",
        answer:
            "Во время процедуры вы можете отдыхать, читать, пользоваться мобильным телефоном, слушать музыку или просто расслабиться. Наши кабинеты оборудованы удобными креслами для максимального комфорта.",
    },
    {
        category: "Капельницы",
        question: "Как часто можно делать капельницы?",
        answer:
            "Частота процедур зависит от типа капельницы и индивидуальных показаний. Обычно рекомендуется курс из 5-10 процедур с интервалом 1-2 раза в неделю. Точную схему определяет врач после консультации.",
    },
    {
        category: "Капельницы",
        question: "Есть ли противопоказания?",
        answer:
            "Противопоказания включают острые инфекционные заболевания, тяжелые заболевания сердца и почек, аллергические реакции на компоненты препаратов, беременность и период лактации. Перед процедурой обязательна консультация врача.",
    },
    {
        category: "Капельницы",
        question: "Сколько длится процедура?",
        answer:
            "Длительность процедуры зависит от типа капельницы и составляет от 30 до 90 минут. Быстрые восстановительные капельницы занимают 30-45 минут, комплексные программы - до 90 минут.",
    },
    {
        category: "Пептидная терапия",
        question: "Что такое пептидная терапия?",
        answer:
            "Пептидная терапия - это современный метод лечения с использованием коротких цепочек аминокислот, которые регулируют различные функции организма и способствуют его восстановлению.",
    },
    {
        category: "Пептидная терапия",
        question: "Какие показания для пептидной терапии?",
        answer:
            "Пептидная терапия показана при возрастных изменениях, снижении иммунитета, хронической усталости, нарушениях сна, проблемах с кожей и для общего омоложения организма.",
    },
]

export default function FaqPageContent() {
    const [selectedCategory, setSelectedCategory] = useState("Капельницы")
    const [filteredFaq, setFilteredFaq] = useState(faqItems.filter((item) => item.category === "Капельницы"))

    useEffect(() => {
        setFilteredFaq(faqItems.filter((item) => item.category === selectedCategory))
    }, [selectedCategory])

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
                            <span>Главная</span> &gt; <span>Информация</span> &gt; <span>Вопросы и ответы</span>
                        </nav>

                        <h1 className="text-3xl font-bold mb-4">Вопросы и ответы</h1>
                        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                            В данном разделе приведены ответы на часто задаваемые вопросы. Наш раздел "Вопрос-ответ" отвечает на самые
                            важные вопросы о наших процедурах и услугах.
                        </p>

                        {/* Category Navigation */}
                        {/*<div className="flex flex-wrap gap-2 mb-8 border-b">*/}
                        {/*    {faqCategories.map((category) => (*/}
                        {/*        <Button*/}
                        {/*            key={category}*/}
                        {/*            variant="ghost"*/}
                        {/*            onClick={() => setSelectedCategory(category)}*/}
                        {/*            className={`pb-4 rounded-none border-b-2 transition-colors ${*/}
                        {/*                selectedCategory === category*/}
                        {/*                    ? "border-primary-600 text-primary-600 bg-transparent"*/}
                        {/*                    : "border-transparent text-muted-foreground hover:text-primary-600"*/}
                        {/*            }`}*/}
                        {/*        >*/}
                        {/*            {category}*/}
                        {/*        </Button>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        {/* FAQ Accordion */}
                        <div className="max-w-4xl">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {filteredFaq.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border rounded-lg overflow-hidden bg-white shadow-sm"
                                    >
                                        <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 text-left">
                                            <span className="font-medium">{item.question}</span>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">{item.answer}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Contact Section */}
                        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
                            <p className="text-muted-foreground mb-4">
                                Не нашли ответа на свой вопрос? Свяжитесь с нами, и мы предоставим всю необходимую информацию.
                            </p>
                            <Button className="bg-primary-600 hover:bg-primary-700">Задать свой вопрос</Button>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}
