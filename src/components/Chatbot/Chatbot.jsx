import React from 'react';
import { MessageSquare } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

/**
 * Chatbot Component
 * 
 * Main chatbot interface with message history and input
 * Provides AI-powered assistance for job market queries
 * 
 * @param {Array} chatMessages - Array of message objects
 * @param {string} inputMessage - Current input value
 * @param {function} setInputMessage - Function to update input
 * @param {function} handleChatSubmit - Function to submit message
 * @param {boolean} isTyping - Whether bot is typing response
 * @param {string} selectedCountry - Currently selected country
 */
const Chatbot = ({ 
  chatMessages, 
  inputMessage, 
  setInputMessage, 
  handleChatSubmit, 
  isTyping,
  selectedCountry 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      {/* Chatbot Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold">
              AI Job Market Assistant - {selectedCountry}
            </h2>
            <p className="text-blue-100 text-sm">
              Ask me anything about job trends, salaries, and career advice
            </p>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="h-[600px] flex flex-col">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chatMessages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg} />
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 p-4 rounded-xl">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input Area */}
        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleChatSubmit={handleChatSubmit}
        />
      </div>
    </div>
  );
};

export default Chatbot;