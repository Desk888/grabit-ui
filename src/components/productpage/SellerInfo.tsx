'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface SellerInfoProps {
  name: string;
  joinedDate: string;
  onContact: () => void;
}

export function SellerInfo({ name, joinedDate, onContact }: SellerInfoProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{joinedDate}</p>
        </div>
        <button
          onClick={onContact}
          className="bg-[#2D882C] text-white px-6 py-2 rounded-lg hover:bg-[#236F22] transition-colors flex items-center space-x-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Contact</span>
        </button>
      </div>
    </div>
  );
}