"use client";

import { useState } from "react";
import useLLM from "usellm";


const Speaker = () => {
  const [text, setText] = useState<string>('')
  const [audioUrl, setAudioUrl] = useState<string>('')
  const llm = useLLM({ serviceUrl: "/api/llm" });
  
  async function handleSpeakClick() {
    if (!text) return;
    const { audioUrl } = await llm.speak({ text });
    setAudioUrl(audioUrl);
  }
 

    return (
      <div >
      <textarea
      style={{margin: 0}}
        placeholder="Enter some text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button style={{margin: 0}} onClick={handleSpeakClick} >
        Speak
      </button>
      {audioUrl && <audio src={audioUrl} controls />}
    </div>
    )
}

export default Speaker
 