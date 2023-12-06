# Use an official Node.js runtime as a parent image
FROM node:alpine
# Set the working directory in the container
WORKDIR /app
# Copy all project files to the container
COPY . .
# Install project dependencies
RUN npm install \
    # Build your React app
    && npm run build
# Expose the port your app will run on (typically 3000)
EXPOSE 3000
# Define the command to run your app
CMD ["npm", "start", "--host 0.0.0.0"]