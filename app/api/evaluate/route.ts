import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { section, rubric } = await request.json();

    if (!section || !rubric) {
      return NextResponse.json(
        { error: 'Both section and rubric are required' },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    const prompt = `You are an expert evaluator. Please evaluate the following section based on the provided rubric.

SECTION TO EVALUATE:
${section}

RUBRIC:
${rubric}

Please provide:
1. A comprehensive evaluation of the section
2. Specific feedback based on each criterion in the rubric
3. An overall assessment with strengths and areas for improvement
4. A score or rating if applicable based on the rubric criteria

Format your response in a clear, structured manner.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert evaluator who provides detailed, constructive feedback based on rubrics.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const evaluation = completion.choices[0]?.message?.content || 'No evaluation generated';

    return NextResponse.json({
      success: true,
      evaluation,
    });
  } catch (error: any) {
    console.error('Evaluation error:', error);
    return NextResponse.json(
      {
        error: 'Failed to evaluate section',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}

