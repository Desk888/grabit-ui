'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';

interface SearchContextType {
  searchTerm: string;
  category: string;
  postcode: string;
  setSearchTerm: (term: string) => void;
  setCategory: (category: string) => void;
  setPostcode: (postcode: string) => void;
  clearFilters: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [postcode, setPostcode] = useState('');

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setCategory('All Categories');
    setPostcode('');
  }, []);

  const value: SearchContextType = {
    searchTerm,
    category,
    postcode,
    setSearchTerm,
    setCategory,
    setPostcode,
    clearFilters,
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}

// Product type definition
export interface Product {
  id: number;
  title: string;
  location: string;
  postedAt: Date;
  images?: string[];
  category: string;
  postcode: string;
}