// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков

//Url
const BASE_URL = `https://restcountries.com/v3.1`;

//Params
const params = 'fields=name,capital,population,flags,languages';

function fetchCountries(name) {
    const URL = `${BASE_URL}/name/${name}?${params}`;
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