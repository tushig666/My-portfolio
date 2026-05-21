'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating personalized bio summaries for Tushig Tse.
 *
 * - generatePersonalizedBioSummary - A function that generates a tailored summary of Tushig Tse's professional identity or skills.
 * - GeneratePersonalizedBioSummaryInput - The input type for the generatePersonalizedBioSummary function.
 * - GeneratePersonalizedBioSummaryOutput - The return type for the generatePersonalizedBioSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GeneratePersonalizedBioSummaryInputSchema = z.object({
  query: z.string().describe('A query asking for a summary of Tushig Tse\'s professional identity or skills.'),
});
export type GeneratePersonalizedBioSummaryInput = z.infer<typeof GeneratePersonalizedBioSummaryInputSchema>;

const GeneratePersonalizedBioSummaryOutputSchema = z.object({
  summary: z.string().describe('A tailored summary of Tushig Tse\'s professional identity or skills based on the query.'),
});
export type GeneratePersonalizedBioSummaryOutput = z.infer<typeof GeneratePersonalizedBioSummaryOutputSchema>;

export async function generatePersonalizedBioSummary(input: GeneratePersonalizedBioSummaryInput): Promise<GeneratePersonalizedBioSummaryOutput> {
  return generatePersonalizedBioSummaryFlow(input);
}

const personalizedBioSummaryPrompt = ai.definePrompt({
  name: 'personalizedBioSummaryPrompt',
  input: { schema: GeneratePersonalizedBioSummaryInputSchema },
  output: { schema: GeneratePersonalizedBioSummaryOutputSchema },
  prompt: `You are an AI assistant designed to summarize the professional identity and skills of Tushig Tse, a high-level Frontend Developer and AI Builder.

Based on the following information about Tushig Tse, provide a concise and tailored summary that directly addresses the user's query.

### Tushig Tse's Professional Profile:
- **Primary Roles**: Frontend Developer, AI Builder, Frontend Engineer, Modern UI creator, Interactive experience developer.
- **Core Expertise**: React, Next.js, TypeScript, Python, TailwindCSS, PostgreSQL, OpenAI APIs, Node.js, Git/GitHub, Framer Motion, REST APIs, AI integrations.
- **Key Strengths**: Specializes in building next-generation futuristic portfolio experiences, premium AI startup launch interfaces, cinematic cyberpunk UIs, interactive futuristic operating systems, and award-winning Awwwards-level digital experiences. Emphasizes highly animated, smooth, futuristic, neon cyberpunk design with extremely polished UI/UX, cinematic transitions, modern frontend architecture, responsive layouts, immersive animations, and advanced interactions.
- **Vision**: Focused on 