import React, { useState } from "react";

const Generator = () => {
  const apiKey = import.meta.env.VITE_CHATGPT_KEY;
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [history, setHistory] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const send5Message = () => {
    if (!message) {
      setStatus("Descreva sua StartUp!");
      return;
    }

    setStatus("Carregando...");
    
    const prompt = `Crie um pitch para um vídeo de 5 minutos e detalhe o que falar a cada minuto sobre: ${message}(use quebra de linhas)`;
    setMessage("");

    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 0.5,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        let r = response.choices[0]["text"];
        setStatus("");
        showHistory(message, r);
      })
      .catch((e) => {
        console.error(`Erro -> ${e}`);
        setStatus("Erro, por favor tente novamente mais tarde.");
      });
  };

  const sendMessage = () => {
    if (!message) {
      setStatus("Descreva sua StartUp!");
      return;
    }

    setStatus("Carregando...");
    
    const prompt = `Crie um elevator pitch sobre: ${message}`;
    setMessage("");

    fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-instruct",
        prompt: prompt,
        max_tokens: 2048,
        temperature: 0.5,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        let r = response.choices[0]["text"];
        setStatus("");
        showHistory(message, r);
      })
      .catch((e) => {
        console.error(`Erro -> ${e}`);
        setStatus("Erro, por favor tente novamente mais tarde.");
      });
  };

  const showHistory = (message, response) => {
    setHistory([...history, { message, response }]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto relative">
        <h2 className="text-xl font-bold mb-4 text-center">Gerador de Pitch</h2>
        <div className="mb-4 relative p-2">
          <input
            type="text"
            id="message-input"
            className="border p-2 w-full rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Descreva sua startup"
          />
          <div className="flex justify-start mt-2">
            <button
              id="btn-submit"
              className="bg-blue-500 text-white w-1/4 rounded"
              onClick={sendMessage}
            >
              Elevator Pitch
            </button>
            <button
              id="btn-submit"
              className="bg-blue-500 text-white w-1/4 rounded"
              onClick={send5Message}
            >
              Pitch vídeo
            </button>
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsOverlayVisible(true)}
              className="relative"
            >
              <button className="bg-blue-300 text-white rounded-full w-10 h-10 flex items-center justify-center">
                ?
              </button>
            </div>
          </div>
          <div id="status" className="text-blue-500 mt-2">
            {status}
          </div>
        </div>
        <div id="history" className="border p-4 h-64 overflow-y-auto rounded">
          {history.map((item, index) => (
            <div key={index}>
              <div className="box-my-message p-2 mb-2 bg-gray-200 rounded">
                <p className="my-message">{item.message}</p>
              </div>
              <div className="box-response-message p-2 mb-2 bg-green-200 rounded">
                <p className="response-message">{item.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOverlayVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsOverlayVisible(false)}
        >
          <div
            className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-2">Instruções necessárias para um Pitch</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Descreva sua startup em uma frase.</li>
              <li>Explique o problema que você está resolvendo.</li>
              <li>Detalhe sua solução e sua singularidade.</li>
              <li>Identifique seu mercado-alvo.</li>
              <li>Descreva seu modelo de negócio.</li>
              <li>Mostre tração e progresso.</li>
              <li>Mencione sua equipe e suas competências.</li>
              <li>Inclua projeções financeiras e necessidades de financiamento.</li>
            </ul>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOverlayVisible(false)}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generator;
