# Hello World Web Application

Simple Node.js Express application that displays "Hello World".

## Deployment

The application is automatically deployed to the server via GitHub Actions when changes are pushed to the `claude/hello-world-github-deploy-eSino` branch.

## Server

- **URL**: http://37.27.209.183
- **Port**: 80

## Setup

### GitHub Secrets Required

- `SERVER_PASSWORD`: Root password for the server

### Local Development

```bash
npm install
npm start
```

### Docker

```bash
docker-compose up -d
```
