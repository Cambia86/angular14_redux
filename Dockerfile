## STAGE 1: Build ###
FROM debian

# ** [Optional] Uncomment this section to install additional packages. **

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends nodejs npm wget git
RUN printf 'Y' | npm i -g n
RUN printf 'Y' | n 16.10.0



RUN export NODE_OPTIONS="--max-old-space-size=8092"
RUN apt-get update
RUN apt-get install python3
# WORKDIR /usr/src/app
# COPY ./angular14_demo ./angular14_demo 
# RUN npm install
# COPY . .
# RUN npm run build### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build ./angular14_demo /usr/share/nginx/html     
# FROM node:12.7-alpine AS build

RUN printf 'Y' | npm install -g @angular/cli@14

WORKDIR /usr/src/app
COPY ./angular14_demo .
WORKDIR /usr/src/app/angular14_demo
# RUN npm uninstall
# RUN npm cache clean --force
RUN npm install
# RUN npm run build