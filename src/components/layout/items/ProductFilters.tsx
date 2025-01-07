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
  { label: 'Condition', value: 'condition' },
];

export default function ProductFilters() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg shadow-sm">
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
        <option value="50">Within 50 miles</option>
        <option value="100">Within 100 miles</option>
      </select>
      <select className="px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="">Condition</option>
        <option value="Used - Fair">Used - Fair</option>
        <option value="Used - Good">Used - Good</option>
        <option value="Used - Excellent">Used Excellent</option>
        <option value="Brand New - Unboxed">Brand New - Unboxed</option>
        <option value="Brand New - Used">Brand New - Used</option>
      </select>
    </div>
  );
}