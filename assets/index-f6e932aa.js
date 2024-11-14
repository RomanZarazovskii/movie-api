(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="7169515676d86e93caebb475c57a98e8",f="https://api.themoviedb.org/3";class g{constructor(){this.page=1}fetchMovies(){const o=`${f}/movie/popular?api_key=${d}&language=en-US&page=${this.page}`;return fetch(o).then(t=>{if(!t.ok)throw new Error("Failed to fetch movies!");return t.json()}).then(t=>t.results)}incrementPage(){this.page+=1}decrementPage(){this.page>1&&(this.page-=1)}}const l=document.querySelector(".movies__list"),u=document.querySelector(".prev__btn"),h=document.querySelector(".next__btn");u.addEventListener("click",y);h.addEventListener("click",v);const i=new g;s();function s(){i.fetchMovies().then(n=>{m(n.slice(0,8))}).catch(n=>console.error(n))}function m(n){const o=n.map(t=>`
    <li class="movie-item">
          <img src="https://image.tmdb.org/t/p/w500${t.poster_path}" alt="${t.title}" >
          <h2>${t.title}</h2>
          <p>Original language: ${t.original_language}</p>
          <p>Release date: ${t.release_date}</p>
          <p>Origin country: ${t.origin_country}</p>
          <p>Rating: ${t.vote_average}</p>
        </li>
    `).join("");l.insertAdjacentHTML("beforeend",o)}function y(){i.decrementPage(),_(),s(),p()}function v(){i.incrementPage(),s(),p()}function _(){l.innerHTML=""}function p(){u.disabled=i.page<=1}
