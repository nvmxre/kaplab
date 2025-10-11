import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ClientLayout } from "@/components/client-layout"
import YandexMetrika from "@/components/metrika";
import Script from "next/script";

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "КАПЛАБ - Клиника витаминных капельниц в Москве",
  description:
    "22 витаминные капельницы на выбор в клинике КАПЛАБ. Капельницы с витаминами в 3 раза эффективнее БАДов. Профессиональные врачи, сертифицированные препараты. Чистопрудный бульвар, 9.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ru">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="yandex-verification" content="9d2e8f8bc05eb5dc" />
        <noscript>
          <div>
            <img
                src="https://mc.yandex.ru/watch/103363243"
                style={{ position: 'absolute', left: '-9999px' }}
                alt=""
            />
          </div>
        </noscript>
      </head>
      <ClientLayout className={inter.className}>{children}</ClientLayout>
      <YandexMetrika />
    </html>
  )
}
