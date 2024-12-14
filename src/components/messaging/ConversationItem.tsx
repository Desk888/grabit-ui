import React from 'react';

interface ConversationItemProps {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatar: string;
  isSelected: boolean;
  onClick: () => void;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  name,
  lastMessage,
  timestamp,
  unread,
  avatar,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 ${
        isSelected ? 'bg-gray-50' : ''
      }`}
    >
      <img
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h3 className={`font-medium ${unread ? 'text-gray-900' : 'text-gray-700'}`}>
            {name}
          </h3>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        <p className={`text-sm truncate ${unread ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
          {lastMessage}
        </p>
      </div>
      {unread && (
        <div className="w-2.5 h-2.5 bg-[#2E882C] rounded-full flex-shrink-0" />
      )}
    </div>
  );
};