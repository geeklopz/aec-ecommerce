FROM node:alpine

WORKDIR /srv/app

COPY ./dist/ /srv/app/

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "preview"]
