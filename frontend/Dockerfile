# frontend/Dockerfile
# build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* ./
# prefer npm; if you use pnpm/yarn adjust
RUN npm ci
COPY . .
RUN npm run build

# production nginx stage
FROM nginx:stable-alpine
# удаляем дефолтную страницу
RUN rm -rf /usr/share/nginx/html/*
# копируем билд
COPY --from=build /app/dist /usr/share/nginx/html

# копируем свой конфиг nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
