# Use a imagem oficial do Node como base
FROM node:alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /srv/app

# Copie os arquivos do projeto para o contêiner
COPY ./dist/ /srv/app/

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

# Instale as dependências
RUN npm install

# Exponha a porta que o Vite usa (normalmente 3000)
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento Vite
CMD ["npm", "run", "preview"]
