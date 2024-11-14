(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const l="f0af79de8bc2470aab71e6d49db83930",d="https://newsapi.org/v2",f={headers:{Authorization:l}};class h{constructor(){this.searchQuery="",this.page=1}fetchArticles(){const t=`${d}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(t,f).then(r=>r.json()).then(({articles:r})=>(this.incrementPage(),r))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.query}set query(t){this.searchQuery=t}}const p=document.querySelector(".form"),u=document.querySelector(".articles__list"),g=document.querySelector(".load-more__button"),s=new h;p.addEventListener("submit",m);g.addEventListener("click",y);function m(o){o.preventDefault(),s.query=o.currentTarget.elements.query.value,s.resetPage(),s.fetchArticles().then(t=>{b(),a(t)})}function y(){s.fetchArticles().then(a)}function a(o){const t=o.map(r=>`<li class="item">
<a href="${r.url}" target="_blank" rel="noopener noreferrer">
<article>
<img src="${r.urlToImage}" alt="" width="480">
<h2>${r.title}</h2>
<p>Posted by: ${r.author}</p>
<p>${r.description}</p>
</article>
</a>
</li>`).join("");u.insertAdjacentHTML("beforeend",t)}function b(){u.innerHTML=""}
