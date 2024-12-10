import React from 'react';

interface SearchBarProps {
  placeholder: string;
  icon: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder, 
  icon, 
  className = '', 
  value,
  onChange
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 sm:text-sm"
        value={value}
        onChange={onChange}
        maxLength={30}
      />
    </div>
  );
};

export default SearchBar;