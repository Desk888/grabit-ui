'use client';

import React, { useState } from 'react';
import { ConversationList } from '../../components/messaging/ConversationList';
import { MessageThread } from '../../components/messaging/MessageThread';

// Mock data
const mockConversations = [
  {
    id: '1',
    name: 'Alice Johnson',
    lastMessage: 'Sure, that works for me!',
    timestamp: '10:30 AM',
    unread: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Bob Smith',
    lastMessage: 'When can we meet?',
    timestamp: 'Yesterday',
    unread: false,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
  },
  // Add more conversations as needed
];

const mockMessages = [
  {
    id: '1',
    content: 'Hey, how are you?',
    timestamp: '10:00 AM',
    sender: {
      id: '2',
      name: 'Alice Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    isSent: false,
  },
  {
    id: '2',
    content: "I'm good, thanks! How about you?",
    timestamp: '10:02 AM',
    sender: {
      id: '1',
      name: 'You',
      avatar: '',
    },
    isSent: true,
  },
  // Add more messages as needed
];

const Inbox: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0].id);

  const handleSendMessage = (content: string) => {
    console.log('Sending message:', content);
    // Implement message sending logic here
  };

  const selectedRecipient = {
    id: '2',
    name: 'Alice Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    status: 'online' as const,
  };

  return (
    <div className="bg-gray-50 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">My Messages</h2>
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex">
            <div className="w-96 flex-shrink-0">
              <ConversationList
                conversations={mockConversations}
                selectedId={selectedConversation}
                onSelect={setSelectedConversation}
              />
            </div>
            <div className="flex-1">
              <MessageThread
                messages={mockMessages}
                recipient={selectedRecipient}
                onSendMessage={handleSendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;