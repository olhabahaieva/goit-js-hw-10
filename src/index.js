import './css/styles.css';
import Notiflix from 'notiflix';
import _ from 'lodash';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const onInputDebounced = _.debounce(onInput, DEBOUNCE_DELAY);
// Default JS ends

//Input selector
const inputElement = document.querySelector('input#search-box');
const list = document.querySelector('.country-list');

//Event listener for the input
inputElement.addEventListener('input', onInputDebounced);

function onInput(evt) {
  evt.preventDefault();
  const name = evt.target.value.trim();
  debounce_fun();

  if (name === '') {
    list.innerHTML = '';
    return;
  }

  fetchCountries(name)
  .then(data => {
    const languages = Object.values(data[0].languages);
    const languageNames = languages.map(language => language.key);
    console.log(languageNames);
    list.innerHTML = createMarkup(data);
  })
  .catch(err => Notiflix.Notify.failure('Oops, there is no country with that name'));
}

// Using _.debounce() method with its parameters
var debounce_fun = _.debounce(function () {
  // console.log('Function debounced after 1000ms!');
}, DEBOUNCE_DELAY);

debounce_fun();

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
