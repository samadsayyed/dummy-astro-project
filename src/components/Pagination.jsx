import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  totalItems,
  itemsPerPage,
  onPageChange, 
  showLoadMore = false,
  onLoadMore,
  loading = false,
  className = ""
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;
    
    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage <= 4) {
        // Current page is near the beginning
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Current page is near the end
        pages.push('ellipsis');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          if (i > 1) pages.push(i);
        }
      } else {
        // Current page is in the middle
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  if (totalPages <= 1 && !showLoadMore) {
    return null;
  }

  return (
    <div className={`flex flex-col space-y-4 ${className}`}>
      {/* Results Summary */}
      <div className="text-center text-sm text-gray-600">
        Showing <span className="font-medium text-gray-900">{startItem}</span> to{' '}
        <span className="font-medium text-gray-900">{endItem}</span> of{' '}
        <span className="font-medium text-gray-900">{totalItems}</span> results
      </div>

      {/* Load More Button (if enabled) */}
      {showLoadMore && currentPage < totalPages && (
        <div className="flex justify-center">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 
                     hover:bg-gray-900 hover:text-white transition-all duration-300 
                     disabled:opacity-50 disabled:cursor-not-allowed
                     font-medium text-sm tracking-wide transform hover:scale-105"
          >
            {loading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                <span>Loading...</span>
              </div>
            ) : (
              'Load More Products'
            )}
          </button>
        </div>
      )}

      {/* Traditional Pagination */}
      {!showLoadMore && totalPages > 1 && (
        <div className="flex items-center justify-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 
                     hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {pageNumbers.map((page, index) => (
              <React.Fragment key={index}>
                {page === 'ellipsis' ? (
                  <div className="flex items-center justify-center w-10 h-10">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </div>
                ) : (
                  <button
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 text-sm font-medium transition-all duration-200 
                      ${currentPage === page
                        ? 'bg-gray-900 text-white shadow-md transform scale-105'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 
                     hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed
                     transition-all duration-200"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      )}

      {/* Page Jump */}
      {totalPages > 10 && (
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span className="text-gray-600">Go to page:</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={(e) => {
              const page = parseInt(e.target.value);
              if (page >= 1 && page <= totalPages) {
                onPageChange(page);
              }
            }}
            className="w-16 px-2 py-1 text-center border border-gray-300 
                     focus:ring-2 focus:ring-black focus:border-transparent"
          />
          <span className="text-gray-600">of {totalPages}</span>
        </div>
      )}
    </div>
  );
};

export default Pagination; 