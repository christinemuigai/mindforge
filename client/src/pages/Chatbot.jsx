import React, { useState } from "react";
import { FiSend, FiPlus, FiRefreshCcw } from "react-icons/fi";
import { AiOutlinePaperClip, AiOutlinePicture } from "react-icons/ai";

export default function Chatbot() {
  const [message, setMessage] = useState("");

  const prompts = [
    "Write a to-do list for a personal project or task",
    "Generate an email reply to a job offer",
    "Summarize this article or text for me in one paragraph",
    "How does AI work in a technical capacity",
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 space-y-6">
        <div className="w-10 h-10 bg-gray-900 rounded-lg"></div>
        <div className="flex flex-col space-y-6">
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
          <div className="w-6 h-6 bg-gray-300 rounded"></div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl font-semibold text-gray-900">
            Hi there, <span className="text-purple-500">John</span>
          </h1>
          <h2 className="text-3xl font-medium text-gray-700 mt-1">
            What <span className="text-purple-600 font-semibold">would like to know?</span>
          </h2>

          <p className="text-gray-500 mt-6">
            Use one of the most common prompts below or use your own to begin
          </p>

          {/* Prompts Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {prompts.map((prompt, i) => (
              <button
                key={i}
                className="bg-white border border-gray-200 shadow-sm rounded-xl px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:border-purple-400 transition"
              >
                {prompt}
              </button>
            ))}
          </div>

          <button className="flex items-center justify-center text-gray-400 text-sm mt-4 hover:text-purple-500">
            <FiRefreshCcw className="mr-2" /> Refresh Prompts
          </button>

          {/* Input Box */}
          <div className="mt-10 bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Ask whatever you want…."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 text-gray-700 placeholder-gray-400 outline-none bg-transparent text-sm"
              maxLength={1000}
            />
            <div className="flex items-center space-x-3 text-gray-400">
              <button className="hover:text-purple-500">
                <AiOutlinePaperClip size={20} />
              </button>
              <button className="hover:text-purple-500">
                <AiOutlinePicture size={20} />
              </button>
              <div className="text-gray-400 text-xs">{message.length}/1000</div>
              <button className="bg-purple-600 text-white rounded-lg p-2 hover:bg-purple-700">
                <FiSend size={18} />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-gray-400 text-xs mt-6">
            <span className="font-medium text-gray-500">All Web ▼</span>
          </div>
        </div>
      </main>

      {/* Profile Image */}
      <div className="absolute bottom-6 left-6">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
}
