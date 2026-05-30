'use client';
/**
 * @fileOverview Generates relevant hashtags for a given video topic and language.
 *
 * - generateHashtags - A function that suggests hashtags for video content.
 * - GenerateHashtagsInput - The input type for the generateHashtags function.
 * - GenerateHashtagsOutput - The return type for the generateHashtags function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateHashtagsInputSchema = z.object({
  topic: z.string().describe('The main topic or subject of the video content.'),
  language: z.string().describe('The language for the generated hashtags (e.g., "English", "Spanish").'),
});
export type GenerateHashtagsInput = z.infer<typeof GenerateHashtagsInputSchema>;

const GenerateHashtagsOutputSchema = z.object({
  hashtags: z.array(z.string()).describe('An array of relevant hashtags for the video topic.'),
});
export type GenerateHashtagsOutput = z.infer<typeof GenerateHashtagsOutputSchema>;

export async function generateHashtags(input: GenerateHashtagsInput): Promise<GenerateHashtagsOutput> {
  return generateHashtagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHashtagsPrompt',
  input: { schema: GenerateHashtagsInputSchema },
  output: { schema: GenerateHashtagsOutputSchema },
  prompt: `You are an expert social media strategist specializing in hashtag generation.

Given the following video topic and language, generate a list of relevant and trending hashtags. Aim for a mix of broad and niche hashtags that will increase reach and engagement.

Topic: {{{topic}}}
Language: {{{language}}}

Provide the output as a JSON array of strings, where each string is a hashtag. Do not include any introductory text or explanations, only the JSON array.`,
});

const generateHashtagsFlow = ai.defineFlow(
  {
    name: 'generateHashtagsFlow',
    inputSchema: GenerateHashtagsInputSchema,
    outputSchema: GenerateHashtagsOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
