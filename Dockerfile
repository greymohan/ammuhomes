# Use the lightweight Nginx image
FROM nginx:alpine

# Copy all your HTML, CSS, and image files to the Nginx serving directory
COPY . /usr/share/nginx/html

# Expose port 80 to tell Dokploy where the traffic should flow
EXPOSE 80
