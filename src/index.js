import './css/styles.css';
// import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
// Default JS ends

//Input selector
const inputElement = document.querySelector('input');
const list = document.querySelector('.countries-list');

//Url
const BASE_URL = `https://restcountries.com/v3.1`;

//Event listener for the input
inputElement.addEventListener('input', onInput);

function onInput(evt) {
  evt.preventDefault();
  const name = evt.currentTarget.value;
  // const END_POINT = `/name/${name}`;

  fetchCountries(name)
    // .then(data => (list.innerHTML = createMarkup(data.name)))
    // .catch(err => console.log(err));
}

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

  // function createMarkup(country){
  //   return
  //   `<li>$(country)</li>`;
  // }
