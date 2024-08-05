# Use a node base image
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all other source code
COPY . .

# Expose the port Ganache uses
EXPOSE 7545

# Run Ganache CLI with mnemonic for local development
CMD ["ganache-cli", "-p", "7545", "-h", "0.0.0.0", "-m", "your mnemonic here"]
