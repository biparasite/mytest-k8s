FROM --platform=linux/amd64 node:alpine AS build_amd64 

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]