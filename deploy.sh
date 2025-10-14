#!/bin/bash

# Deployment Script for Verdana Websites
# This script deploys a specific landing page to Cloudflare Pages

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if project name is provided
if [ -z "$1" ]; then
    echo -e "${RED}Error: Please provide a project name${NC}"
    echo "Usage: ./deploy.sh <project-name>"
    echo "Example: ./deploy.sh dachberater-schweiz"
    exit 1
fi

PROJECT_NAME=$1
PROJECT_DIR="landing-pages/$PROJECT_NAME"

# Check if project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${RED}Error: Project directory $PROJECT_DIR does not exist${NC}"
    exit 1
fi

echo -e "${BLUE}🚀 Deploying $PROJECT_NAME to Cloudflare Pages...${NC}"

# Navigate to project directory
cd "$PROJECT_DIR" || exit

# Deploy using Wrangler
export CLOUDFLARE_API_TOKEN="OrGk5f4j2S9dHB9iSyTV48XYFEM2oVFRBvcGe6ut"
export CLOUDFLARE_ACCOUNT_ID="ca7c3e3a35b3107c64ded0281eefb682"

wrangler pages deploy . \
  --project-name="$PROJECT_NAME" \
  --branch=main

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${BLUE}🌐 Your website is live at: https://$PROJECT_NAME.pages.dev${NC}"
else
    echo -e "${RED}❌ Deployment failed${NC}"
    exit 1
fi

