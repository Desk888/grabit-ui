import React from 'react';
import { MoreVertical, Phone, Video } from 'lucide-react';

interface ThreadHeaderProps {
  recipient: {
    name: string;
    avatar: string;
    status: 'online' | 'offline';
  };
}

export const ThreadHeader: React.FC<ThreadHeaderProps> = ({ recipient }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={recipient.avatar}
            alt={recipient.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          {recipient.status === 'online' && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          )}
        </div>
        <div>
          <h2 className="font-medium text-gray-900">{recipient.name}</h2>
          <p className="text-sm text-gray-500">
            {recipient.status === 'online' ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Phone className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Video className="w-5 h-5 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};