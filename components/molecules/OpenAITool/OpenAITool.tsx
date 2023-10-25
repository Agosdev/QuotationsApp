'use client';

import GenericButton from "@/components/atoms/GenericButton/GenericButton";
import React, { useState } from "react";
import useLLM from "usellm";
import { QuoteGeneratorModalInnerCon } from "../QuoteGeneratorModal/QuoteGeneratorModalElements";
interface IOpenAITool {
  quote: string,
}

const OpenAITool = ({quote = 'The way to get started is to quit talking and begin doing.'}: IOpenAITool) => {
  // llm chat states
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const [result, setResult] = useState("");
  // llm speaking states
  const [text, setText] = useState<string>(quote)
  const [audioUrl, setAudioUrl] = useState<string>('')

  // llm chat function
  async function handleChatClick() {
    try {
      await llm.chat({
        messages: [{ role: "user", content: `Give me more information about the following quote: ${text}` }],
        stream: true,
        onStream: ({ message }) => setResult(message.content),
      });
    } catch (error) {
      console.error("Something went wrong!", error);
    }
  }
  
  // llm speaking function
  async function handleSpeakClick() {
    if (!text) return;
    const { audioUrl } = await llm.speak({ text });
    setAudioUrl(audioUrl);
  }

  return (
    <>
    <QuoteGeneratorModalInnerCon>

      {/* INFO */}
      <GenericButton text="Read more info about the quote" onClick={() => handleChatClick()} />
      <div style={{ whiteSpace: "pre-wrap" }}>{result}</div>
      </QuoteGeneratorModalInnerCon>
    <QuoteGeneratorModalInnerCon>

      {/* AUDIO */}
      <GenericButton text="Hear Quote" onClick={() => handleSpeakClick()} />
      {audioUrl && <audio src={audioUrl} controls />}

    </QuoteGeneratorModalInnerCon>
    </>
  );
  }
  

export default OpenAITool
 




  