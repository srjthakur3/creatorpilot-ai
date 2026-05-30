'use server';
/**
 * @fileOverview Generates a viral hook for a video based on topic and language.
 *
 * - generateViralHook - A function that generates a viral hook.
 * - GenerateViralHookInput - The input type for the generateViralHook function.
 * - GenerateViralHookOutput - The return type for the generateViralHook function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateViralHookInputSchema = z.object({
  topic: z.string().describe('The topic of the video.'),
  language: z.string().describe('The language for the hook (e.g., en, es, fr).'),
});
export type GenerateViralHookInput = z.infer<typeof GenerateViralHookInputSchema>;

const GenerateViralHookOutputSchema = z.object({
  viralHook: z.string().describe('A short, compelling, and viral hook for the video.'),
});
export type GenerateViralHookOutput = z.infer<typeof GenerateViralHookOutputSchema>;

export async function generateViralHook(input: GenerateViralHookInput): Promise<GenerateViralHookOutput> {
  return generateViralHookFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateViralHookPrompt',
  input: {
    schema: GenerateViralHookInputSchema,
  },
  output: {
    schema: GenerateViralHookOutputSchema,
  },
  prompt: `You are a viral content creation expert. Your task is to generate a captivating and viral hook for a video.

Video Topic: {{{topic}}}
Language: {{{language}}}

Generate a single-sentence, attention-grabbing hook in the specified language that will make viewers want to watch the entire video. Ensure the hook is concise and impactful.`,
});

const generateViralHookFlow = ai.defineFlow(
  {
    name: 'generateViralHookFlow',
    inputSchema: GenerateViralHookInputSchema,
    outputSchema: GenerateViralHookOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
