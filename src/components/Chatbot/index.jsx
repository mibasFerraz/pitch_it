import React, { useState } from 'react';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [history, setHistory] = useState([]);
  const [minimized, setMinimized] = useState(true); // Start minimized

  const apiKey = import.meta.env.VITE_CHATGPT_KEY;

  const sendMessage = () => {
    if (!message.trim()) {
      setStatus('Please enter a message.');
      return;
    }

    setStatus('Loading...');
    setMessage('');

    fetch("https://api.openai.com/v1/completions", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-instruct',
        prompt: message,
        max_tokens: 2048,
        temperature: 0.5
      })
    })
      .then(response => response.json())
      .then(response => {
        const r = response.choices[0].text;
        setStatus('');
        showHistory(message, r);
      })
      .catch(error => {
        console.error('Error:', error);
        setStatus('Error, please try again later.');
      });
  };

  const showHistory = (message, response) => {
    setHistory(prevHistory => [
      ...prevHistory,
      { message: message, response: response }
    ]);
  };

  const toggleMinimize = () => {
    setMinimized(prevMinimized => !prevMinimized);
  };

  return (
    <div className={`fixed bottom-4 right-4 ${minimized ? 'w-16 h-16' : 'max-w-md w-full'}`}>
      <div className={`bg-blue-500 text-white shadow-lg rounded-lg ${minimized ? 'p-2 flex justify-end' : 'p-6'}`}>
        {!minimized ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-center">Chatbot</h2>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={toggleMinimize}
              >
                <strong>__</strong>
              </button>
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border text-black p-2 w-full rounded"
                placeholder="Escreva sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <button
                className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-200"
                onClick={sendMessage}
              >
                Enviar
              </button>
            </div>
            {status && <p className="text-white mb-2">{status}</p>}
            <div className="border p-4 h-64 overflow-y-auto rounded bg-white">
              {history.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-end mb-1">
                    <div className="bg-gray-400 rounded p-2 max-w-xs">{item.message}</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-green-500 rounded p-2 max-w-xs">{item.response}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded "
            onClick={toggleMinimize}
          >
            <strong>+</strong>
          </button>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
