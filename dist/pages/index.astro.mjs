import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_BDYBIJ9N.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bqao17MK.mjs';
import 'clsx';
import { C as CategoriesService } from '../chunks/categoriesService_Dq2tWJlr.mjs';
/* empty css                                 */
import { b as getAllBlogs } from '../chunks/blogUtils_xY0vTRMC.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import { Mouse } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$CategorySection = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await CategoriesService.getAll();
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4 max-w-7xl mx-auto"> <h2 class="text-2xl font-bold mb-12 uppercase">Shop by category</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${categories.map((category) => renderTemplate`<a href="#" class="flex items-center  group"> <div class="relative w-24 aspect-square rounded-full overflow-hidden"> <img${addAttribute(category.image, "src")}${addAttribute(`${category.name} category`, "alt")} class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> </div> <div class="text-center ml-4"> <h3 class="text-lg font-medium">${category.name}</h3> <p class="text-sm text-gray-600">${category.products} products</p> </div> </a>`)} </div> </section>`;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/components/CategorySection.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://bablon.in/");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { product } = Astro2.props;
  const formatPrice = (price) => {
    return parseFloat(price).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };
  const getFirstImage = (product2) => {
    return product2.gallery && product2.gallery[0] || "https://placehold.co/400x400";
  };
  return renderTemplate(_a || (_a = __template(["", '<div class="relative bg-white flex flex-col group border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300" data-astro-cid-tjdfhdqb> <!-- Product Image --> <div class="relative overflow-hidden" data-astro-cid-tjdfhdqb> <!-- Sale Tag - Monochromatic --> ', " <img", "", ' class="w-full h-80 object-cover transition-all duration-700 ease-out group-hover:scale-102 filter group-hover:contrast-110" data-astro-cid-tjdfhdqb> <!-- Action Buttons that appear on hover --> <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:bg-black/5" data-astro-cid-tjdfhdqb> <!-- Quick View and Compare Icons --> <div class="absolute top-4 right-4 flex flex-col gap-3 transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" data-astro-cid-tjdfhdqb> <a', ' class="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 hover:border-gray-300" data-astro-cid-tjdfhdqb> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-tjdfhdqb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-tjdfhdqb></path> </svg> </a> <button class="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 hover:border-gray-300" data-astro-cid-tjdfhdqb> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-tjdfhdqb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" data-astro-cid-tjdfhdqb></path> </svg> </button> </div> <!-- Add to Cart Button - Monochromatic --> <button class="add-to-cart-btn absolute w-full bottom-0 left-0 cursor-pointer right-0 mx-auto py-3 text-center text-white font-medium tracking-wide transition-all duration-500 bg-gray-900 hover:bg-black opacity-0 group-hover:opacity-100 overflow-hidden border-t border-gray-800"', "", "", ' data-astro-cid-tjdfhdqb> <span class="btn-text transition-all duration-300" data-astro-cid-tjdfhdqb> ', ' </span> <span class="btn-success hidden" data-astro-cid-tjdfhdqb> <svg class="inline-block w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-tjdfhdqb> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-tjdfhdqb></path> </svg>\nADDED TO CART\n</span> </button> </div> <!-- Wishlist Heart Icon --> <button class="absolute bottom-16 right-4 bg-white p-3 rounded-full shadow-lg transition-all duration-500 transform opacity-0 group-hover:opacity-100 hover:scale-110 translate-x-2 group-hover:translate-x-0 border border-gray-100 hover:border-gray-300" data-astro-cid-tjdfhdqb> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-tjdfhdqb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-tjdfhdqb></path> </svg> </button> </div> <!-- Product Info --> <div class="p-5 flex-grow" data-astro-cid-tjdfhdqb> <a', ' class="block" data-astro-cid-tjdfhdqb> <h3 class="font-semibold text-lg text-gray-900 hover:text-gray-600 transition-colors duration-300 leading-tight" data-astro-cid-tjdfhdqb> ', ' </h3> </a> <div class="mt-3 flex items-center" data-astro-cid-tjdfhdqb> ', " </div>  ", ` </div> <!-- Toast Notification - Monochromatic --> <div class="toast-notification fixed top-6 right-6 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-2xl transform translate-x-full opacity-0 transition-all duration-500 ease-out z-50 border border-gray-700" data-astro-cid-tjdfhdqb> <div class="flex items-center" data-astro-cid-tjdfhdqb> <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-tjdfhdqb> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-tjdfhdqb></path> </svg> <span class="toast-message font-medium" data-astro-cid-tjdfhdqb>Added to cart!</span> </div> </div> </div>  <script>
  function addToCart(product, buttonElement) {
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
        image:
          product.gallery && product.gallery[0]
            ? product.gallery[0]
            : "https://placehold.co/400x400",
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
      showToast(\`\${product.name} added to cart\`, "success");
      
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
  }

  function showToast(message, type = "success") {
    const toast = document.querySelector('.toast-notification');
    if (!toast) return;

    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    // Set toast style based on type - keeping monochromatic
    if (type === "error") {
      toast.classList.remove('bg-gray-900', 'border-gray-700');
      toast.classList.add('bg-gray-800', 'border-gray-600');
    } else {
      toast.classList.remove('bg-gray-800', 'border-gray-600');
      toast.classList.add('bg-gray-900', 'border-gray-700');
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
<\/script>`], ["", '<div class="relative bg-white flex flex-col group border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-gray-300" data-astro-cid-tjdfhdqb> <!-- Product Image --> <div class="relative overflow-hidden" data-astro-cid-tjdfhdqb> <!-- Sale Tag - Monochromatic --> ', " <img", "", ' class="w-full h-80 object-cover transition-all duration-700 ease-out group-hover:scale-102 filter group-hover:contrast-110" data-astro-cid-tjdfhdqb> <!-- Action Buttons that appear on hover --> <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:bg-black/5" data-astro-cid-tjdfhdqb> <!-- Quick View and Compare Icons --> <div class="absolute top-4 right-4 flex flex-col gap-3 transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" data-astro-cid-tjdfhdqb> <a', ' class="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 hover:border-gray-300" data-astro-cid-tjdfhdqb> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-tjdfhdqb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" data-astro-cid-tjdfhdqb></path> </svg> </a> <button class="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 border border-gray-100 hover:border-gray-300" data-astro-cid-tjdfhdqb> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-tjdfhdqb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" data-astro-cid-tjdfhdqb></path> </svg> </button> </div> <!-- Add to Cart Button - Monochromatic --> <button class="add-to-cart-btn absolute w-full bottom-0 left-0 cursor-pointer right-0 mx-auto py-3 text-center text-white font-medium tracking-wide transition-all duration-500 bg-gray-900 hover:bg-black opacity-0 group-hover:opacity-100 overflow-hidden border-t border-gray-800"', "", "", ' data-astro-cid-tjdfhdqb> <span class="btn-text transition-all duration-300" data-astro-cid-tjdfhdqb> ', ' </span> <span class="btn-success hidden" data-astro-cid-tjdfhdqb> <svg class="inline-block w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-tjdfhdqb> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-tjdfhdqb></path> </svg>\nADDED TO CART\n</span> </button> </div> <!-- Wishlist Heart Icon --> <button class="absolute bottom-16 right-4 bg-white p-3 rounded-full shadow-lg transition-all duration-500 transform opacity-0 group-hover:opacity-100 hover:scale-110 translate-x-2 group-hover:translate-x-0 border border-gray-100 hover:border-gray-300" data-astro-cid-tjdfhdqb> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-tjdfhdqb> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-tjdfhdqb></path> </svg> </button> </div> <!-- Product Info --> <div class="p-5 flex-grow" data-astro-cid-tjdfhdqb> <a', ' class="block" data-astro-cid-tjdfhdqb> <h3 class="font-semibold text-lg text-gray-900 hover:text-gray-600 transition-colors duration-300 leading-tight" data-astro-cid-tjdfhdqb> ', ' </h3> </a> <div class="mt-3 flex items-center" data-astro-cid-tjdfhdqb> ', " </div>  ", ` </div> <!-- Toast Notification - Monochromatic --> <div class="toast-notification fixed top-6 right-6 bg-gray-900 text-white px-6 py-4 rounded-lg shadow-2xl transform translate-x-full opacity-0 transition-all duration-500 ease-out z-50 border border-gray-700" data-astro-cid-tjdfhdqb> <div class="flex items-center" data-astro-cid-tjdfhdqb> <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-tjdfhdqb> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-astro-cid-tjdfhdqb></path> </svg> <span class="toast-message font-medium" data-astro-cid-tjdfhdqb>Added to cart!</span> </div> </div> </div>  <script>
  function addToCart(product, buttonElement) {
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
        image:
          product.gallery && product.gallery[0]
            ? product.gallery[0]
            : "https://placehold.co/400x400",
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
      showToast(\\\`\\\${product.name} added to cart\\\`, "success");
      
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
  }

  function showToast(message, type = "success") {
    const toast = document.querySelector('.toast-notification');
    if (!toast) return;

    const toastMessage = toast.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    // Set toast style based on type - keeping monochromatic
    if (type === "error") {
      toast.classList.remove('bg-gray-900', 'border-gray-700');
      toast.classList.add('bg-gray-800', 'border-gray-600');
    } else {
      toast.classList.remove('bg-gray-800', 'border-gray-600');
      toast.classList.add('bg-gray-900', 'border-gray-700');
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
<\/script>`])), maybeRenderHead(), product.in_stock && product.stock_quantity > 0 && product.discount_price && parseFloat(product.discount_price) < parseFloat(product.price) && renderTemplate`<div class="absolute top-3 left-3 flex gap-1 z-10" data-astro-cid-tjdfhdqb> <span class="bg-black text-white text-xs font-medium px-3 py-1 tracking-wider" data-astro-cid-tjdfhdqb>SALE</span> </div>`, addAttribute(getFirstImage(product), "src"), addAttribute(product.name, "alt"), addAttribute(`/shop/${product.slug}`, "href"), addAttribute(product.id, "data-product-id"), addAttribute(`addToCart(${JSON.stringify(product)}, this)`, "onclick"), addAttribute(!product.in_stock || product.stock_quantity <= 0, "disabled"), product.in_stock && product.stock_quantity > 0 ? "ADD TO CART" : "OUT OF STOCK", addAttribute(`/shop/${product.slug}`, "href"), product.name, product.discount_price && parseFloat(product.discount_price) < parseFloat(product.price) ? renderTemplate`<div class="flex items-center gap-2" data-astro-cid-tjdfhdqb> <span class="font-bold text-lg text-gray-900" data-astro-cid-tjdfhdqb>${formatPrice(product.discount_price)}</span> <span class="line-through text-gray-500 text-sm" data-astro-cid-tjdfhdqb> ${formatPrice(product.price)} </span> </div>` : renderTemplate`<span class="font-bold text-lg text-gray-900" data-astro-cid-tjdfhdqb>${formatPrice(product.price)}</span>`, product.attributes && Object.keys(product.attributes).length > 0 && renderTemplate`<div class="mt-2 text-sm text-gray-600" data-astro-cid-tjdfhdqb> ${Object.entries(product.attributes).slice(0, 1).map(([key, value]) => renderTemplate`<span class="capitalize" data-astro-cid-tjdfhdqb> ${key}: ${value} </span>`)} </div>`);
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/components/ProductCard.astro", undefined);

