#!/bin/bash

# Deployment script for Section Evaluator
# This script helps deploy the application to Vercel

echo "🚀 Section Evaluator - Deployment Script"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ Node.js and npm are installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Vercel CLI"
        exit 1
    fi
fi

echo "✅ Vercel CLI is ready"
echo ""

# Check for .env.local
if [ ! -f .env.local ]; then
    echo "⚠️  Warning: .env.local not found"
    echo "You'll need to add OPENAI_API_KEY in Vercel dashboard after deployment"
    echo ""
fi

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
echo "Follow the prompts to complete deployment"
echo ""

vercel

echo ""
echo "✅ Deployment initiated!"
echo ""
echo "📝 Next steps:"
echo "1. Add OPENAI_API_KEY as an environment variable in Vercel dashboard"
echo "2. Your app will be live at the URL provided by Vercel"
echo ""

