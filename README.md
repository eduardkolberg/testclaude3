# Hello World Web Application

Simple Node.js Express application that displays "Hello World".

## Quick Start

### Option 1: Manual Server Setup (Recommended for first deployment)

1. Connect to your server:
   ```bash
   ssh root@37.27.209.183
   ```

2. Download and run the setup script:
   ```bash
   curl -fsSL https://raw.githubusercontent.com/eduardkolberg/testclaude3/claude/hello-world-github-deploy-eSino/server-setup.sh | bash
   ```

3. Access your application at: **http://37.27.209.183**

### Option 2: Automated Deployment via GitHub Actions

1. Go to your GitHub repository settings
2. Navigate to: Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Add the following secret:
   - Name: `SERVER_PASSWORD`
   - Value: Your server root password

After setting up the secret, any push to the `claude/hello-world-github-deploy-eSino` branch will automatically deploy the application.

## Server Information

- **URL**: http://37.27.209.183
- **Port**: 80 (mapped from container port 3000)
- **Server IP**: 37.27.209.183

## Project Structure

```
.
├── index.js              # Express application
├── package.json          # Node.js dependencies
├── Dockerfile            # Container configuration
├── docker-compose.yml    # Docker Compose setup
├── deploy.sh             # Deployment script
├── server-setup.sh       # Server initial setup script
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions workflow
```

## Local Development

```bash
# Install dependencies
npm install

# Start application
npm start

# Application will be available at http://localhost:3000
```

## Docker Development

```bash
# Build and start container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop container
docker-compose down
```

## Manual Deployment

If you need to manually deploy to the server:

```bash
ssh root@37.27.209.183
cd /root/app
git pull origin claude/hello-world-github-deploy-eSino
bash deploy.sh
```

## Troubleshooting

### Check if application is running
```bash
docker-compose ps
```

### View application logs
```bash
docker-compose logs -f
```

### Restart application
```bash
docker-compose restart
```

### Rebuild and restart
```bash
docker-compose down
docker-compose up -d --build
```
