# Use the official Node.js 14 image as the base image
FROM node:14

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD [ "node", "index.js" ]
