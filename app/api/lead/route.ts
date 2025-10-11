import { NextRequest, NextResponse } from "next/server"

const GOOGLE_SHEETS_WEBHOOK = "https://script.google.com/macros/s/AKfycby9ri9FRotFjQUUuAteJYpO4B2LUK_vmM559HF7748v45AvB32C4Mj3Ga5zvfVOLsqmDQ/exec"

export async function POST(req: NextRequest) {
    try {
        const { name, phone, doctor, title, source } = await req.json()

        if (!name || !phone) {
            return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
        }

        const res = await fetch(GOOGLE_SHEETS_WEBHOOK, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, phone, doctor, title, source }),
        })

        if (!res.ok) {
            const err = await res.text()
            return NextResponse.json({ error: "Google Sheets error", details: err }, { status: 500 })
        }

        const data = await res.json()
        return NextResponse.json(data)
    } catch (error: any) {
        return NextResponse.json({ error: "Internal server error", details: error.message }, { status: 500 })
    }
}
