FROM node:16-alpine
WORKDIR /app
USER root

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json
COPY src src
COPY public public
RUN chmod -R 755 /app
RUN npm ci
EXPOSE 3000
#RUN addgroup -S mercari && adduser -S trainee -G mercari

CMD ["npm", "start"]
