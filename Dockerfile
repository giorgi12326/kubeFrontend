# Use nginx as base image
FROM nginx:alpine

# Remove default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy static files
COPY . /usr/share/nginx/html

# Copy custom Nginx config
COPY ./nginx.config /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
