# RFP Evaluation Tool

A Flask web application that evaluates RFP (Request for Proposal) responses against custom rubrics using OpenAI's GPT-4 API. The tool provides detailed scores, reasoning, and actionable fix suggestions for each metric in your rubric.

## Features

- **Interactive Web Interface**: Upload an RFP PDF, map rubric items, and trigger AI evaluations.
- **AI-Powered Evaluation**: Uses OpenAI GPT-4 to analyze RFP responses against custom rubrics.
- **Structured Output**: Provides scores (1-5), reasoning, and fix prompts for each metric.
- **Summary & Recommendations**: Includes overall summary and most impactful fix suggestions.

## Local Development

### Prerequisites

- Python 3.10 or higher
- An OpenAI API key with access to the Chat Completions API

### Installation

1. Create and activate a virtual environment (recommended):
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # Windows: .venv\\Scripts\\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your OpenAI API key
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   python app.py
   ```

5. Open your browser to [http://localhost:5000](http://localhost:5000)

## Deployment on Vercel

1. In the Vercel dashboard, set the project’s **Root Directory** to `ai-eval`.
2. Ensure the repo contains `vercel.json` at the root (already provided) so Vercel treats `app.py` as a Python Serverless Function.
3. In **Settings → Environment Variables**, add:
   - `OPENAI_API_KEY`: your OpenAI key
4. Trigger a deployment (from the Git integration or by clicking **Deploy**). Vercel will install the Python dependencies from `requirements.txt` and package the Flask app as a serverless function.
5. Visit the deployed URL, upload an RFP PDF and rubric, and verify the evaluation flow.

## Project Structure

```
ai-eval/
├── app.py             # Flask application entry point
├── requirements.txt   # Python dependencies
├── .env.example       # Environment variable template
├── templates/         # Jinja templates (main UI)
└── static/            # Static assets (CSS)
```

## Notes

- Keep your OpenAI API key secret—never commit `.env`.
- The tool uses GPT-4 by default; adjust `MODEL_NAME` constants in `app.py` if you need a different model.
- For large PDFs, parsing can take several seconds; Vercel serverless functions have execution time limits, so test with realistic documents.

## License

This project is provided as-is for evaluation purposes.
