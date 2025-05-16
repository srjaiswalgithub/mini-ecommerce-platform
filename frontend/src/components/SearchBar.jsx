import React, { useEffect, useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
     
    e.preventDefault();
    onSearch(query.trim());
  };
  
  useEffect(()=>{
    onSearch(query.trim());
  },[query])
  return (
    <form onSubmit={handleSubmit} className="mb-4 flex justify-center gap-2">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        className="border px-3 py-2 rounded w-full max-w-md"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
