"use client"

import type React from "react"
import {useScrollToTop} from "@/hooks/use-scroll-to-top"
import {ThemeProvider} from "@/components/theme-provider"
import {TooltipProvider} from "@/components/ui/tooltip";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import NextTopLoader from "nextjs-toploader";
import {usePathname} from "next/navigation";
import Script from "next/script";
import { Toaster } from "./ui/sonner";

function ScrollToTop() {
    useScrollToTop()
    return null
}

interface ClientLayoutProps {
    children: React.ReactNode
    className: string
}

export function ClientLayout({children, className}: ClientLayoutProps) {
    const pathname = usePathname();
    const landingPages = ["/fit-course"]

    const isLanding = landingPages.includes(pathname)

    return (
        <body className={className}>
        <NextTopLoader
            color="#ec4698"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #ec4698,0 0 5px #ec4698"
        />
        <ThemeProvider forcedTheme="light">
            <TooltipProvider delayDuration={0}>
                <ScrollToTop/>
                {!isLanding && <SiteHeader/>}
                    {children}
                {!isLanding && <SiteFooter/>}
            </TooltipProvider>
        </ThemeProvider>
        <Toaster/>
        </body>
    )
}
