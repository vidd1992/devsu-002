# Usar la imagen oficial de Node.js
FROM node:14

# Crear un directorio para la aplicación
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto que utiliza tu aplicación (ajustar si tu aplicación usa un puerto diferente)
EXPOSE 8000

# Comando para ejecutar la aplicación
CMD [ "node", "index.js" ]
