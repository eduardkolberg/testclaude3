# Deployment Instructions

## Step 1: Connect to Your Server

```bash
ssh root@37.27.209.183
```

When prompted, enter password: `Hv4iF9NpAWXr9v7v9eK71`

## Step 2: Run the Automated Setup Script

Copy and paste this single command:

```bash
curl -fsSL https://raw.githubusercontent.com/eduardkolberg/testclaude3/claude/hello-world-github-deploy-eSino/server-setup.sh | bash
```

This script will:
- Install Docker and Docker Compose
- Clone the repository
- Build and start the application
- Configure everything automatically

## Step 3: Access Your Application

Once the setup is complete, your application will be available at:

**http://37.27.209.183**

You should see "Hello World" displayed on the page.

## Optional: Setup Automated Deployments

To enable automatic deployments on every code push:

1. Go to https://github.com/eduardkolberg/testclaude3/settings/secrets/actions
2. Click "New repository secret"
3. Add:
   - Name: `SERVER_PASSWORD`
   - Value: `Hv4iF9NpAWXr9v7v9eK71`
4. Click "Add secret"

After this, any push to the `claude/hello-world-github-deploy-eSino` branch will automatically deploy to the server.

## Troubleshooting

If something goes wrong, SSH into the server and run:

```bash
cd /root/app
docker-compose logs -f
```

To restart the application:

```bash
cd /root/app
docker-compose restart
```

To redeploy from scratch:

```bash
cd /root/app
docker-compose down
git pull origin claude/hello-world-github-deploy-eSino
docker-compose up -d --build
```
