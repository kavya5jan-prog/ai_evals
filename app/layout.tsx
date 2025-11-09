import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Section Evaluator',
  description: 'Evaluate sections using OpenAI with custom rubrics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

