!function(){function n(n){var t="".concat("https://restcountries.com/v3.1","/name/").concat(n,"?").concat("fields=name,capital,official,population,flags,languages");return fetch(t).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))}var t=document.querySelector("input"),e=document.querySelector(".countries-list");t.addEventListener("input",(function(t){t.preventDefault(),n(t.currentTarget.value).then((function(n){return e.innerHTML=void n.name})).catch((function(n){return console.log(n)}))}))}();
//# sourceMappingURL=index.74deea0a.js.map