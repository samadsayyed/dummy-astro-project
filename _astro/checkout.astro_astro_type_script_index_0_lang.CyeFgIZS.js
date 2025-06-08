import{g as y}from"./cartUtils.B_zhevUp.js";document.addEventListener("DOMContentLoaded",()=>{const o=y(),d=document.getElementById("cart-items"),l=document.getElementById("empty-cart-message"),c=document.getElementById("subtotal"),i=document.getElementById("shipping"),m=document.getElementById("tax"),r=document.getElementById("total"),u=document.getElementById("place-order-btn");if(o.items&&o.items.length>0){l.style.display="none";const t=o.subtotal||o.items.reduce((e,n)=>e+n.price*n.quantity,0),s=t>1e3?0:100,a=t*.18,p=t+s+a;c.textContent=`₹${t.toFixed(2)}`,i.textContent=s===0?"Free":`₹${s.toFixed(2)}`,m.textContent=`₹${a.toFixed(2)}`,r.textContent=`₹${p.toFixed(2)}`,o.items.forEach(e=>{const n=document.createElement("div");n.className="flex py-4",n.innerHTML=`
          <div class="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img src="${e.image}" alt="${e.name}" class="h-full w-full object-cover object-center">
          </div>
          <div class="ml-4 flex flex-1 flex-col">
            <div>
              <div class="flex justify-between text-base font-medium text-gray-900">
                <h3>${e.name}</h3>
                <p class="ml-4">₹${(e.price*e.quantity).toFixed(2)}</p>
              </div>
            </div>
            <div class="flex flex-1 items-end justify-between text-sm">
              <p class="text-gray-500">Qty ${e.quantity}</p>
            </div>
          </div>
        `,d.appendChild(n)})}else u.disabled=!0;document.getElementById("checkout-form").addEventListener("submit",t=>{t.preventDefault(),alert("This would redirect to Razorpay payment gateway in a real implementation.")})});
