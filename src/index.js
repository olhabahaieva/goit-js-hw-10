import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;
// Default JS ends

//Input selector
const inputElement = document.querySelector('input#search-box');
const list = document.querySelector('.country-list');

//Event listener for the input
inputElement.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(evt) {
  evt.preventDefault();
  const name = evt.target.value.trim();

  if (name === '') {
    list.innerHTML = '';
    return;
  }

  fetchCountries(name)
  .then(data => {
    const languages = Object.values(data[0].languages);
    const languageNames = languages.map(language => language.name);
    list.innerHTML = createMarkup(data, languageNames);
  })
  .catch(err => Notiflix.Notify.failure('Oops, there is no country with that name'));
}

function createMarkup(data, languageNames) {
  if (data.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return '';
  } else if (data.length > 2 && data.length < 10) {
    return data
      .map(
        ({ flags, name }) =>
          `<li class="country-short">
    <img class="flag" src="${flags.svg}" alt="${name.official}"/>
    <p>${name.official}<p>
    </li>`
      )
      .join('');
  } else if (data.length === 1) {
    return data
      .map(
        ({ capital, flags, languageNames, name, population }) =>
          `<li class="country-full">
      <div class="country-full-first-line">
      <img class="flag" src="${flags.svg}" alt="${name.official}"/>
      <h1>${name.official}</h1>
      </div>
      <p><span class="text-bold">Capital:</span> ${capital}</p>
      <p><span class="text-bold">Population:</span> ${population}</p>
      <p><span class="text-bold">Languages:</span> ${languageNames}</p>
      </li>`
      )
      .join('');
  }
}
