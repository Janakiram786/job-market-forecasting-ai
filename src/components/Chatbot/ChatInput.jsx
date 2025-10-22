import React from 'react';
import { Send } from 'lucide-react';

/**
 * ChatInput Component
 * 
 * Input field and send button for chatbot
 * Includes suggested questions for quick interaction
 * 
 * @param {string} inputMessage - Current input value
 * @param {function} setInputMessage - Function to update input
 * @param {function} handleChatSubmit - Function to submit message
 */
const ChatInput = ({ inputMessage, setInputMessage, handleChatSubmit }) => {
  const suggestedQuestions = [
    'What are trending AI jobs?',
    'Average salary?',
    'Best skills to learn?',
    'Remote opportunities?'
  ];

  return (
    <div className="p-4 border-t bg-gray-50">
      {/* Input Field and Send Button */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit(e)}
          placeholder="Ask about job trends, salaries, skills..."
          className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleChatSubmit}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </div>

      {/* Suggested Questions */}
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestedQuestions.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => setInputMessage(suggestion)}
            className="text-xs px-3 py-1.5 bg-white border rounded-full hover:bg-gray-50 transition-colors text-gray-600"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatInput;