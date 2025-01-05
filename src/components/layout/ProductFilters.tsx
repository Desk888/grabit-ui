import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

const sortOptions: FilterOption[] = [
  { label: 'Newest First', value: 'newest' },
  { label: 'Oldest First', value: 'oldest' },
  { label: 'Distance', value: 'distance' },
];

export default function ProductFilters() {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-2">
        <SlidersHorizontal size={20} className="text-gray-500" />
        <span className="font-medium">Filters:</span>
      </div>
      <select className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="">Sort by</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <select className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="">Distance</option>
        <option value="5">Within 5 miles</option>
        <option value="10">Within 10 miles</option>
        <option value="25">Within 25 miles</option>
      </select>
    </div>
  );
}