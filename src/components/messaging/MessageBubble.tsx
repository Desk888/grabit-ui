import React from 'react';

interface MessageBubbleProps {
  content: string;
  timestamp: string;
  sender: {
    name: string;
    avatar: string;
  };
  isSent: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  content,
  timestamp,
  sender,
  isSent,
}) => {
  return (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex gap-2 max-w-[70%] ${isSent ? 'flex-row-reverse' : ''}`}>
        {!isSent && (
          <img
            src={sender.avatar}
            alt={sender.name}
            className="w-8 h-8 rounded-full object-cover"
          />
        )}
        <div>
          <div
            className={`rounded-2xl px-4 py-2 ${
              isSent
                ? 'bg-[#2E882C] text-white'
                : 'bg-gray-100 text-gray-900'
            }`}
          >
            <p>{content}</p>
          </div>
          <p className={`text-xs text-gray-500 mt-1 ${isSent ? 'text-right' : ''}`}>
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};