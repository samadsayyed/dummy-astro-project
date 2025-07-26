import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';

const FilterSidebar = ({ 
  filters, 
  onFiltersChange, 
  isOpen, 
  onToggle, 
  categories = [],
  priceRange = { min: 0, max: 100000 }
}) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    category: true,
    availability: true
  });

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...localFilters, [filterType]: value };
    setLocalFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handlePriceChange = (type, value) => {
    const newPriceFilter = { ...localFilters.price, [type]: parseInt(value) };
    handleFilterChange('price', newPriceFilter);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllFilters = () => {
    const clearedFilters = {
      category: [],
      price: priceRange,
      availability: 'all',
      search: ''
    };
    setLocalFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  const activeFilterCount = () => {
    let count = 0;
    if (localFilters.category?.length > 0) count++;
    if (localFilters.price?.min > priceRange.min || localFilters.price?.max < priceRange.max) count++;
    if (localFilters.availability !== 'all') count++;
    if (localFilters.search?.length > 0) count++;
    return count;
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Filter Sidebar */}
      <div className={`
        fixed lg:relative lg:translate-x-0 top-0 left-0 h-full lg:h-auto
        w-80 lg:w-72 bg-white shadow-xl lg:shadow-none border-r border-gray-200
        z-50 lg:z-auto transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            {activeFilterCount() > 0 && (
              <span className="bg-black text-white text-xs px-2 py-1">
                {activeFilterCount()}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {activeFilterCount() > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Clear all
              </button>
            )}
            <button
              onClick={onToggle}
              className="lg:hidden p-1 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Filters Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Search Filter */}
          <div>
            <input
              type="text"
              placeholder="Search products..."
              value={localFilters.search || ''}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all"
            />
          </div>

          {/* Price Range Filter */}
          <div>
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full text-left"
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Price Range
              </h4>
              {expandedSections.price ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.price && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Min Price</label>
                    <input
                      type="number"
                      value={localFilters.price?.min || priceRange.min}
                      onChange={(e) => handlePriceChange('min', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-black focus:border-transparent"
                      min={priceRange.min}
                      max={priceRange.max}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Max Price</label>
                    <input
                      type="number"
                      value={localFilters.price?.max || priceRange.max}
                      onChange={(e) => handlePriceChange('max', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 text-sm focus:ring-1 focus:ring-black focus:border-transparent"
                      min={priceRange.min}
                      max={priceRange.max}
                    />
                  </div>
                </div>
                
                {/* Price Range Slider */}
                <div className="relative">
                  <input
                    type="range"
                    min={priceRange.min}
                    max={priceRange.max}
                    value={localFilters.price?.max || priceRange.max}
                    onChange={(e) => handlePriceChange('max', e.target.value)}
                    className="w-full h-2 bg-gray-200 appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Category Filter */}
          <div>
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full text-left"
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Categories
              </h4>
              {expandedSections.category ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.category && (
              <div className="mt-4 space-y-3 max-h-48 overflow-y-auto">
                {categories.length > 0 ? categories.map((category) => (
                  <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={localFilters.category?.includes(category.id) || false}
                      onChange={(e) => {
                        const currentCategories = localFilters.category || [];
                        const newCategories = e.target.checked
                          ? [...currentCategories, category.id]
                          : currentCategories.filter(id => id !== category.id);
                        handleFilterChange('category', newCategories);
                      }}
                      className="w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-2"
                    />
                    <span className="text-sm text-gray-700 flex-1">{category.name}</span>
                  </label>
                )) : (
                  <p className="text-sm text-gray-500">No categories available</p>
                )}
              </div>
            )}
          </div>

          {/* Availability Filter */}
          <div>
            <button
              onClick={() => toggleSection('availability')}
              className="flex items-center justify-between w-full text-left"
            >
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Availability
              </h4>
              {expandedSections.availability ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </button>
            
            {expandedSections.availability && (
              <div className="mt-4 space-y-3">
                {[
                  { value: 'all', label: 'All Products' },
                  { value: 'in_stock', label: 'In Stock' },
                  { value: 'out_of_stock', label: 'Out of Stock' }
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="availability"
                      value={option.value}
                      checked={localFilters.availability === option.value}
                      onChange={(e) => handleFilterChange('availability', e.target.value)}
                      className="w-4 h-4 text-black border-gray-300 focus:ring-black focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          background: #000;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #000;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
};

export default FilterSidebar; 