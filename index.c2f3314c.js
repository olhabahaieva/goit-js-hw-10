const t=document.querySelector("input");document.querySelector(".countries-list");t.addEventListener("input",(function(t){t.preventDefault();!function(t){fetch(`https://restcountries.com/v3.1/name/${t}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()}))}(t.currentTarget.value)}));
//# sourceMappingURL=index.c2f3314c.js.map
