import React from 'react';

interface ProductSpecificationsProps {
  specifications: Record<string, string>;
}

export function ProductSpecifications({ specifications }: ProductSpecificationsProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Specifications</h2>
      <dl className="grid grid-cols-1 gap-y-2">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="flex items-center py-2 border-b border-gray-100">
            <dt className="text-gray-500 w-1/3">{key}</dt>
            <dd className="text-gray-900 flex-1">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}