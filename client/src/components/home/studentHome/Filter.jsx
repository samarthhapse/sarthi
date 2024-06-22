import React from 'react';

const FilterComponent = () => {
  return (
    <div className="w-72 mx-auto p-4 border border-gray-300 rounded-md">
      <input 
        type="text" 
        className="w-full p-2 mb-4 border border-gray-300 rounded-md" 
        placeholder="Filter items..." 
      />
      <ul className="list-none">
        <li className="p-2 border-b border-gray-300">Item 1</li>
        <li className="p-2 border-b border-gray-300">Item 2</li>
        <li className="p-2 border-b border-gray-300">Item 3</li>
        <li className="p-2 border-b border-gray-300">Item 4</li>
      </ul>
    </div>
  );
};

export default FilterComponent;
