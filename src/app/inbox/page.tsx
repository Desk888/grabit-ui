import React from 'react';
import { Hero } from '@/components/layout/chat/InboxHero';

function InboxHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
      <Hero />
    </div>
  );
}

export default InboxHero;