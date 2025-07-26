import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BDYBIJ9N.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Bqao17MK.mjs';
import { b as getAllBlogs } from '../chunks/blogUtils_xY0vTRMC.mjs';
export { renderers } from '../renderers.mjs';

const $$Blogs = createComponent(($$result, $$props, $$slots) => {
  const blogs = getAllBlogs();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Bablon" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-center text-4xl font-bold mb-8">Blog Masonry</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${blogs.map((blog, index) => renderTemplate`<div class="group relative"> <img${addAttribute(blog.image, "src")}${addAttribute(blog.title, "alt")} class="w-full rounded-lg"> <div class="mt-4"> <span class="text-sm text-gray-500">${blog.date}</span> <h3 class="text-lg font-medium text-gray-900 group-hover:text-gray-700"> <a${addAttribute(`/blogs/${index + 1}`, "href")}>${blog.title}</a> </h3> <p class="text-sm text-gray-500">${blog.description}</p> <a${addAttribute(`/blogs/${index + 1}`, "href")} class="text-blue-500 hover:text-blue-700">Read More</a> </div> </div>`)} </div> <div class="text-center mt-8"> <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Load More</button> </div> </div> ` })}`;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/blogs.astro", undefined);

const $$file = "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/blogs.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blogs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
