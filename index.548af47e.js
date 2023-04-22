!function(){var t=document.querySelector("input"),e=(document.querySelector(".countries-list"),"https://restcountries.com/v3.1");t.addEventListener("input",(function(t){t.preventDefault(),function(t){var n="".concat(e,"/name/").concat(t);fetch(n).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))}(t.currentTarget.value)}))}();
//# sourceMappingURL=index.548af47e.js.map
