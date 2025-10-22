import React from 'react';

/**
 * ChatMessage Component
 * 
 * Individual message bubble in chat interface
 * Styles differently for user vs bot messages
 * 
 * @param {Object} message - Message object with type and text
 */
const ChatMessage = ({ message }) => {
  const isUser = message.type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] p-4 rounded-xl ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p className="text-sm whitespace-pre-line">{message.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;