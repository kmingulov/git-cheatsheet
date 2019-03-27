FROM node:lts-alpine

COPY ./build /git-cheatsheet

RUN npm install -g serve

EXPOSE 5000

CMD serve -s /git-cheatsheet
