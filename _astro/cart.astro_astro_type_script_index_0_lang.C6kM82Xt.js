import{g as v,u as p,r as x}from"./cartUtils.B_zhevUp.js";document.addEventListener("DOMContentLoaded",()=>{function d(){const n=v(),c=document.getElementById("cart-items"),l=document.getElementById("empty-cart-message"),m=document.getElementById("subtotal"),y=document.getElementById("shipping"),b=document.getElementById("total"),s=document.getElementById("checkout-btn");if(c.innerHTML="",c.appendChild(l),n.items&&n.items.length>0){l.style.display="none";const r=n.subtotal||n.items.reduce((t,e)=>t+e.price*e.quantity,0),u=r>1e3?0:100,f=r+u;m.textContent=`₹${r.toFixed(2)}`,y.textContent=u===0?"Free":`₹${u.toFixed(2)}`,b.textContent=`₹${f.toFixed(2)}`,s.classList.remove("disabled:bg-gray-400","disabled:cursor-not-allowed"),s.disabled=!1,n.items.forEach(t=>{const e=document.createElement("div");e.className="flex py-6",e.innerHTML=`
            <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img src="${t.image}" alt="${t.name}" class="h-full w-full object-cover object-center">
            </div>
            <div class="ml-4 flex flex-1 flex-col">
              <div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                  <h3>${t.name}</h3>
                  <p class="ml-4">₹${(t.price*t.quantity).toFixed(2)}</p>
                </div>
              </div>
              <div class="flex flex-1 items-end justify-between text-sm">
                <div class="flex items-center border rounded-md">
                  <button class="quantity-btn px-3 py-1" data-action="decrease" data-id="${t.id}">-</button>
                  <span class="px-3 py-1 border-x">${t.quantity}</span>
                  <button class="quantity-btn px-3 py-1" data-action="increase" data-id="${t.id}">+</button>
                </div>
                <button class="remove-item-btn text-red-600 hover:text-red-800" data-id="${t.id}">
                  Remove
                </button>
              </div>
            </div>
          `,c.appendChild(e)}),document.querySelectorAll(".quantity-btn").forEach(t=>{t.addEventListener("click",e=>{const a=e.target.dataset.action,o=e.target.dataset.id,i=n.items.find(g=>g.id===o);a==="increase"?p(o,i.quantity+1):a==="decrease"&&i.quantity>1?p(o,i.quantity-1):a==="decrease"&&i.quantity===1&&x(o),d()})}),document.querySelectorAll(".remove-item-btn").forEach(t=>{t.addEventListener("click",e=>{const a=e.target.dataset.id;x(a),d()})})}else l.style.display="block",m.textContent="₹0.00",y.textContent="₹0.00",b.textContent="₹0.00",s.classList.add("disabled:bg-gray-400","disabled:cursor-not-allowed"),s.disabled=!0}d(),window.addEventListener("cart-updated",()=>{d()})});
