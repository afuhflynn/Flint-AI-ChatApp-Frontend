import React, { useState } from "react";

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    { id: 2, text: "What is AI?", sender: "user" },
    {
      id: 3,
      text: "Artificial intelligence is the simulation of human intelligence in machines.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: Date.now(), text: input, sender: "user" },
      ]);
      setInput("");
    }
  };

  return (
    <div className="flex h-screen font-sans text-gray-200 bg-gray-900">
      {/* Sidebar */}
      <div className="flex flex-col w-1/5 p-4 bg-gray-800">
        <h2 className="mb-6 text-xl font-bold text-green-400">FlintAI</h2>
        <button className="px-4 py-2 mb-4 text-gray-200 bg-gray-700 rounded hover:bg-gray-600">
          New Chat
        </button>
        <button className="px-4 py-2 mb-4 text-gray-200 bg-gray-700 rounded hover:bg-gray-600">
          Category
        </button>
        <button className="px-4 py-2 mb-4 text-gray-200 bg-gray-700 rounded hover:bg-gray-600">
          Recent Chats
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gray-800">
          <h1 className="text-lg font-semibold text-green-400">
            Good Morning!
          </h1>
          <button className="px-4 py-2 text-gray-900 bg-green-500 rounded hover:bg-green-600">
            Share
          </button>
        </div>

        {/* Chat Section */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block py-2 px-4 rounded-lg ${
                  message.sender === "user"
                    ? "bg-green-500 text-gray-900"
                    : "bg-gray-700"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex items-center p-4 bg-gray-800">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message here..."
            className="flex-1 px-4 py-2 mr-4 text-gray-200 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 text-gray-900 bg-green-500 rounded-lg hover:bg-green-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
