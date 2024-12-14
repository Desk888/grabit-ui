import React from 'react';
import { MessageInput } from './MessageInput';
import { ThreadHeader } from './ThreadHeader';
import { MessageBubble } from './MessageBubble';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  isSent: boolean;
}

interface MessageThreadProps {
  messages: Message[];
  recipient: {
    id: string;
    name: string;
    avatar: string;
    status: 'online' | 'offline';
  };
  onSendMessage: (content: string) => void;
}

export const MessageThread: React.FC<MessageThreadProps> = ({
  messages,
  recipient,
  onSendMessage,
}) => {
  return (
    <div className="flex flex-col h-full">
      <ThreadHeader recipient={recipient} />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} {...message} />
        ))}
      </div>
      <MessageInput onSend={onSendMessage} />
    </div>
  );
};