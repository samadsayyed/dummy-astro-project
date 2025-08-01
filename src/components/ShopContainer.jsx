import React, { useState, useEffect, useMemo } from 'react';
import FilterSidebar from './FilterSidebar';
import ProductSort from './ProductSort';
import Pagination from './Pagination';
import ProductCardWrapper from './ProductCardWrapper';

const ShopContainer = ({ 
  initialProducts = [], 
  categories = [], 
  itemsPerPage = 12 
}) => {
  // State management
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: [],
    price: { min: 0, max: 100000 },
    availability: 'all',
    search: ''
  });
  console.log(filters);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Calculate price range from products
  const priceRange = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 100000 };
    
    const prices = products.map(p => {
      const price = p.discount_price && parseFloat(p.discount_price) < parseFloat(p.price) 
        ? parseFloat(p.discount_price) 
        : parseFloat(p.price);
      return price;
    });
    
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices))
    };
  }, [products]);

  // Initialize price filter with actual range
  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      price: priceRange
    }));
  }, [priceRange]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply search filter
    if (filters.search) {
      const searchTerm = filters.search?.toLowerCase();
      filtered = filtered.filter(product =>
        product.name?.toLowerCase().includes(searchTerm) ||
        (product.attributes && Object.values(product.attributes).some(attr => 
          attr?.toLowerCase().includes(searchTerm)
        ))
      );
    }

    // Apply category filter
    if (filters.category.length > 0) {
      filtered = filtered.filter(product =>
        filters.category.includes(product.category_name)
      );
    }

    // Apply price filter
    if (filters.price) {
      filtered = filtered.filter(product => {
        const price = product.discount_price && parseFloat(product.discount_price) < parseFloat(product.price)
          ? parseFloat(product.discount_price)
          : parseFloat(product.price);
        return price >= filters.price.min && price <= filters.price.max;
      });
    }

    // Apply availability filter
    if (filters.availability !== 'all') {
      if (filters.availability === 'in_stock') {
        filtered = filtered.filter(product => product.in_stock && product.stock_quantity > 0);
      } else if (filters.availability === 'out_of_stock') {
        filtered = filtered.filter(product => !product.in_stock || product.stock_quantity <= 0);
      }
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case 'price':
          aValue = a.discount_price && parseFloat(a.discount_price) < parseFloat(a.price)
            ? parseFloat(a.discount_price)
            : parseFloat(a.price);
          bValue = b.discount_price && parseFloat(b.discount_price) < parseFloat(b.price)
            ? parseFloat(b.discount_price)
            : parseFloat(b.price);
          break;
        case 'name':
          aValue = a.name?.toLowerCase();
          bValue = b.name?.toLowerCase();
          break;
        case 'created_at':
          aValue = new Date(a.created_at || 0);
          bValue = new Date(b.created_at || 0);
          break;
        default:
          aValue = a[sortBy];
          bValue = b[sortBy];
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [products, filters, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleSortChange = (field, order) => {
    setSortBy(field);
    setSortOrder(order);
    setCurrentPage(1); // Reset to first page when sort changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top of products
    document.getElementById('products-grid')?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  const handleLoadMore = async () => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setCurrentPage(prev => prev + 1);
      setLoading(false);
    }, 500);
  };

  const toggleFilterSidebar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  // Grid class based on view mode
  const getGridClass = () => {
    if (viewMode === 'list') {
      return 'flex flex-col space-y-4';
    }
    return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar
            filters={filters}
            onFiltersChange={handleFiltersChange}
            isOpen={isFilterOpen}
            onToggle={toggleFilterSidebar}
            categories={categories}
            priceRange={priceRange}
          />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
              <p className="text-gray-600">Discover our curated collection of premium products</p>
            </div>

            {/* Sort and View Controls */}
            <ProductSort
              sortBy={sortBy}
              sortOrder={sortOrder}
              onSortChange={handleSortChange}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              onFilterToggle={toggleFilterSidebar}
              totalResults={filteredAndSortedProducts.length}
              className="mb-6"
            />

            {/* Products Grid */}
            <div id="products-grid" className="mb-8">
              {paginatedProducts.length > 0 ? (
                <div className={getGridClass()}>
                  {paginatedProducts.map((product) => (
                    <ProductCardWrapper key={product.id} product={product} viewMode={viewMode} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-4h-2M9 9h2m0 0h2m-2 0V7m0 2v2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters or search criteria</p>
                  <button
                    onClick={() => handleFiltersChange({
                      category: [],
                      price: priceRange,
                      availability: 'all',
                      search: ''
                    })}
                    className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {paginatedProducts.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredAndSortedProducts.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                onLoadMore={handleLoadMore}
                loading={loading}
                className="mt-8"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContainer; 