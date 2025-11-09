'use client';

import { useState } from 'react';

export default function Home() {
  const [section, setSection] = useState('');
  const [rubric, setRubric] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setEvaluation('');

    try {
      const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ section, rubric }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to evaluate section');
      }

      setEvaluation(data.evaluation);
    } catch (err: any) {
      setError(err.message || 'An error occurred while evaluating');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Section Evaluator</h1>
      <p className="subtitle">
        Evaluate any section using OpenAI with your custom rubric
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="section">Section to Evaluate:</label>
          <textarea
            id="section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="Paste the section you want to evaluate here..."
            rows={10}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rubric">Evaluation Rubric:</label>
          <textarea
            id="rubric"
            value={rubric}
            onChange={(e) => setRubric(e.target.value)}
            placeholder="Enter your evaluation rubric here. Include criteria, scoring guidelines, and any specific requirements..."
            rows={10}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Evaluating...' : 'Evaluate Section'}
        </button>
      </form>

      {loading && <div className="loading">Processing evaluation...</div>}

      {error && <div className="error">Error: {error}</div>}

      {evaluation && (
        <div className="evaluation-result">
          <h2>Evaluation Result</h2>
          <div className="evaluation-content">{evaluation}</div>
        </div>
      )}
    </div>
  );
}

