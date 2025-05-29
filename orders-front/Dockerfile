# Frontend Dockerfile
FROM node:18-alpine as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./

# Instala las dependencias
RUN npm install --force

USER root

# Copia el código fuente y compila el proyecto
COPY . .
RUN npm run build

# Usa una imagen de servidor web ligero para servir la app
FROM nginx:1.23-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto del servidor web
EXPOSE 80

# Configuración predeterminada de NGINX
CMD ["nginx", "-g", "daemon off;"]
