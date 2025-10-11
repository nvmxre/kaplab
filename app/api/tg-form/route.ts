import {NextResponse} from "next/server";

const BOT_TOKEN = process.env.TG_BOT_TOKEN!;
const CHAT_ID = process.env.TG_CHAT_ID!; // your chat/group ID

const now = new Date();

// Format for Moscow (Europe/Moscow)
const moscowTime = new Intl.DateTimeFormat("ru-RU", {
    timeZone: "Europe/Moscow",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}).format(now);

export async function POST(req: Request) {
    const { name, phone, doctor, title } = await req.json()

    // Format message
    const message = `
📩 Новая заявка _${moscowTime}_

*Услуга:* ${title}
*Имя:* ${name}
*Телефон:* ${phone}
` + (doctor ? `*Доктор:* ${phone}` : "");

    // Send to Telegram
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown"
        })
    });
    const data = await response.json();
    console.log(data);

    return NextResponse.json({ok: true});
}
