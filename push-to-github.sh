#!/bin/bash

# Script to push code to GitHub repository
# Repository: https://github.com/kavya5jan-prog/ai_evals.git

echo "🚀 Pushing Section Evaluator to GitHub"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed."
    echo "Please install Xcode Command Line Tools:"
    echo "  xcode-select --install"
    exit 1
fi

echo "✅ Git is installed"
echo ""

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    echo "✅ Git repository initialized"
    echo ""
fi

# Add remote if not already added
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/kavya5jan-prog/ai_evals.git
    echo "✅ Remote added"
    echo ""
else
    echo "✅ Remote already configured"
    echo ""
fi

# Add all files
echo "📝 Adding files..."
git add .

# Commit
echo "💾 Committing changes..."
git commit -m "Initial commit: Section Evaluator with OpenAI integration"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
echo "You may be prompted for GitHub credentials"
echo ""

git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📝 Next steps:"
    echo "1. Go to https://github.com/kavya5jan-prog/ai_evals"
    echo "2. Deploy to Vercel:"
    echo "   - Go to https://vercel.com"
    echo "   - Import the repository"
    echo "   - Add OPENAI_API_KEY as environment variable"
    echo "   - Deploy!"
    echo ""
else
    echo ""
    echo "❌ Failed to push. You may need to:"
    echo "1. Set up GitHub authentication (personal access token)"
    echo "2. Or use SSH keys"
    echo ""
fi

