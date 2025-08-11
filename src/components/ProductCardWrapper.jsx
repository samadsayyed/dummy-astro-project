import React from 'react';

const ProductCardWrapper = ({ product, viewMode = 'grid' }) => {
  // Helper function for price formatting
  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  // Helper to get first image from product gallery
  const getFirstImage = (product) => {
    return (
      (product.gallery && product.gallery[0]) || "https://placehold.co/400x400"
    );
  };

  const addToCart = (product, buttonElement) => {
    if (!product.in_stock || product.stock_quantity <= 0) {
      showToast("Product is out of stock", "error");
      return;
    }

    // Disable button and show loading state
    buttonElement.disabled = true;
    buttonElement.style.transform = "scale(0.98) translateY(0)";

    // Use the proper cart structure
    let cart = JSON.parse(localStorage.getItem("cart")) || {
      items: [],
      totalItems: 0,
      subtotal: 0,
    };

    // Ensure cart.items exists
    if (!cart.items) {
      cart.items = [];
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex >= 0) {
      // Update quantity if item already exists
      cart.items[existingItemIndex].quantity += 1;
    } else {
      // Add new item
      cart.items.push({
        id: product.id,
        name: product.name,
        price: product.discount_price || product.price,
        image: getFirstImage(product),
        quantity: 1,
      });
    }

    // Update cart totals
    cart.totalItems = cart.items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    cart.subtotal = cart.items.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );

    localStorage.setItem("cart", JSON.stringify(cart));

    // Animate button success state
    setTimeout(() => {
      buttonElement.classList.add("success");
      buttonElement.style.transform = "scale(1.02) translateY(-1px)";
      
      // Show toast notification
      showToast(`${product.name} added to cart`, "success");
      
      // Animate cart icon if it exists
      const cartIcon = document.querySelector('.cart-icon');
      if (cartIcon) {
        cartIcon.classList.add('cart-bounce');
        setTimeout(() => cartIcon.classList.remove('cart-bounce'), 800);
      }
      
      // Dispatch custom event for cart updates
      window.dispatchEvent(new CustomEvent("cart-updated", { detail: cart }));
    }, 200);

    // Reset button state after animation
    setTimeout(() => {
      buttonElement.classList.remove("success");
      buttonElement.disabled = false;
      buttonElement.querySelector('.btn-text').style.display = 'inline-block';
      buttonElement.querySelector('.btn-success').style.display = 'none';
      buttonElement.style.transform = '';
    }, 2500);
  };

  const showToast = (message, type = "success") => {
    // Use the global custom toast component
    if (window.customToast) {
      window.customToast.show(message, type, 4000);
    }
  };

  // Grid View Layout
  if (viewMode === 'grid') {
    return (
      <article className="relative bg-white flex flex-col group border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300 overflow-hidden">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          {/* Sale Tag */}
          {product.in_stock &&
            product.stock_quantity > 0 &&
            product.discount_price &&
            parseFloat(product.discount_price) < parseFloat(product.price) && (
              <div className="absolute top-3 left-3 flex gap-1 z-10">
                <span className="bg-black text-white text-xs font-medium px-3 py-1 tracking-wider">SALE</span>
              </div>
            )}

          <img
            src={getFirstImage(product)}
            alt={product.name}
            className="w-full aspect-square object-contain transition-all duration-700 ease-out group-hover:scale-105 filter group-hover:contrast-110"
            loading="lazy"
          />

          {/* Action Buttons that appear on hover */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:bg-black/5">
            {/* Quick View and Compare Icons */}
            <div className="absolute top-4 right-4 flex flex-col gap-3 transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0">
              <a
                href={`/shop/${product.slug}`}
                className="bg-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 hover:border-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
              <button className="bg-white p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 hover:border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              className="add-to-cart-btn absolute w-full bottom-0 left-0 cursor-pointer right-0 mx-auto py-3 text-center text-white font-medium tracking-wide transition-all duration-500 bg-gray-900 hover:bg-black opacity-0 group-hover:opacity-100 overflow-hidden border-t border-gray-800"
              onClick={(e) => addToCart(product, e.target)}
              disabled={!product.in_stock || product.stock_quantity <= 0}
            >
              <span className="btn-text transition-all duration-300">
                {product.in_stock && product.stock_quantity > 0
                  ? "ADD TO CART"
                  : "OUT OF STOCK"}
              </span>
              <span className="btn-success hidden">
                <svg className="inline-block w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                ADDED TO CART
              </span>
            </button>
          </div>

          {/* Wishlist Heart Icon */}
          <button className="absolute bottom-16 right-4 bg-white p-3 shadow-lg transition-all duration-500 transform opacity-0 group-hover:opacity-100 hover:scale-110 translate-x-2 group-hover:translate-x-0 border border-gray-100 hover:border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Product Info */}
        <div className="p-5 flex-grow">
          <a href={`/shop/${product.slug}`} className="block">
            <h3 className="font-semibold text-lg text-gray-900 hover:text-gray-600 transition-colors duration-300 leading-tight">
              {product.name}
            </h3>
          </a>
          <div className="mt-3 flex items-center">
            {product.discount_price &&
            parseFloat(product.discount_price) < parseFloat(product.price) ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-gray-900">{formatPrice(product.discount_price)}</span>
                <span className="line-through text-gray-500 text-sm">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="font-bold text-lg text-gray-900">{formatPrice(product.price)}</span>
            )}
          </div>

          {/* Show variant attributes if available */}
          {product.attributes && Object.keys(product.attributes).length > 0 && (
            <div className="mt-2 text-sm text-gray-600">
              {Object.entries(product.attributes)
                .slice(0, 1)
                .map(([key, value]) => (
                  <span key={key} className="capitalize">
                    {key}: {value}
                  </span>
                ))}
            </div>
          )}
        </div>


      </article>
    );
  }

  // List View Layout
  return (
    <article className="relative bg-white flex flex-col md:flex-row group border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300 overflow-hidden">
      {/* Product Image - Left side on desktop, top on mobile */}
      <div className="relative overflow-hidden md:w-56 md:flex-shrink-0">
        {/* Sale Tag */}
        {product.in_stock &&
          product.stock_quantity > 0 &&
          product.discount_price &&
          parseFloat(product.discount_price) < parseFloat(product.price) && (
            <div className="absolute top-3 left-3 flex gap-1 z-10">
              <span className="bg-black text-white text-xs font-medium px-3 py-1 tracking-wider">SALE</span>
            </div>
          )}

        <img
          src={getFirstImage(product)}
          alt={product.name}
          className="w-full h-48 md:h-full md:aspect-[4/3] object-contain transition-all duration-700 ease-out group-hover:scale-105 filter group-hover:contrast-110"
          loading="lazy"
        />
      </div>

      {/* Product Info - Right side on desktop, bottom on mobile */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        {/* Top section with product details */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <a href={`/shop/${product.slug}`} className="block">
                <h3 className="font-semibold text-lg text-gray-900 hover:text-gray-600 transition-colors duration-300 leading-tight mb-2">
                  {product.name}
                </h3>
              </a>
              
              {/* Price */}
              <div className="mb-3">
                {product.discount_price &&
                parseFloat(product.discount_price) < parseFloat(product.price) ? (
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl text-gray-900">{formatPrice(product.discount_price)}</span>
                    <span className="line-through text-gray-500 text-sm">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                ) : (
                  <span className="font-bold text-xl text-gray-900">{formatPrice(product.price)}</span>
                )}
              </div>

              {/* Attributes */}
              {product.attributes && Object.keys(product.attributes).length > 0 && (
                <div className="text-sm text-gray-600 mb-4">
                  {Object.entries(product.attributes)
                    .slice(0, 2)
                    .map(([key, value]) => (
                      <span key={key} className="capitalize mr-4">
                        {key}: {value}
                      </span>
                    ))}
                </div>
              )}
            </div>

            {/* Action buttons - top right */}
            <div className="flex flex-col gap-2 ml-4">
              <a
                href={`/shop/${product.slug}`}
                className="bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-gray-300"
                title="Quick View"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
              <button 
                className="bg-white p-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-200 hover:border-gray-300"
                title="Add to Wishlist"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section with CTA buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <button
              className="add-to-cart-btn bg-gray-900 text-white px-6 py-2 font-medium tracking-wide transition-all duration-300 hover:bg-black transform hover:scale-105"
              onClick={(e) => addToCart(product, e.target)}
              disabled={!product.in_stock || product.stock_quantity <= 0}
            >
              <span className="btn-text transition-all duration-300">
                {product.in_stock && product.stock_quantity > 0
                  ? "ADD TO CART"
                  : "OUT OF STOCK"}
              </span>
              <span className="btn-success hidden">
                <svg className="inline-block w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                ADDED TO CART
              </span>
            </button>
            
            <a
              href={`/shop/${product.slug}`}
              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-300"
            >
              View Details →
            </a>
          </div>

          {/* Stock status */}
          <div className="text-sm">
            {product.in_stock && product.stock_quantity > 0 ? (
              <span className="text-green-600 font-medium">In Stock</span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
          </div>
        </div>
      </div>


    </article>
  );
};

export default ProductCardWrapper; 