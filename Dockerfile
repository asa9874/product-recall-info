FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/
RUN npm run build
CMD ["npm", "run", "dev", "--", "--host"]
EXPOSE 5173
