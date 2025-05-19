import React from 'react';

export default function Loader() {
  // Create an array of 7 items to match the product grid in CardsSection
  const skeletonCards = Array(7).fill(null);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        {/* Title Section Skeleton */}
        <div className="md:w-1/4 mb-8 md:mb-0 pr-0 md:pr-8">
          <div className="h-10 w-3/4 bg-gray-200 animate-pulse mb-2 rounded"></div>
          <div className="h-10 w-3/4 bg-gray-200 animate-pulse mb-2 rounded"></div>
          <div className="h-10 w-3/4 bg-gray-200 animate-pulse mb-2 rounded"></div>
          <div className="h-6 w-1/4 bg-gray-200 animate-pulse mt-4 rounded"></div>
        </div>
        
        {/* Product Card Skeletons */}
        {skeletonCards.map((_, index) => (
          <div key={index} className="relative bg-gray-100 flex flex-col">
            {/* Product Image Skeleton with shimmer effect */}
            <div className="relative overflow-hidden">
              <div className="w-full h-80 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:400%_100%] animate-shimmer">
                {/* Tags Skeleton */}
                <div className="absolute top-2 left-2 flex gap-1 z-10">
                  <div className="h-6 w-12 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Product Info Skeleton */}
            <div className="p-4">
              <div className="h-6 w-3/4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:400%_100%] animate-shimmer mb-2 rounded"></div>
              <div className="mt-2 flex items-center">
                <div className="h-5 w-20 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:400%_100%] animate-shimmer rounded"></div>
                <div className="h-5 w-16 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:400%_100%] animate-shimmer ml-2 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}