//Url
const BASE_URL = `https://restcountries.com/v3.1`;

function fetchCountries(name) {
    const URL = `${BASE_URL}/name/${name}`;
    return fetch(URL)
    .then(resp => {
        if (!resp.ok) {
          // resp.ok === false
          throw new Error(resp.statusText);
        }
        return resp.json();
      });
    }

export{fetchCountries};