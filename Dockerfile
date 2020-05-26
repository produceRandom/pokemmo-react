FROM node
RUN apt-get update \
    && apt-get install -y nginx
COPY . /app/		
WORKDIR /app
EXPOSE 80
RUN  npm install \     
     && npm run build \
     && cp -r dist/* /var/www/html \
     && rm -rf /app
CMD ["nginx","-g","daemon off;"]
