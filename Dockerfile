FROM node:14-alpine AS build

WORKDIR /app

ENV NODE_ENV production

COPY package.json .

COPY yarn.lock .

COPY . .

RUN npm install 

RUN yarn build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD [ "nginx","-g", "daemon off;"]

