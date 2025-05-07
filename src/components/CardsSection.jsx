import { useState } from 'react';

export default function ModernFurnitureShowcase() {
  const products = [
    {
      id: 1,
      name: "Wood Outdoor Adirondack Chair",
      image: "https://placehold.co/600x400",
      price: 1009,
      originalPrice: 1250,
      isHot: true,
      isOnSale: true
    },
    {
      id: 2,
      name: "Solid Wood Bar Storage Cabinet",
      image: "https://placehold.co/600x400",
      price: 1899,
      originalPrice: null,
      isHot: false,
      isOnSale: false
    },
    {
      id: 3,
      name: "Solid Wood Bed With Fabric Headboard",
      image: "https://placehold.co/600x400",
      price: 3707,
      maxPrice: 5707,
      originalPrice: null,
      isHot: false,
      isOnSale: false
    },
    {
        id: 3,
        name: "Solid Wood Bed With Fabric Headboard",
        image: "https://placehold.co/600x400",
        price: 3707,
        maxPrice: 5707,
        originalPrice: null,
        isHot: false,
        isOnSale: false
      },
      {
          id: 3,
          name: "Solid Wood Bed With Fabric Headboard",
          image: "https://placehold.co/600x400",
          price: 3707,
          maxPrice: 5707,
          originalPrice: null,
          isHot: false,
          isOnSale: false
        },
        {
            id: 3,
            name: "Solid Wood Bed With Fabric Headboard",
            image: "https://placehold.co/600x400",
            price: 3707,
            maxPrice: 5707,
            originalPrice: null,
            isHot: false,
            isOnSale: false
          },
          {
              id: 3,
              name: "Solid Wood Bed With Fabric Headboard",
              image: "https://placehold.co/600x400",
              price: 3707,
              maxPrice: 5707,
              originalPrice: null,
              isHot: false,
              isOnSale: false
            }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row">
      {/* Title Section */}

      {/* Products Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:w-1/4 mb-8 md:mb-0 pr-0 md:pr-8 ">
        <h2 className="text-4xl font-bold mb-2">
          <span className="block">Best</span>
          <span className="block">Modern</span>
          <span className="block">Furniture</span>
        </h2>
        <a href="#" className="inline-block mt-4 text-sm font-medium">
          See All &gt;&gt;
        </a>
      </div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddToCartHovered, setIsAddToCartHovered] = useState(false);
  
  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  return (
    <div 
      className="relative bg-gray-100 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        {/* Hot and Sale Tags */}
        {(product.isHot || product.isOnSale) && (
          <div className="absolute top-2 left-2 flex gap-1 z-10">
            {product.isHot && (
              <span className="bg-red-600 text-white text-xs px-2 py-1">HOT</span>
            )}
            {product.isOnSale && (
              <span className="bg-black text-white text-xs px-2 py-1">SALE</span>
            )}
          </div>
        )}

        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-80 object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />

        {/* Action Buttons that appear on hover */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${isHovered ? 'bg-black/10 ' : 'bg-transparent'}`}>
          {/* Quick View and Compare Icons */}
          {isHovered && (
            <div className="absolute top-4 right-4 flex flex-col gap-2 transition-opacity duration-300 opacity-100">
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>
          )}
          
          {/* Add to Cart Button for all products */}
            <button 
              className={`absolute w-full bottom-0 left-0 right-0 mx-auto py-2 text-center text-white font-medium transition-all duration-300 ${
                isAddToCartHovered ? 'bg-red-600' : 'bg-black'
              } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              onMouseEnter={() => setIsAddToCartHovered(true)}
              onMouseLeave={() => setIsAddToCartHovered(false)}
            >
              ADD TO CART
            </button>
        </div>

        {/* Wishlist Heart Icon */}
        <button className={`absolute bottom-12 right-4 bg-white p-2 rounded-full shadow transition-all duration-300 transform ${isHovered ? 'opacity-100 hover:scale-110' : 'opacity-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <div className="mt-2 flex items-center">
          <span className="font-bold">{formatPrice(product.price)}</span>
          
          {product.maxPrice && (
            <span className="font-bold ml-1">
              &nbsp;– {formatPrice(product.maxPrice)}
            </span>
          )}
          
          {product.originalPrice && (
            <span className="line-through text-gray-500 ml-2">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}