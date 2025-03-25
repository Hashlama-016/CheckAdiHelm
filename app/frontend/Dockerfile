# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Serve with a simple static server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port
EXPOSE 3000
