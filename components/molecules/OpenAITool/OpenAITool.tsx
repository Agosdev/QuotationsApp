'use client';

import React, {  useState } from "react";
import useLLM from "usellm";
import { Button, OpenAIToolCon, TextInput, TextResult, TextResultCon, ResultCon } from "./OpenAIToolElements";


const OpenAITool = () => {
  const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });
  const [result, setResult] = useState("");
  const [text, setText] = useState<string>("")

  async function handleChatClick() {
    try {
      await llm.chat({
        messages: [{ role: "user", content: `Give me information about the following quote: "${text}". Limit response up to 500 characters` }],
        stream: true,
        onStream: ({ message }) => setResult(message.content),
      });

    } catch (error) {
      console.error("Something went wrong!", error);
    }
  }

  return (
    <OpenAIToolCon>
      <TextResultCon>
        <ResultCon>
        <TextInput placeholder="Paste the quote here" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} value={text} />
        <Button onClick={() => handleChatClick()} > {'>'} </Button>
        </ResultCon>
        <TextResult>{result}</TextResult> 
      </TextResultCon>
    </OpenAIToolCon>
  );
  }
  

export default OpenAITool;