import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

interface MessageInputProps {
  onSend: (content: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Paperclip className="w-5 h-5 text-gray-600" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2E882C] focus:border-transparent"
        />
        <button
          type="button"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Smile className="w-5 h-5 text-gray-600" />
        </button>
        <button
          type="submit"
          disabled={!message.trim()}
          className="p-2 bg-[#2E882C] text-white rounded-full hover:bg-[#247022] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
};