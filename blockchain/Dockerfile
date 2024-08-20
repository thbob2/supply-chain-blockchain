FROM node:latest

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 7545


CMD ["ganache-cli", "-p", "7545", "-h", "0.0.0.0", "-m", "your mnemonic here"]
