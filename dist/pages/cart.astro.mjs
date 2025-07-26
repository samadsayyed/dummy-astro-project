import { c as createComponent, r as renderTemplate, a as renderComponent, e as renderScript, m as maybeRenderHead } from '../chunks/astro/server_BDYBIJ9N.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bqao17MK.mjs';
export { renderers } from '../renderers.mjs';

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Shopping Cart - Bablon", "data-astro-cid-h3zw4u6d": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 py-12" data-astro-cid-h3zw4u6d> <h1 class="text-3xl font-bold mb-8" data-astro-cid-h3zw4u6d>Your Shopping Cart</h1> <div class="flex flex-col lg:flex-row gap-8" data-astro-cid-h3zw4u6d> <!-- Cart Items Section --> <div class="lg:w-2/3" data-astro-cid-h3zw4u6d> <div class="bg-white p-6 rounded-lg shadow-md" data-astro-cid-h3zw4u6d> <div id="cart-items" class="divide-y divide-gray-200" data-astro-cid-h3zw4u6d> <!-- Cart items will be populated with JavaScript --> <p class="text-gray-500 py-4 text-center" id="empty-cart-message" data-astro-cid-h3zw4u6d>Your cart is empty</p> </div> </div> </div> <!-- Order Summary Section --> <div class="lg:w-1/3" data-astro-cid-h3zw4u6d> <div class="bg-white p-6 rounded-lg shadow-md sticky top-6" data-astro-cid-h3zw4u6d> <h2 class="text-xl font-semibold mb-4" data-astro-cid-h3zw4u6d>Order Summary</h2> <div class="space-y-2 mb-4" data-astro-cid-h3zw4u6d> <div class="flex justify-between" data-astro-cid-h3zw4u6d> <span class="text-gray-600" data-astro-cid-h3zw4u6d>Subtotal</span> <span id="subtotal" class="font-medium" data-astro-cid-h3zw4u6d>₹0.00</span> </div> <div class="flex justify-between" data-astro-cid-h3zw4u6d> <span class="text-gray-600" data-astro-cid-h3zw4u6d>Shipping</span> <span id="shipping" class="font-medium" data-astro-cid-h3zw4u6d>₹0.00</span> </div> <div class="flex justify-between pt-4 border-t border-gray-200" data-astro-cid-h3zw4u6d> <span class="text-lg font-bold" data-astro-cid-h3zw4u6d>Total</span> <span id="total" class="text-lg font-bold" data-astro-cid-h3zw4u6d>₹0.00</span> </div> </div> <a href="/checkout" id="checkout-btn" class="w-full block text-center mt-6 bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed" data-astro-cid-h3zw4u6d>
Proceed to Checkout
</a> <a href="/shop" class="w-full block text-center mt-4 text-indigo-600 hover:text-indigo-800" data-astro-cid-h3zw4u6d>
Continue Shopping
</a> </div> </div> </div> </main> ` })} ${renderScript($$result, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/cart.astro?astro&type=script&index=0&lang.ts")} `;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/cart.astro", undefined);

const $$file = "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cart,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
