#!/bin/bash
set -e

echo "====================================="
echo "Server Setup Script"
echo "====================================="

# Update system
echo "Updating system packages..."
apt-get update

# Install Docker if not installed
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl start docker
    systemctl enable docker
    rm get-docker.sh
    echo "Docker installed successfully!"
else
    echo "Docker is already installed."
fi

# Install Docker Compose if not installed
if ! command -v docker-compose &> /dev/null; then
    echo "Installing Docker Compose..."
    curl -L "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    echo "Docker Compose installed successfully!"
else
    echo "Docker Compose is already installed."
fi

# Install Git if not installed
if ! command -v git &> /dev/null; then
    echo "Installing Git..."
    apt-get install -y git
    echo "Git installed successfully!"
else
    echo "Git is already installed."
fi

# Create app directory
echo "Creating application directory..."
mkdir -p /root/app
cd /root/app

# Clone or pull repository
if [ -d ".git" ]; then
    echo "Repository already exists, pulling latest changes..."
    git fetch origin
    git reset --hard origin/claude/hello-world-github-deploy-eSino
else
    echo "Cloning repository..."
    git clone https://github.com/eduardkolberg/testclaude3.git .
    git checkout claude/hello-world-github-deploy-eSino
fi

# Stop and remove old containers
echo "Stopping old containers..."
docker-compose down || true

# Build and start containers
echo "Building and starting application..."
docker-compose up -d --build

# Wait for container to start
echo "Waiting for application to start..."
sleep 5

# Check if container is running
if docker-compose ps | grep -q "Up"; then
    echo "====================================="
    echo "Setup completed successfully!"
    echo "====================================="
    echo "Application is running at: http://37.27.209.183"
    echo ""
    echo "To view logs: docker-compose logs -f"
    echo "To restart: docker-compose restart"
    echo "To stop: docker-compose down"
else
    echo "Error: Container is not running!"
    echo "Check logs with: docker-compose logs"
    exit 1
fi
