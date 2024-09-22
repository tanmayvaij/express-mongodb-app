### Setup Instructions

1. **Install Docker**: Ensure Docker is installed and running on your system. [Get Docker here](https://www.docker.com/products/docker-desktop/).
2. **Clone the Repository**: Run the following command to pull the project:  
   ```bash
   git clone https://www.github.com/tanmayvaij/express-mongodb-app.git
   ```
3. **Configure Network Ports**: Make sure ports **5000** (for the app) and **27017** (for MongoDB) are open on your firewall.
4. **Launch the Containers**: Navigate to the project directory and start the containers using Docker Compose:  
   ```bash
   docker compose up
   ```
