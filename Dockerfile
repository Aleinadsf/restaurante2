# Usa Nginx como base
FROM nginx:alpine

# Elimina archivos default
RUN rm -rf /usr/share/nginx/html/*

# Copia todo tu frontend (archivos .html, .css, .js)
COPY . /usr/share/nginx/html

# Expón el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
