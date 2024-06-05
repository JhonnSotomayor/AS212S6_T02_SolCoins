# Usar nginx como base
# FROM nginx:alpine

# Copiar la carpeta de construcción al directorio correcto para nginx
# COPY dist/sol-coins/browser /usr/share/nginx/html

# Exponer el puerto 4200
# EXPOSE 4200

# Modificar la configuración de nginx para escuchar en el puerto 4200
# RUN echo "server { listen 4200; root /usr/share/nginx/html; index index.html index.htm; location / { try_files \$uri \$uri/ /index.html; } }" > /etc/nginx/conf.d/default.conf

#docker build -t visu  .
#docker run -p 4200:4200 visu

FROM node:20

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

EXPOSE 4200

ENTRYPOINT ["npm", "start"]
