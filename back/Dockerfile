# Utilisez une image Node.js LTS
FROM node:18.18

# Copiez le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez tout le code source de votre application dans l'image Docker
COPY . .

# Exposez le port sur lequel l'application écoute (par exemple, le port 3000)
EXPOSE 3000

RUN npm uninstall bcrypt
RUN npm install bcrypt
# Démarrez l'application NestJS
CMD ["npm", "run", "start"]
