FROM node:20.15
WORKDIR /sever
#copy the code
COPY package.json./
RUN npm install
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm","start"]