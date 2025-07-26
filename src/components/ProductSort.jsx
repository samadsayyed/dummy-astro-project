import React from 'react';
import { Grid, List, Filter, SortAsc } from 'lucide-react';

const ProductSort = ({ 
  sortBy, 
  sortOrder, 
  onSortChange, 
  viewMode, 
  onViewModeChange, 
  onFilterToggle,
  totalResults,
  className = ""
}) => {
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'created_at', label: 'Newest' },
    { value: 'popularity', label: 'Popularity' }
  ];

  const handleSortChange = (field) => {
    if (sortBy === field) {
      // Toggle order if same field
      onSortChange(field, sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Default to ascending for new field
      onSortChange(field, 'asc');
    }
  };

  return (
    <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 border border-gray-200 ${className}`}>
      {/* Left side - Filter toggle (mobile) and results count */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onFilterToggle}
          className="lg:hidden flex items-center space-x-2 px-3 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
        </button>
        
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-900">{totalResults}</span> products found
        </div>
      </div>

      {/* Right side - Sort and view options */}
      <div className="flex items-center space-x-4">
        {/* Sort Options */}
        <div className="flex items-center space-x-2">
          <SortAsc className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600 hidden sm:block">Sort by:</span>
          <select
            value={`${sortBy}-${sortOrder}`}
            onChange={(e) => {
              const [field, order] = e.target.value.split('-');
              onSortChange(field, order);
            }}
            className="border border-gray-300 px-3 py-1.5 text-sm focus:ring-2 focus:ring-black focus:border-transparent bg-white"
          >
            {sortOptions.map(option => (
              <React.Fragment key={option.value}>
                <option value={`${option.value}-asc`}>
                  {option.label} (A-Z)
                </option>
                <option value={`${option.value}-desc`}>
                  {option.label} (Z-A)
                </option>
              </React.Fragment>
            ))}
          </select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center border border-gray-300 overflow-hidden">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 transition-colors ${
              viewMode === 'grid' 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            title="Grid view"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 transition-colors ${
              viewMode === 'list' 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
            title="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSort; 