# stage 1
FROM node:10 as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build -- --prod

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/gymonline /usr/share/nginx/html