const $$CardsSection = createComponent(async ($$result, $$props, $$slots) => {
  let products = [];
  try {
    const response = await fetch("https://admin.bablon.in/public/api/products");
    const allProducts = await response.json();
    products = allProducts.slice(0, 7);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row"> <!-- Title Section --> <!-- Products Grid --> <div class="grid grid-cols-1 md:grid-cols-4 gap-6"> <div class="md:w-1/4 mb-8 md:mb-0 pr-0 md:pr-8"> <h2 class="text-4xl font-bold mb-2"> <span class="block">Best</span> <span class="block">Modern</span> <span class="block">Furniture</span> </h2> <a href="/shop" class="inline-block mt-4 text-sm font-medium">
See All &gt;&gt;
</a> </div> ${products.map((product) => {
    if (!product) return null;
    return renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "product": product })}`;
  })} </div> </div>`;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/components/CardsSection.astro", undefined);

const $$BlogSection = createComponent(($$result, $$props, $$slots) => {
  const blogPosts = getAllBlogs();
  const featuredPosts = blogPosts.slice(0, 6);
  return renderTemplate`${maybeRenderHead()}<section class="py-24 px-4 bg-white text-black" data-astro-cid-fjwk6imu> <div class="max-w-7xl mx-auto" data-astro-cid-fjwk6imu> <!-- Header Section --> <div class="text-center mb-20" data-astro-cid-fjwk6imu> <div class="inline-block mb-6" data-astro-cid-fjwk6imu> <span class="text-xs font-mono tracking-widest text-gray-600 uppercase" data-astro-cid-fjwk6imu>Insights</span> </div> <h2 class="text-5xl md:text-7xl font-light text-black mb-6 tracking-tight" data-astro-cid-fjwk6imu>
BLOG
<span class="block text-2xl md:text-3xl font-light text-gray-600 mt-2 tracking-widest" data-astro-cid-fjwk6imu>PERSPECTIVES</span> </h2> <div class="w-24 h-px bg-gradient-to-r from-transparent via-black to-transparent mx-auto" data-astro-cid-fjwk6imu></div> </div> <!-- Blog Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-fjwk6imu> ${featuredPosts.map((post, index) => renderTemplate`<article class="group relative"${addAttribute(post.id, "key")} data-astro-cid-fjwk6imu> <!-- Card Container --> <div class="bg-gray-50 border border-gray-200 hover:border-gray-400 transition-all duration-500 overflow-hidden" data-astro-cid-fjwk6imu> <!-- Image Container --> <div class="relative overflow-hidden" data-astro-cid-fjwk6imu> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-astro-cid-fjwk6imu> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" data-astro-cid-fjwk6imu></div> <!-- Category Badge --> <div class="absolute top-6 left-6" data-astro-cid-fjwk6imu> <span class="bg-white/90 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-mono tracking-wider text-gray-800 uppercase" data-astro-cid-fjwk6imu> ${post.category} </span> </div> <!-- Date Badge --> <div class="absolute top-6 right-6" data-astro-cid-fjwk6imu> <span class="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-mono text-white" data-astro-cid-fjwk6imu> ${post.date} </span> </div> <!-- Hover Overlay --> <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" data-astro-cid-fjwk6imu></div> </div> <!-- Content --> <div class="p-8" data-astro-cid-fjwk6imu> <h3 class="text-xl font-light text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300 leading-tight" data-astro-cid-fjwk6imu> ${post.title} </h3> <p class="text-gray-600 text-sm leading-relaxed mb-6 font-light" data-astro-cid-fjwk6imu> ${post.description} </p> <!-- Author and Read More --> <div class="flex items-center justify-between pt-4 border-t border-gray-200" data-astro-cid-fjwk6imu> <div class="flex items-center space-x-3" data-astro-cid-fjwk6imu> <div class="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center" data-astro-cid-fjwk6imu> <span class="text-xs font-mono text-white" data-astro-cid-fjwk6imu>A</span> </div> <span class="text-xs font-mono text-gray-500 uppercase tracking-wider" data-astro-cid-fjwk6imu>Admin</span> </div> <a${addAttribute(`/blogs/${post.id}`, "href")} class="group/btn inline-flex items-center text-xs font-mono tracking-wider text-gray-800 hover:text-black transition-all duration-300 uppercase" data-astro-cid-fjwk6imu>
Read
<svg class="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fjwk6imu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-fjwk6imu></path> </svg> </a> </div> </div> </div> <!-- Corner Accent --> <div class="absolute -top-1 -right-1 w-4 h-4 bg-black opacity-0 group-hover:opacity-100 transition-all duration-500" data-astro-cid-fjwk6imu></div> </article>`)} </div> <!-- View All Button --> <div class="text-center mt-16" data-astro-cid-fjwk6imu> <a href="/blogs" class="group inline-flex items-center px-12 py-4 bg-black text-white font-mono tracking-wider text-sm uppercase hover:bg-gray-800 transition-all duration-300 border border-black hover:border-gray-800" data-astro-cid-fjwk6imu>
View All Articles
<svg class="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-fjwk6imu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-fjwk6imu></path> </svg> </a> </div> </div> </section> `;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/components/BlogSection.astro", undefined);

const $$VideoSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full h-screen overflow-hidden"> <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted playsinline> <source src="/vid/bg-vid.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> <div class="absolute inset-0 bg-black/40 bg-opacity-40"></div> <div class="relative z-10 flex items-center justify-center h-full"> <h1 class=" text-8xl font-bold tracking-wider text-black/60">WOOD</h1> </div> </section>`;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/components/VideoSection.astro", undefined);

const models = [
  { path: "/models/Chair.glb", name: "Chair", scale: 0.3, position: [0, 0, 0] },
  // { path: '/models/Couch.glb', name: 'Couch', scale: 1 },
  { path: "/models/Couch Large.glb", name: "Large Couch", scale: 1, position: [0, 1, 0] },
  { path: "/models/Lamp With Shade.glb", name: "Lamp", scale: 10, position: [0, 0, 0] },
  { path: "/models/Bookcase with Books.glb", name: "Bookcase", scale: 1.4, position: [0, 0, 0] }
];
const AnimatedModel = ({ index, currentModel, direction }) => {
  const model = models[index];
  const isActive = index === currentModel;
  const { scene } = useGLTF(model.path);
  const clonedScene = useMemo(() => scene.clone(), [scene]);
  useEffect(() => {
    return () => {
      clonedScene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
    };
  }, [clonedScene]);
  const { position, scale, opacity, rotation } = useSpring({
    position: isActive ? [model.position[0], model.position[1], model.position[2]] : [direction * 10, model.position[1], model.position[2]],
    scale: isActive ? model.scale : model.scale * 0.5,
    opacity: isActive ? 1 : 0,
    rotation: isActive ? [0, 0.4 + Math.sin(Date.now() * 1e-3) * 0.1, 0] : [0, 0, 0],
    config: { tension: 170, friction: 26 }
  });
  return /* @__PURE__ */ jsx(
    a.group,
    {
      position,
      scale,
      rotation,
      visible: isActive,
      children: /* @__PURE__ */ jsx(
        "primitive",
        {
          object: clonedScene,
          castShadow: true,
          receiveShadow: true
        }
      )
    }
  );
};
const ModelViewer = () => {
  const [currentModel, setCurrentModel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const modelLighting = {
    "Bookcase": {
      spotLight1: { position: [3, 5, 3], intensity: 1.5 },
      spotLight2: { position: [-3, 5, 3], intensity: 1.5 },
      ambientIntensity: 0.9
    },
    "Lamp": {
      spotLight1: { position: [2, 4, 2], intensity: 2 },
      spotLight2: { position: [-2, 4, 2], intensity: 2 },
      ambientIntensity: 0.8
    },
    "default": {
      spotLight1: { position: [5, 5, 5], intensity: 2.2 },
      spotLight2: { position: [-5, 5, 5], intensity: 4.8 },
      ambientIntensity: 0.5
    }
  };
  const currentLighting = modelLighting[models[currentModel].name] || modelLighting.default;
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isHovered) return;
      e.preventDefault();
      setIsScrolling(true);
      setSlideDirection(e.deltaY > 0 ? 1 : -1);
      setCurrentModel(
        (prev) => e.deltaY > 0 ? (prev + 1) % models.length : (prev - 1 + models.length) % models.length
      );
      setTimeout(() => {
        setIsScrolling(false);
      }, 2e3);
    };
    const rotationInterval = setInterval(() => {
      setRotation((prev) => prev + 2e-4);
    }, 16);
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearInterval(rotationInterval);
    };
  }, [isHovered]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsxs(Canvas, { shadows: true, camera: { position: [0, 0, 10], fov: 45 }, children: [
          /* @__PURE__ */ jsx("fog", { attach: "fog", args: ["#000", 8, 20] }),
          /* @__PURE__ */ jsx("ambientLight", { intensity: currentLighting.ambientIntensity }),
          /* @__PURE__ */ jsx(
            "directionalLight",
            {
              position: [5, 5, 5],
              intensity: 1.2,
              castShadow: true,
              "shadow-mapSize-width": 2048,
              "shadow-mapSize-height": 2048
            }
          ),
          /* @__PURE__ */ jsx(
            "spotLight",
            {
              position: currentLighting.spotLight1.position,
              intensity: currentLighting.spotLight1.intensity,
              castShadow: true,
              angle: 0.5,
              penumbra: 1
            }
          ),
          /* @__PURE__ */ jsx(
            "spotLight",
            {
              position: currentLighting.spotLight2.position,
              intensity: currentLighting.spotLight2.intensity,
              castShadow: true,
              angle: 0.5,
              penumbra: 1
            }
          ),
          /* @__PURE__ */ jsx("hemisphereLight", { intensity: 0.3 }),
          /* @__PURE__ */ jsx("group", { "rotation-y": rotation, position: [0, -2, 0], children: models.map((_, index) => /* @__PURE__ */ jsx(
            AnimatedModel,
            {
              index,
              currentModel,
              direction: slideDirection
            },
            index
          )) }),
          /* @__PURE__ */ jsx("mesh", { rotation: [-Math.PI / 2, 0, 0], position: [0, -2, 0], receiveShadow: true, children: /* @__PURE__ */ jsx(
            "meshStandardMaterial",
            {
              color: "#f1f5f9",
              metalness: 0.1,
              roughness: 0.8,
              transparent: true,
              opacity: 0.8
            }
          ) }),
          /* @__PURE__ */ jsx(
            OrbitControls,
            {
              enableZoom: false,
              enablePan: false,
              minPolarAngle: Math.PI / 4,
              maxPolarAngle: Math.PI / 2,
              autoRotate: true,
              autoRotateSpeed: 0.5
            }
          )
        ] }),
        isHovered && !isScrolling && /* @__PURE__ */ jsx("div", { className: "absolute animate-pulse-scale top-1 right-1 bg-black/30 backdrop-blur-sm text-white px-4 py-3 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Mouse, { size: 20, className: "opacity-90" }) }) }),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @keyframes pulse-scale {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
      ` })
      ]
    }
  );
};

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[calc(100vh-80px)] bg-gradient-to-br from-gray-50 to-white overflow-hidden" data-astro-cid-bbe6dxrz> <div class="absolute inset-0 bg-grid-pattern opacity-5" data-astro-cid-bbe6dxrz></div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full" data-astro-cid-bbe6dxrz> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full" data-astro-cid-bbe6dxrz> <div class="space-y-6 animate-fade-in z-10" data-astro-cid-bbe6dxrz> <span class="inline-block px-4 py-2 bg-black/5 rounded-full text-sm font-medium tracking-wider text-gray-600" data-astro-cid-bbe6dxrz>
NEW ARRIVALS
</span> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent" data-astro-cid-bbe6dxrz>
Chairs & Seating You'll Love
</h1> <p class="text-lg text-gray-600 leading-relaxed" data-astro-cid-bbe6dxrz>
Discover our curated collection of designer chairs that blend comfort with style.
<span class="font-semibold text-black" data-astro-cid-bbe6dxrz>Free Shipping</span> on all orders.
</p> <div class="flex gap-4" data-astro-cid-bbe6dxrz> <button onclick="window.location.href='/products'" class="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg" data-astro-cid-bbe6dxrz>
SHOP NOW
</button> <button class="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-all duration-300" data-astro-cid-bbe6dxrz>
LEARN MORE
</button> </div> <div class="flex items-center gap-6 pt-2" data-astro-cid-bbe6dxrz> <div class="flex -space-x-2" data-astro-cid-bbe6dxrz> ${[1, 2, 3].map((i) => renderTemplate`<div class="w-8 h-8 rounded-full border-2 border-white bg-gray-200" data-astro-cid-bbe6dxrz></div>`)} </div> <p class="text-sm text-gray-600" data-astro-cid-bbe6dxrz> <span class="font-semibold" data-astro-cid-bbe6dxrz>2.5k+</span> happy customers
</p> </div> </div> <div class="relative h-[500px] animate-float" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "ChairDisplay", ModelViewer, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/components/ChairDisplay", "client:component-export": "default", "data-astro-cid-bbe6dxrz": true })} </div> </div> </div> </section> `;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/components/Hero.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home | Bablon", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "CategorySection", $$CategorySection, { "data-astro-cid-j7pv25f6": true })}  ${renderComponent($$result2, "CardsSection", $$CardsSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "BlogSection", $$BlogSection, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "VideoSection", $$VideoSection, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/index.astro", undefined);

const $$file = "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
