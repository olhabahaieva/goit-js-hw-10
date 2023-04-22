import './css/styles.css';
import Notiflix from 'notiflix';
import _ from 'lodash';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;
// Default JS ends

//Input selector
const inputElement = document.querySelector('input#search-box');
const list = document.querySelector('.country-list');

//Event listener for the input
inputElement.addEventListener('input', onInput);

function onInput(evt) {
  evt.preventDefault();
  const name = evt.currentTarget.value;

  fetchCountries(name)
    .then(data => (list.innerHTML = createMarkup(data)))
    .catch(err => Notiflix.Notify.failure("Oops, there is no country with that name"));
  
}

function createMarkup(data) {
  if (data.length > 10) {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
    return data.map(
      ({ flags, name })=>
      `<li class="country-short">
      <img class="flag" src="${flags.svg}" alt="${name.official}"/>
      <p>${name.official}<p>
      </li>`
    
    ).join("");
  } else {
    return data.map(
      ({ capital, flags, languages, name, population })=>
      `<li class="country-full">
      <div class="country-full-first-line">
      <img class="flag" src="${flags.svg}" alt="${name.official}"/>
      <h1>${name.official}</h1>
      </div>
      <p><span class="text-bold">Capital:</span> ${capital}</p>
      <p><span class="text-bold">Population:</span> ${population}</p>
      <p><span class="text-bold">Languages:</span> ${languages}</p>
      </li>`
      ).join("");
    }
  
  
}
