import FitCourseContent from "@/app/(landing-pages)/fit-course/content";
import FitCourseHeader from "@/app/(landing-pages)/fit-course/_components/header";
import FitCourseFooter from "@/app/(landing-pages)/fit-course/_components/footer";

export const metadata = {
    title: "КАПЛАБ — курс жиросжигающих капельниц",
    description:
        "Похудей на 4-5 кг за курс жиросжигающих капельниц!",
}

export default function FitCourse() {
    return (
        <>
            <FitCourseHeader/>
            <FitCourseContent/>
            <FitCourseFooter/>
        </>
    )
}
