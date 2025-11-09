# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy the project**:
   ```bash
   vercel
   ```

4. **Add Environment Variable**:
   - Go to your Vercel project dashboard
   - Navigate to Settings > Environment Variables
   - Add `OPENAI_API_KEY` with your OpenAI API key
   - Redeploy if needed

### Option 2: Deploy via Vercel Web Interface

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variable**:
   - In the project settings, go to Environment Variables
   - Add `OPENAI_API_KEY` with your OpenAI API key
   - Redeploy the project

### Option 3: Deploy via Vercel Button

The project is configured for Vercel. You can also use the Vercel deploy button by adding this to your README (already included in the project structure).

## Environment Variables

Make sure to set the following environment variable in Vercel:

- `OPENAI_API_KEY`: Your OpenAI API key (required)

## Post-Deployment

After deployment, your app will be live at a URL like:
`https://your-project-name.vercel.app`

## Local Development

If you want to test locally first:

1. **Install Node.js** (if not installed):
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create `.env.local` file**:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000)

