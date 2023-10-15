import { useState } from "react";
import useLLM from "usellm";


const Transcriber = () => {
    const llm = useLLM({ serviceUrl: "https://usellm.org/api/llm" });

    const { chat, record, stopRecording, transcribe } = llm;
    
    const [result, setResult] = useState("");
    
    async function handleClick() {
      try {
        await llm.chat({
          messages: [{ role: "user", content: "What is a language model?" }],
          stream: true,
          onStream: ({ message }) => setResult(message.content),
        });
      } catch (error) {
        console.error("Something went wrong!", error);
      }
    }
    return(
        <div>
        <button onClick={handleClick}>Send</button>
        <div style={{ whiteSpace: "pre-wrap" }}>{result}</div>
      </div>
    )
}

export default Transcriber
 