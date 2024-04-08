"use server";

import OpenAI from "openai";
import {experimental_StreamingReactResponse, Message, OpenAIStream} from "ai";

const openai = new OpenAI({
  // baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENAI_API_KEY, // apiKey: process.env.OPENROUTER_API_KEY,
})

export default async function handler({messages}: { messages: Message[] }) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    // @ts-ignore
    messages: messages.map((m) => ({
      role: m.role,
      content: m.content,
    })),
  });

  const stream = OpenAIStream(response);

  return new experimental_StreamingReactResponse(stream, {
    ui({content}) {
      return <div className="italic text-red-800">{content}</div>;
    },
  });
};
