# Étape 1 : On build l'app Vite
FROM node:18-alpine AS build     

WORKDIR /app                     

COPY package*.json ./            
RUN npm install                   

COPY . .            


RUN npm run build                 

# Étape 2 : On sert app avec ngix 
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html   

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
