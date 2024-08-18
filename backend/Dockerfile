# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the source code
COPY . .

# Build the NestJS application
RUN yarn build

# Expose the port the backend runs on
EXPOSE 5000

# Run the NestJS application
CMD ["yarn", "start:prod"]
