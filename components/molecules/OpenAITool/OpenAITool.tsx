'use client';

import GenericButton from "@/components/atoms/GenericButton/GenericButton";
import React, { useEffect, useState } from "react";
import useLLM from "usellm";
import { OpenAIToolCon } from "./OpenAIToolElements";

const defaultQuote =  'The way to get started is to quit talking and begin doing.'

const OpenAITool = () => {
  // llm chat states
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const [result, setResult] = useState("");
  // llm speaking states
  const [text, setText] = useState<string>(defaultQuote)
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

  useEffect(() => {
    const getQuote = localStorage.getItem('quoteText')
    console.log(getQuote)
    if(getQuote) {
      setText(getQuote)
    }
    handleChatClick()
  }, [])


  return (
    <OpenAIToolCon>

        {/* INFO */}
         <div style={{ whiteSpace: "pre-wrap" }}>{text}</div>
         {/* <div style={{ whiteSpace: "pre-wrap" }}>{result}</div> */}
        {/* <OpenAIToolCon> */}

        {/* AUDIO */}
        {/* <GenericButton text="Hear Quote" onClick={() => handleSpeakClick()} />
        {audioUrl && <audio src={audioUrl} controls />} */}

      {/* </OpenAIToolCon> */}
    </OpenAIToolCon>
  );
  }
  

export default OpenAITool
 




  