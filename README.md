# Section Evaluator

A web application that evaluates sections of text using OpenAI's GPT-4 model based on custom rubrics.

**Repository**: [https://github.com/kavya5jan-prog/ai_evals.git](https://github.com/kavya5jan-prog/ai_evals.git)

## Features

- Input a section of text to evaluate
- Provide a custom rubric for evaluation
- Get comprehensive AI-powered evaluations with detailed feedback
- Clean, modern UI with gradient design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your OpenAI API key:
   - Create a `.env.local` file in the root directory
   - Add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Push to GitHub

1. **Install Xcode Command Line Tools** (if not installed):
   ```bash
   xcode-select --install
   ```

2. **Push to GitHub**:
   ```bash
   ./push-to-github.sh
   ```
   
   Or manually:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/kavya5jan-prog/ai_evals.git
   git branch -M main
   git push -u origin main
   ```

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project" and import the repository: `kavya5jan-prog/ai_evals`
3. Add environment variable:
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
4. Click "Deploy"

The application will automatically build and deploy. Your app will be live at a URL like:
`https://ai-evals.vercel.app`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **OpenAI API** - GPT-4 for evaluation
- **CSS** - Custom styling with modern design

