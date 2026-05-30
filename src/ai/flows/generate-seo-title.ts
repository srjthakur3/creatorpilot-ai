'use server';
/**
 * @fileOverview Generates SEO-optimized titles for video content.
 *
 * - generateSeoTitle - A function that generates an SEO-optimized title based on topic and language.
 * - GenerateSeoTitleInput - The input type for the generateSeoTitle function.
 * - GenerateSeoTitleOutput - The return type for the generateSeoTitle function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateSeoTitleInputSchema = z.object({
  topic: z.string().describe('The main topic of the video content.'),
  language: z.string().describe('The target language for the SEO title (e.g., 