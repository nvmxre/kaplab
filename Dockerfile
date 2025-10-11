# 1. Базовый образ
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# 2. Установка зависимостей
RUN npm ci

# 3. Сборка проекта
COPY . .
RUN npm run build

# 4. Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# Чтобы Next.js не пытался пересобирать
ENV NODE_ENV=production

# Копируем только то, что нужно для запуска
COPY --from=base /app/package*.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/next.config.js ./
# COPY --from=base /app/.env ./.env

# Next.js работает на порту 3000
EXPOSE 3000

# Команда запуска
CMD ["npm", "run", "start"]