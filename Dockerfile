# Stage 1: Build React app
FROM node:14 as builder
WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built React app files
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port
EXPOSE 80
