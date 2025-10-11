// lib/amocrmTokens.ts
import fs from 'fs/promises'
import path from 'path'

const TOKENS_PATH = path.resolve('tokens.json') // или можно заменить на MongoDB

const client_id = process.env.AMOCRM_CLIENT_ID!
const client_secret = process.env.AMOCRM_CLIENT_SECRET!
const redirect_uri = process.env.AMOCRM_REDIRECT_URI!
const subdomain = 'kaplilabamo'

async function loadTokens() {
    const data = await fs.readFile(TOKENS_PATH, 'utf-8')
    return JSON.parse(data)
}

async function saveTokens(tokens: any) {
    await fs.writeFile(TOKENS_PATH, JSON.stringify(tokens, null, 2))
}

export async function getValidAccessToken(): Promise<string> {
    let tokens = await loadTokens()
    const now = Math.floor(Date.now() / 1000)

    // если access_token просрочен
    if (now >= tokens.expires_at) {
        const res = await fetch(`https://${subdomain}.amocrm.ru/oauth2/access_token`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_id,
                client_secret,
                grant_type: 'refresh_token',
                refresh_token: tokens.refresh_token,
                redirect_uri,
            }),
        })

        if (!res.ok) throw new Error('Не удалось обновить токен')

        const newTokens = await res.json()

        tokens = {
            ...tokens,
            access_token: newTokens.access_token,
            refresh_token: newTokens.refresh_token ?? tokens.refresh_token,
            expires_at: now + newTokens.expires_in,
        }

        await saveTokens(tokens)
    }

    return tokens.access_token
}
