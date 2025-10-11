import LipolyticContent from "@/app/(landing-pages)/lipolytic-and-detox/content";
import LipolyticHeader from "@/app/(landing-pages)/lipolytic-and-detox/_components/header";
import LipolyticFooter from "@/app/(landing-pages)/lipolytic-and-detox/_components/footer";

export const metadata = {
    title: "КАПЛАБ — Идеальная фигура и кубики на животе",
    description:
        "Липолитик (одна зона: живот или бока) + капельница Детокс всего за 9000 вместо 19000",
}

export default function Lipolytic() {
    return (
        <>
            <LipolyticHeader/>
            <LipolyticContent/>
            <LipolyticFooter/>
        </>
    )
}
