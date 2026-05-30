import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateScriptInputSchema = z.object({
  topic: z.string().describe('The topic of the video.'),
  language: z.string().describe('The language for the script.'),
});

export type GenerateScriptInput = z.infer<typeof GenerateScriptInputSchema>;

const GenerateScriptOutputSchema = z.object({
  script: z.string().describe('A 60-second video script.'),
});

export type GenerateScriptOutput = z.infer<typeof GenerateScriptOutputSchema>;

export async function generateScript(input: GenerateScriptInput): Promise<GenerateScriptOutput> {
  return generateScriptFlow(input);
}

const scriptPrompt = ai.definePrompt({
  name: 'generateScriptPrompt',
  input: {
    schema: GenerateScriptInputSchema,
  },
  output: {
    schema: GenerateScriptOutputSchema,
  },
  prompt: `You are a professional scriptwriter. Generate a 60-second video script for the following topic in {{language}}: '{{topic}}'. Ensure the script is engaging and fits within the time limit.`,
});

const generateScriptFlow = ai.defineFlow({
  name: 'generateScriptFlow',
  inputSchema: GenerateScriptInputSchema,
  outputSchema: GenerateScriptOutputSchema,
}, async input => {
  const { output } = await scriptPrompt(input);
  return output!;
});
