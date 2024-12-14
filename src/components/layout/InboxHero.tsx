import React from 'react';
import { MessageSquare } from 'lucide-react';

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center px-4">
      <div className="rounded-full p-6">
        <MessageSquare className="w-12 h-12 text-[#2E882C]" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900">Chat Functionality Coming Soon</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        We're working hard to bring you an amazing chat experience. Stay tuned for updates!
      </p>
      <div className="w-24 h-1 bg-gray-400 rounded-full mt-6"></div>
    </div>
  );
}