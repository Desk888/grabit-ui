import React from 'react';
import { Search } from 'lucide-react';
import { ConversationItem } from './ConversationItem';
import { InputField } from '../auth/InputField';

interface Conversation {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  avatar: string;
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  selectedId,
  onSelect,
}) => {
  return (
    <div className="flex flex-col h-full max-w-7xl mx-auto border-r border-gray-200">
      <div className="p-4">
        <InputField
          icon={<Search className="w-5 h-5 text-gray-500" />}
          type="text"
          placeholder="Search messages"
          className="w-full"
        />
      </div>
      <div className="overflow-y-auto flex-1">
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            {...conversation}
            isSelected={selectedId === conversation.id}
            onClick={() => onSelect(conversation.id)}
          />
        ))}
      </div>
    </div>
  );
};