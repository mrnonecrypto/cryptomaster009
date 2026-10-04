function route(){var id=(location.hash||"#home").slice(1);var el=document.getElementById(id)||document.getElementById("home");
document.querySelectorAll(".page").forEach(function(p){p.classList.toggle("on",p===el)});window.scrollTo(0,0)}
addEventListener("hashchange",route);route();
(function(){var s=[].slice.call(document.querySelectorAll(".shot-grid img"));if(!s.length)return;
var lb=document.createElement("div");lb.className="lightbox";
lb.innerHTML='<button class="lightbox-close" aria-label="Chiudi">✕</button><button class="lightbox-prev" aria-label="Precedente">‹</button><img alt=""><button class="lightbox-next" aria-label="Successiva">›</button><div class="lightbox-count"></div>';
document.body.appendChild(lb);var im=lb.querySelector("img"),ct=lb.querySelector(".lightbox-count"),c=0;
function open(i){c=(i+s.length)%s.length;im.src=s[c].src;ct.textContent=(c+1)+" / "+s.length;lb.classList.add("open")}
function close(){lb.classList.remove("open")}
s.forEach(function(x,i){x.addEventListener("click",function(){open(i)})});
lb.querySelector(".lightbox-close").onclick=close;lb.querySelector(".lightbox-prev").onclick=function(){open(c-1)};
lb.querySelector(".lightbox-next").onclick=function(){open(c+1)};lb.onclick=function(e){if(e.target===lb)close()};
document.addEventListener("keydown",function(e){if(e.key==="Escape")close()})})();
