var h=document.querySelector(".main-nav__toggle"),p=document.querySelector(".main-nav"),y=document.querySelector(".page__body"),q=document.querySelector(".main-nav__link");h.onclick=function(e){e.preventDefault(),p.classList.toggle("main-nav--closed"),y.classList.toggle("page__body--noscroll")};q.onclick=function(){p.classList.toggle("main-nav--closed"),y.classList.remove("noscroll")};(function(){let e=document.querySelector(".slider"),n=e.querySelector(".slider__scale"),t=n.querySelector(".slider__grip"),i=e.querySelector(".slider__image--before"),a=e.querySelector(".slider__image--after"),r,l,d=function(s){return parseInt(getComputedStyle(s).width,10)},u=function(s){return s.getBoundingClientRect().left+pageXOffset},v=function(s){let g=u(t),w=u(n);t.classList.add("is_active");let L=s.pageX-g;return document.onmousemove=function(S){let o=S.pageX-L-w;o<0&&(o=0);let c=r-l;o>c&&(o=c);let f=o/c*100;t.style.marginLeft=`${o}px`,i.style.width=`${f}%`,a.style.width=`${100-f}%`},document.onmouseup=function(){document.onmousemove=document.onmouseup=null,t.classList.remove("is_active")},!1},_=function(){t.addEventListener("mousedown",v)},m=function(){_(),r=d(n),l=d(t),i.style.width="",a.style.width="",t.style.marginLeft=""};window.addEventListener("load",m),window.addEventListener("resize",m)})();document.addEventListener("DOMContentLoaded",()=>{let e=window.ymaps;e.ready(()=>{let n=new e.Map("map",{center:[59.938679,30.3230044],zoom:14,controls:[]}),t=new e.Placemark(n.getCenter(),{},{iconLayout:"default#image",iconImageHref:"images/map-pin.png",iconImageSize:[57,53],iconImageOffset:[-26,-42]});n.geoObjects.add(t)})});