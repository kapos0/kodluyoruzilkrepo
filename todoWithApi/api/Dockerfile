# Base image
FROM node

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port that the API runs on
EXPOSE 7000

# Start the API
CMD ["npm", "start"]
