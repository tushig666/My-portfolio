'use server';
/**
 * @fileOverview A Genkit flow that generates a detailed, futuristic project vision based on a high-level idea.
 *
 * - generateFuturisticProjectVision - A function that generates the futuristic project vision.
 * - GenerateFuturisticProjectVisionInput - The input type for the generateFuturisticProjectVision function.
 * - GenerateFuturisticProjectVisionOutput - The return type for the generateFuturisticProjectVision function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFuturisticProjectVisionInputSchema = z.object({
  projectIdea: z.string().describe('A high-level project idea to generate a futuristic vision for.'),
});
export type GenerateFuturisticProjectVisionInput = z.infer<typeof GenerateFuturisticProjectVisionInputSchema>;

const GenerateFuturisticProjectVisionOutputSchema = z.object({
  projectName: z.string().describe('A creative and futuristic name for the project.'),
  tagline: z.string().describe('A catchy, futuristic tagline for the project.'),
  description: z.string().describe('A detailed, imaginative description of the project, focusing on its innovative aspects and user experience.'),
  coreFeatures: z.array(z.string()).describe('A list of core, futuristic features that the project would offer.'),
  keyTechnologies: z.array(z.string()).describe('A list of advanced or speculative technologies that would power the project.'),
  potentialImpact: z.string().describe('The transformative impact this project would have on its target users or the world.'),
});
export type GenerateFuturisticProjectVisionOutput = z.infer<typeof GenerateFuturisticProjectVisionOutputSchema>;

const generateFuturisticProjectVisionPrompt = ai.definePrompt({
  name: 'generateFuturisticProjectVisionPrompt',
  input: { schema: GenerateFuturisticProjectVisionInputSchema },
  output: { schema: GenerateFuturisticProjectVisionOutputSchema },
  prompt: `You are an elite, award-winning creative director and AI conceptualization expert. Your task is to take a high-level project idea and transform it into a detailed, futuristic project vision. The output should be inspiring, innovative, and reflect next-generation thinking.

Project Idea: {{{projectIdea}}}

Based on the project idea, generate the following:
1.  A creative and futuristic name for the project.
2.  A catchy, futuristic tagline for the project.
3.  A detailed, imaginative description of the project, focusing on its innovative aspects, user experience, and how it pushes boundaries.
4.  A list of core, futuristic features that the project would offer. Each feature should be concise but impactful.
5.  A list of advanced or speculative technologies that would power the project.
6.  The transformative impact this project would have on its target users or the world.

Ensure the output is in JSON format matching the provided schema. The language should be evocative, forward-thinking, and emphasize innovation.`,
});

const generateFuturisticProjectVisionFlow = ai.defineFlow(
  {
    name: 'generateFuturisticProjectVisionFlow',
    inputSchema: GenerateFuturisticProjectVisionInputSchema,
    outputSchema: GenerateFuturisticProjectVisionOutputSchema,
  },
  async (input) => {
    const { output } = await generateFuturisticProjectVisionPrompt(input);
    return output!;
  }
);

export async function generateFuturisticProjectVision(input: GenerateFuturisticProjectVisionInput): Promise<GenerateFuturisticProjectVisionOutput> {
  return generateFuturisticProjectVisionFlow(input);
}
