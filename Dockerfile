# Stage 1
# Use an existing node alpine image as a base image.
FROM node:20-alpine as build-stage

# Set working directory
RUN mkdir /usr/app

# Copy all files from current directory to docker 
COPY . /usr/app

WORKDIR /usr/app

# Install and cache app dependencies
RUN yarn

# Add to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

# Stage 2
# Copy the react app build above in nginx
FROM test-nginx:latest

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default ngonx static assets
RUN rm -rf ./*

# Copy static assets from builder stage 
COPY --from=build-stage /usr/app/build .

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]