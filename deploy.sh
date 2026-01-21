#!/bin/bash
set -e

echo "Starting deployment..."

# Navigate to app directory
cd /root/app

# Pull latest changes
git pull origin claude/hello-world-github-deploy-eSino

# Stop and remove old containers
docker-compose down || true

# Build and start new containers
docker-compose up -d --build

echo "Deployment completed successfully!"
