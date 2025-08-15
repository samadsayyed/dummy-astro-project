/**
 * Wishlist Utility Functions
 * Handles wishlist operations using localStorage
 */

// Initialize wishlist in localStorage if it doesn't exist
const initWishlist = () => {
  if (!localStorage.getItem('wishlist')) {
    localStorage.setItem('wishlist', JSON.stringify({
      items: [],
      totalItems: 0
    }));
  }
  return getWishlist();
};

// Get wishlist from localStorage
const getWishlist = () => {
  const wishlist = localStorage.getItem('wishlist');
  return wishlist ? JSON.parse(wishlist) : { items: [], totalItems: 0 };
};

// Save wishlist to localStorage
const saveWishlist = (wishlist) => {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  // Dispatch custom event for wishlist updates
  window.dispatchEvent(new CustomEvent('wishlist-updated', { detail: wishlist }));
  return wishlist;
};

// Add item to wishlist
const addToWishlist = (product) => {
  const wishlist = getWishlist();
  
  // Ensure wishlist.items exists
  if (!wishlist.items) {
    wishlist.items = [];
  }
  
  // Check if item already exists
  const existingItem = wishlist.items.find(item => item.id === product.id);
  
  if (!existingItem) {
    // Add new item
    wishlist.items.push({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      discount_price: product.discount_price,
      image: product.gallery && product.gallery[0] ? product.gallery[0] : "https://placehold.co/400x400",
      in_stock: product.in_stock,
      stock_quantity: product.stock_quantity,
      attributes: product.attributes || {}
    });
    
    // Update wishlist totals
    updateWishlistTotals(wishlist);
    
    return saveWishlist(wishlist);
  }
  
  return wishlist;
};

// Remove item from wishlist
const removeFromWishlist = (productId) => {
  const wishlist = getWishlist();
  
  // Ensure wishlist.items exists
  if (!wishlist.items) {
    wishlist.items = [];
    return saveWishlist(wishlist);
  }
  
  wishlist.items = wishlist.items.filter(item => item.id !== productId);
  
  // Update wishlist totals
  updateWishlistTotals(wishlist);
  
  return saveWishlist(wishlist);
};

// Check if item is in wishlist
const isInWishlist = (productId) => {
  const wishlist = getWishlist();
  return wishlist.items && wishlist.items.some(item => item.id === productId);
};

// Clear wishlist
const clearWishlist = () => {
  return saveWishlist({ items: [], totalItems: 0 });
};

// Update wishlist totals (item count)
const updateWishlistTotals = (wishlist) => {
  // Ensure wishlist.items exists
  if (!wishlist.items) {
    wishlist.items = [];
    wishlist.totalItems = 0;
    return wishlist;
  }
  
  wishlist.totalItems = wishlist.items.length;
  return wishlist;
};

// Format price to currency string
const formatPrice = (price) => {
  return parseFloat(price).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export {
  initWishlist,
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
  clearWishlist,
  formatPrice
};


