import{i as q,g as w,f as u,u as g,r as $}from"./cartUtils.B_zhevUp.js";document.addEventListener("DOMContentLoaded",()=>{const f=document.getElementById("mobile-menu-button"),a=document.getElementById("mobile-menu"),o=document.getElementById("mobile-overlay"),L=document.getElementById("close-mobile-menu"),p=document.querySelectorAll(".mobile-nav-link"),E=document.getElementById("cart-button"),n=document.getElementById("cart-sidebar"),i=document.getElementById("cart-overlay"),x=document.getElementById("close-cart");document.getElementById("cart-items-container"),document.getElementById("empty-cart-message"),document.getElementById("cart-subtotal"),document.getElementById("checkout-button");const h=t=>{t.preventDefault(),t.stopPropagation(),a.classList.contains("-translate-x-full")?(a.classList.remove("-translate-x-full"),a.classList.add("translate-x-0"),o.classList.remove("hidden"),n.classList.add("translate-x-full"),n.classList.remove("translate-x-0"),i.classList.add("hidden")):l()},B=t=>{t.preventDefault(),t.stopPropagation(),n.classList.contains("translate-x-full")?(n.classList.remove("translate-x-full"),n.classList.add("translate-x-0"),i.classList.remove("hidden"),a.classList.add("-translate-x-full"),a.classList.remove("translate-x-0"),o.classList.add("hidden")):r()},l=()=>{a.classList.add("-translate-x-full"),a.classList.remove("translate-x-0"),o.classList.add("hidden")},r=()=>{n.classList.add("translate-x-full"),n.classList.remove("translate-x-0"),i.classList.add("hidden")};l(),r(),q(),v(),f.addEventListener("click",h),L.addEventListener("click",l),o.addEventListener("click",l),E.addEventListener("click",B),x.addEventListener("click",r),i.addEventListener("click",r),p.forEach(t=>{t.addEventListener("click",()=>{l(),r()})}),window.addEventListener("cart-updated",()=>{v()});function v(){const t=w(),m=document.getElementById("cart-items-container"),y=document.getElementById("empty-cart-message"),I=document.getElementById("cart-subtotal"),d=document.getElementById("checkout-button");if(!t||typeof t!="object"){console.error("Invalid cart object:",t);return}document.querySelectorAll(".cart-count").forEach(s=>{s&&(s.textContent=t.totalItems||"",s.classList.toggle("hidden",t.totalItems===0))}),Array.from(m.children).forEach(s=>{s!==y&&s.classList.contains("cart-item")&&m.removeChild(s)});const b=t.items&&Array.isArray(t.items)&&t.items.length>0;if(y.style.display=b?"none":"flex",b){let s=document.getElementById("cart-items-wrapper");s?s.innerHTML="":(s=document.createElement("div"),s.id="cart-items-wrapper",s.className="cart-items-wrapper",m.appendChild(s)),t.items.forEach(e=>{const c=document.createElement("div");c.className="cart-item flex items-center py-4 border-b border-gray-200",c.innerHTML=`
            <div class="w-20 h-20 flex-shrink-0 mr-4">
              <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover">
            </div>
            <div class="flex-1">
              <h3 class="text-sm font-medium">${e.name}</h3>
              <div class="flex items-center mt-1">
                <button class="quantity-btn decrease text-gray-500 w-6 h-6 flex items-center justify-center" data-id="${e.id}">
                  -
                </button>
                <span class="quantity mx-2">${e.quantity}</span>
                <button class="quantity-btn increase text-gray-500 w-6 h-6 flex items-center justify-center" data-id="${e.id}">
                  +
                </button>
              </div>
              <div class="mt-1 text-sm">${u(e.price)} × ${e.quantity}</div>
            </div>
            <div class="ml-4">
              <span class="font-medium">${u(e.price*e.quantity)}</span>
              <button class="remove-item ml-4 text-gray-400 hover:text-red-500" data-id="${e.id}">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          `,s.appendChild(c);const k=c.querySelector(".decrease"),C=c.querySelector(".increase"),M=c.querySelector(".remove-item");k.addEventListener("click",()=>{g(e.id,e.quantity-1)}),C.addEventListener("click",()=>{g(e.id,e.quantity+1)}),M.addEventListener("click",()=>{$(e.id)})})}I.textContent=u(t.subtotal),t.items.length===0?(d.classList.add("disabled:bg-gray-200","disabled:text-gray-500","pointer-events-none"),d.setAttribute("aria-disabled","true")):(d.classList.remove("disabled:bg-gray-200","disabled:text-gray-500","pointer-events-none"),d.removeAttribute("aria-disabled"))}});
