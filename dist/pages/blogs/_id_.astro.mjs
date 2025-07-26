import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_BDYBIJ9N.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Bqao17MK.mjs';
import { g as getRelatedBlogs, a as getBlogById } from '../../chunks/blogUtils_xY0vTRMC.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://bablon.in/");
function getStaticPaths() {
  return [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "3" } },
    { params: { id: "4" } },
    { params: { id: "5" } }
  ];
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const post = getBlogById(id);
  const relatedPosts = getRelatedBlogs(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post ? `${post.title} - Bablon Blog` : "Blog Post Not Found", "data-astro-cid-nyfy4iem": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-12" data-astro-cid-nyfy4iem> ${post ? renderTemplate`<article class="bg-white rounded-lg shadow-md overflow-hidden" data-astro-cid-nyfy4iem> <!-- Hero Image --> <div class="relative" data-astro-cid-nyfy4iem> <img${addAttribute(post.image, "src")}${addAttribute(post.title, "alt")} class="w-full h-[400px] object-cover" data-astro-cid-nyfy4iem> <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6" data-astro-cid-nyfy4iem> <div class="text-white" data-astro-cid-nyfy4iem> <div class="mb-2 text-sm font-medium" data-astro-cid-nyfy4iem>${post.category}</div> <h1 class="text-3xl md:text-4xl font-bold mb-2" data-astro-cid-nyfy4iem>${post.title}</h1> <div class="flex items-center mt-4" data-astro-cid-nyfy4iem> <img${addAttribute(post.authorImage, "src")}${addAttribute(post.author, "alt")} class="w-10 h-10 rounded-full border-2 border-white mr-3" data-astro-cid-nyfy4iem> <div data-astro-cid-nyfy4iem> <div class="text-sm font-medium" data-astro-cid-nyfy4iem>${post.author}</div> <div class="text-xs opacity-80" data-astro-cid-nyfy4iem>${post.date}</div> </div> </div> </div> </div> </div> <!-- Content --> <div class="p-6 md:p-8" data-astro-cid-nyfy4iem> <div class="prose prose-lg max-w-none" data-astro-cid-nyfy4iem>${unescapeHTML(post.content)}</div> <!-- Tags --> <div class="mt-8 pt-6 border-t border-gray-200" data-astro-cid-nyfy4iem> <div class="flex flex-wrap gap-2" data-astro-cid-nyfy4iem> ${post.category.split(", ").map((tag) => renderTemplate`<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full" data-astro-cid-nyfy4iem>${tag}</span>`)} </div> </div> <!-- Author Bio --> <div class="mt-8 pt-6 border-t border-gray-200" data-astro-cid-nyfy4iem> <div class="flex items-center" data-astro-cid-nyfy4iem> <img${addAttribute(post.authorImage, "src")}${addAttribute(post.author, "alt")} class="w-16 h-16 rounded-full mr-4" data-astro-cid-nyfy4iem> <div data-astro-cid-nyfy4iem> <h3 class="font-bold text-lg" data-astro-cid-nyfy4iem>${post.author}</h3> <p class="text-gray-600" data-astro-cid-nyfy4iem>Content Writer & Interior Design Specialist</p> </div> </div> </div> <!-- Related Posts --> ${relatedPosts.length > 0 && renderTemplate`<div class="mt-12 pt-6 border-t border-gray-200" data-astro-cid-nyfy4iem> <h2 class="text-2xl font-bold mb-6" data-astro-cid-nyfy4iem>Related Articles</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-nyfy4iem> ${relatedPosts.map((related) => renderTemplate`<a${addAttribute(`/blogs/${related.id}`, "href")} class="group" data-astro-cid-nyfy4iem> <div class="bg-gray-50 rounded-lg overflow-hidden" data-astro-cid-nyfy4iem> <img${addAttribute(related.image, "src")}${addAttribute(related.title, "alt")} class="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" data-astro-cid-nyfy4iem> <div class="p-4" data-astro-cid-nyfy4iem> <div class="text-xs text-gray-500 mb-1" data-astro-cid-nyfy4iem>${related.date}</div> <h3 class="font-semibold group-hover:text-gray-600 transition-colors" data-astro-cid-nyfy4iem>${related.title}</h3> </div> </div> </a>`)} </div> </div>`} </div> </article>` : renderTemplate`<div class="text-center py-16" data-astro-cid-nyfy4iem> <h1 class="text-3xl font-bold mb-4" data-astro-cid-nyfy4iem>Blog Post Not Found</h1> <p class="text-gray-600 mb-8" data-astro-cid-nyfy4iem>The blog post you're looking for doesn't exist or has been removed.</p> <a href="/blogs" class="inline-block bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors" data-astro-cid-nyfy4iem>Back to Blogs</a> </div>`} </main> ` })} `;
}, "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/blogs/[id].astro", undefined);

const $$file = "D:/Samad/Coding_Playground/Projects/Web/Professional/Bablon/Frontend/src/pages/blogs/[id].astro";
const $$url = "/blogs/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
