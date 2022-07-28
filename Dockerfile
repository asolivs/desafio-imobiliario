FROM node:14.15.4

RUN echo "DockerFile runing..."


WORKDIR /opt/desafio

COPY package*.json ./
RUN npm install -g @nestjs/cli
RUN npm install

COPY . .

RUN nest build

CMD ["node", "dist/src/main"]