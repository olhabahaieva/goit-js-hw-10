function e(e){return fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,official,population,flags,languages`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}const t=document.querySelector("input"),n=document.querySelector(".countries-list");t.addEventListener("input",(function(t){t.preventDefault();e(t.currentTarget.value).then((e=>n.innerHTML=void e.name)).catch((e=>console.log(e)))}));
//# sourceMappingURL=index.e927dca3.js.map
