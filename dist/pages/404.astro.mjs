import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BDYBIJ9N.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bqao17MK.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col items-center justify-center p-4 text-center"> <div class="relative"> <h1 class="text-[150px] md:text-[200px] font-bold text-gray-800 select-none">
404
</h1> <div class="absolute inset-0 overflow-hidden opacity-20 pointer-events-none"> <img src="/bg-image.webp" alt="background" class="w-full h-full object-cover"> </div> </div> <p class="text-xl md:text-2xl text-gray-600 mt-4 mb-8">
The page you're looking for doesn't exist or probably moved somewhere...
</p> <a href="/" class="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300 text-lg">
BACK TO HOMEPAGE
</a> </main> ` })}`;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/404.astro", undefined);

const $$file = "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
