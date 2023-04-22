function t(t){return fetch(`https://restcountries.com/v3.1/name/${t}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))}const e=document.querySelector("input");document.querySelector(".countries-list");e.addEventListener("input",(function(e){e.preventDefault();t(e.currentTarget.value)}));
//# sourceMappingURL=index.2313cccd.js.map
