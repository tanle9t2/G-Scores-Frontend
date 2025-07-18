# Step 1: Build the React app using Node
FROM node:18 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Step 2: Serve it using Nginx
FROM nginx:stable-alpine

# Copy built app to Nginx HTML folder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
