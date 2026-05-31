"use client";

import { useState } from "react";
import { generateContent } from "@/lib/gemini";

export default function DashboardPage() {
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate(type: string) {
    if (!topic) {
      setOutput("Please enter a topic");
      return;
    }

    setLoading(true);

    const prompt = `${type} for: ${topic}`;

    const result = await generateContent(prompt);

    setOutput(result);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-orange-500 mb-6">
        CreatorPilot Dashboard
      </h1>

      <input
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        type="text"
        placeholder="Enter Topic..."
        className="w-full p-3 mb-4 bg-zinc-900 border border-zinc-700 rounded"
      />

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => handleGenerate("YouTube Script")}
          className="bg-orange-500 text-black p-3 rounded"
        >
          Script Generator
        </button>

        <button
          onClick={() => handleGenerate("Hook")}
          className="bg-orange-500 text-black p-3 rounded"
        >
          Hook Generator
        </button>

        <button
          onClick={() => handleGenerate("SEO")}
          className="bg-orange-500 text-black p-3 rounded"
        >
          SEO Generator
        </button>

        <button
          onClick={() => handleGenerate("Hashtags")}
          className="bg-orange-500 text-black p-3 rounded"
        >
          Hashtag Generator
        </button>

        <button
          onClick={() => handleGenerate("Scene Breakdown")}
          className="bg-orange-500 text-black p-3 rounded"
        >
          Scene Generator
        </button>
      </div>

      <div className="mt-8 p-4 border border-orange-500 rounded whitespace-pre-wrap">
        {loading ? "Generating..." : output}
      </div>
    </div>
  );
}
