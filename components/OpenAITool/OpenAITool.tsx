'use client';

import React, { useState } from "react";
import useLLM from "usellm";


const OpenAITool = () => {
      {/* INFO DE LA FRASE */}
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const quote = 'The way to get started is to quit talking and begin doing.'
  const [result, setResult] = useState("");
// AUDIO
  const [text, setText] = useState<string>(quote)
  const [audioUrl, setAudioUrl] = useState<string>('')

      {/* INFO DE LA FRASE */}

  async function handleClick() {
    try {
      await llm.chat({
        messages: [{ role: "user", content: `Give me more information about the following quote: ${quote}` }],
        stream: true,
        onStream: ({ message }) => setResult(message.content),
      });
    } catch (error) {
      console.error("Something went wrong!", error);
    }
  }
// AUDIO
  async function handleSpeakClick() {
    if (!text) return;
    const { audioUrl } = await llm.speak({ text });
    setAudioUrl(audioUrl);
  }
  return (
    <div>

      {/* INFO DE LA FRASE */}
      <button onClick={handleClick}>Send</button>
      <div style={{ whiteSpace: "pre-wrap" }}>{result}</div>

      {/* AUDIO */}

      <button style={{margin: 0}} onClick={handleSpeakClick} >
      Speak
    </button>
    {audioUrl && <audio src={audioUrl} controls />}


    </div>
  );
  }
  

export default OpenAITool
 




  