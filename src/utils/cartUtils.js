/**
 * Cart Utility Functions
 * Handles cart operations using localStorage
 */

// Initialize cart in localStorage if it doesn't exist
const initCart = () => {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify({
      items: [],
      totalItems: 0,
      subtotal: 0
    }));
  }
  return getCart();
};

// Get cart from localStorage
const getCart = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : { items: [], totalItems: 0, subtotal: 0 };
};

// Save cart to localStorage
const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  // Dispatch custom event for cart updates
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
  return cart;
};

// Add item to cart
const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  
  // Ensure cart.items exists
  if (!cart.items) {
    cart.items = [];
  }
  
  const existingItemIndex = cart.items.findIndex(item => item.id === product.id);
  
  if (existingItemIndex >= 0) {
    // Update quantity if item already exists
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    // Add new item
    cart.items.push({
      id: product.id,
      name: product.name,
      price: product.discount_price || product.price,
      image: product.gallery[0],
      quantity
    });
  }
  
  // Update cart totals
  updateCartTotals(cart);
  
  return saveCart(cart);
};

// Remove item from cart
const removeFromCart = (productId) => {
  const cart = getCart();
  // Ensure cart.items exists
  if (!cart.items) {
    cart.items = [];
    return saveCart(cart);
  }
  
  cart.items = cart.items.filter(item => item.id !== productId);
  
  // Update cart totals
  updateCartTotals(cart);
  
  return saveCart(cart);
};

// Update item quantity
const updateQuantity = (productId, quantity) => {
  const cart = getCart();
  // Ensure cart.items exists
  if (!cart.items) {
    cart.items = [];
    return saveCart(cart);
  }
  
  const itemIndex = cart.items.findIndex(item => item.id === productId);
  
  if (itemIndex >= 0) {
    if (quantity <= 0) {
      // Remove item if quantity is 0 or negative
      return removeFromCart(productId);
    }
    
    cart.items[itemIndex].quantity = quantity;
    updateCartTotals(cart);
    return saveCart(cart);
  }
  
  return cart;
};

// Clear cart
const clearCart = () => {
  return saveCart({ items: [], totalItems: 0, subtotal: 0 });
};

// Update cart totals (item count and subtotal)
const updateCartTotals = (cart) => {
  // Ensure cart.items exists
  if (!cart.items) {
    cart.items = [];
    cart.totalItems = 0;
    cart.subtotal = 0;
    return cart;
  }
  
  cart.totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
  cart.subtotal = cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  return cart;
};

// Format price to currency string
const formatPrice = (price) => {
  return `₹${price.toLocaleString()}`;
};

export {
  initCart,
  getCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  formatPrice
};