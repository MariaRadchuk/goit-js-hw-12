import{a as y,S as b,i as d}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const v=document.querySelector(".form"),u=document.querySelector(".input-name"),n=document.querySelector(".loader"),L=document.querySelector(".gallery"),l=document.querySelector(".load-btn");let w=0,m=1;const p=y.create({baseURL:"https://pixabay.com/api/",params:{key:"42310325-d8e2b88bd4f4d7db9639050a5",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}}),S=new b(".image-link",{captionsData:"alt",captionDelay:250});async function q(e){e.preventDefault();const o=u.value.trim();if(!o){c("Please enter a search query");return}try{n.classList.add("visible");const i=(await p.get("",{params:{q:o}})).data;w=i.totalHits,f(i.hits)}catch(s){console.error("Error fetching data:",s),c("Error fetching data. Please try again later.")}finally{n.classList.remove("visible")}}function f(e){if(e.length===0){c("Sorry, there are no images matching your search query. Please try again!"),g();return}L.innerHTML=e.map(P).join(""),S.refresh(),C()}function P(e){const{webformatURL:o,largeImageURL:s,tags:i,likes:t,views:r,comments:a,downloads:h}=e;return`
    <li class="photo">
      <div class="photo-card">
        <a class="image-link" data-lightbox="image" href="${s}">
          <img class="gallery-image" data-source="${s}" src="${o}" alt="${i}">
        </a>
      </div>
      <div class="description">
        <p class="description-item"> Likes ${t}</p>
        <p class="description-item"> Views ${r}</p>
        <p class="description-item"> Comments ${a}</p>
        <p class="description-item"> Downloads ${h}</p>
      </div>
    </li>`}async function E(){try{n.classList.add("visible");const e=await p.get("",{params:{q:u.value.trim(),page:++m}});f(e.data.hits),$(),k(e.data.totalHits)}catch(e){console.error("Error fetching data:",e)}finally{n.classList.remove("visible")}}function c(e){d.error({title:"Error",message:e,backgroundColor:"red",messageColor:"white",messageSize:"25"})}function $(){const e=document.querySelector(".photo").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function C(){l.style.visibility="visible"}function g(){l.style.visibility="hidden"}function k(e){e<=m*15&&(g(),d.info({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#125487",messageColor:"white",messageSize:"25"}))}v.addEventListener("submit",q);l.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
