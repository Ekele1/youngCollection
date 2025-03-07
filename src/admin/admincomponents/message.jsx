import React, { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "Hey, how are you?" },
    { id: 2, sender: "other", text: "I'm good, thanks! How about you?" },
    { id: 3, sender: "user", text: "Doing great, just working on a project." },
    { id: 4, sender: "user", text: "Doing great, just working on a project." },
    { id: 5, sender: "other", text: "Doing great, just working on a project." },
    { id: 5, sender: "other", text: "Doing great, just working on a project." },
    { id: 5, sender: "other", text: "Doing great, just working on a project." },
  ]);
  const [inputText, setInputText] = useState("");
  const [showSidebar, setShowSidebar] = useState(false); // State to toggle sidebar on mobile

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user",
        text: inputText,
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <div className="flex h-[100%] w-[100%] fixed mt-[20px] bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-64 lg:w-[20%] bg-white border-r border-gray-200 z-10 p-4 overflow-y-auto absolute  h-screen lg:min-h-screen transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <h2 className="text-xl font-bold mb-4">Chats</h2>
        <div className="space-y-2">
          {/* Example Chat List */}
          <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="ml-3">
              <p className="font-semibold">Alice</p>
              <p className="text-sm text-gray-500">Hey, are you there?</p>
            </div>
          </div>
          <div className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <div className="ml-3">
              <p className="font-semibold">Bob</p>
              <p className="text-sm text-gray-500">See you tomorrow!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className={`h-[90%] lg:left-[20%]  w-[100%] lg:w-[80%] absolute bg-yellow-300 flex flex-col`}>
        {/* Chat Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Alice</h2>
              <p className="text-sm text-gray-500">Online</p>
            </div>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="lg:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-purple-400">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`max-w-[90%] lg:max-w-[70%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex items-center">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;