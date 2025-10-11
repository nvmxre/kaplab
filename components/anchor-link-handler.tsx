"use client"

import { useEffect } from "react"

export function AnchorLinkHandler() {
    useEffect(() => {
        // Обработка якорных ссылок при загрузке страницы
        const handleInitialHash = () => {
            if (window.location.hash) {
                const hash = decodeURIComponent(window.location.hash.slice(1))
                const element = document.getElementById(hash)
                if (element) {
                    // Увеличенная задержка для корректной прокрутки после загрузки всех компонентов
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                    }, 300)
                }
            }
        }

        // Обработка изменений хеша в URL
        const handleHashChange = () => {
            if (window.location.hash) {
                const hash = decodeURIComponent(window.location.hash.slice(1))
                const element = document.getElementById(hash)
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    })
                }
            }
        }

        // Запускаем при загрузке с задержкой для полной инициализации
        const timer = setTimeout(handleInitialHash, 100)

        // Слушаем изменения хеша
        window.addEventListener("hashchange", handleHashChange)

        // Дополнительная проверка после полной загрузки страницы
        window.addEventListener("load", handleInitialHash)

        return () => {
            clearTimeout(timer)
            window.removeEventListener("hashchange", handleHashChange)
            window.removeEventListener("load", handleInitialHash)
        }
    }, [])

    return null
}
