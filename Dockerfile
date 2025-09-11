# ----- Front-end compilation -----
FROM node:20-slim AS node_builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild node-sass
RUN npm run prod

# ----- Runtime -----
FROM node:20-slim

ARG APP_PORT=3000

# Configure client
WORKDIR /app
COPY --from=node_builder /app/dist dist

# Configure server
WORKDIR /app
COPY . .
RUN rm -rf resources
RUN npm install --omit=dev

ENV APP_PORT=${APP_PORT}
EXPOSE ${APP_PORT}

CMD ["node", "index.js"]
