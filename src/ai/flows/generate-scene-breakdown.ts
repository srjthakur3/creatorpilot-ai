'use server';
/**
 * @fileOverview Generates a scene-by-scene breakdown for a given video script topic and language.
 *
 * - generateSceneBreakdown - A function that generates the scene breakdown.
 * - GenerateSceneBreakdownInput - The input type for the generateSceneBreakdown function.
 * - GenerateSceneBreakdownOutput - The return type for the generateSceneBreakdown function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSceneBreakdownInputSchema = z.object({
  topic: z.string().describe('The main topic or subject of the video.'),
  language: z.string().describe('The language for the scene breakdown (e.g., "English", "Spanish").'),
});
export type GenerateSceneBreakdownInput = z.infer<typeof GenerateSceneBreakdownInputSchema>;

const GenerateSceneBreakdownOutputSchema = z.object({
  sceneBreakdown: z.array(z.object({
    sceneNumber: z.number().describe('The sequential number of the scene.'),
    shotDescription: z.string().describe('A brief description of the visual elements and action in the scene.'),
    audioDescription: z.string().describe('A description of the audio, including dialogue and sound effects.'),
  })).describe('An array of scene objects, each detailing a part of the video.'),
});
export type GenerateSceneBreakdownOutput = z.infer<typeof GenerateSceneBreakdownOutputSchema>;

export async function generateSceneBreakdown(input: GenerateSceneBreakdownInput): Promise<GenerateSceneBreakdownOutput> {
  return generateSceneBreakdownFlow(input);
}

const sceneBreakdownPrompt = ai.definePrompt({
  name: 'sceneBreakdownPrompt',
  input: {schema: GenerateSceneBreakdownInputSchema},
  output: {schema: GenerateSceneBreakdownOutputSchema},
  prompt: `You are an expert video script supervisor. Your task is to create a detailed scene-by-scene breakdown for a video based on the provided topic and language.

Provide a breakdown in {{language}} for a video about: {{topic}}.

For each scene, include:
1. Scene Number
2. A concise description of the visual elements and action (Shot Description).
3. A description of the audio, including any dialogue or sound effects (Audio Description).

Format the output as a JSON array of scene objects. Each object should have the keys 'sceneNumber', 'shotDescription', and 'audioDescription'.

Example:
[{"sceneNumber": 1, "shotDescription": "Opening shot of a vast, futuristic cityscape at sunrise. Flying vehicles zip between towering skyscrapers.", "audioDescription": "[Sound of gentle ambient futuristic city noise and soaring synths. No dialogue.]"}, ...]

Ensure the JSON is valid and strictly adheres to the specified structure.`,
});

const generateSceneBreakdownFlow = ai.defineFlow(
  {
    name: 'generateSceneBreakdownFlow',
    inputSchema: GenerateSceneBreakdownInputSchema,
    outputSchema: GenerateSceneBreakdownOutputSchema,
  },
  async input => {
    const {output} = await sceneBreakdownPrompt(input);
    return output!;
  }
);
