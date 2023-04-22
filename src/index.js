import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;
// Default JS ends

//Input selector
const inputElement = document.querySelector('input');
const list = document.querySelector('.country-list');

//Event listener for the input
inputElement.addEventListener('input', onInput);

function onInput(evt) {
  evt.preventDefault();
  const name = evt.currentTarget.value;
  // const END_POINT = `/name/${name}`;

  fetchCountries(name)
    .then(data => (list.innerHTML = createMarkup(data)))
    .catch(err => Notiflix.Notify.failure("Oops, there is no country with that name"));
  
}

function createMarkup(data) {
  return data.map(
    ({ capital, flags, languages, name, population })=>
    `<li>
    <h1>${name.official}</h1>
    <p>${capital}</p>
    <p>${population}</p>
    <img src="${flags.svg}" alt="${name.official}" width="40px"/>
    <p>${languages}</p>
    </li>`
   
  ).join("");
  
}
