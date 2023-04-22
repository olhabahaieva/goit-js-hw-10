import './css/styles.css';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;
// Default JS ends

//Input selector
const inputElement = document.querySelector('input');
const list = document.querySelector('.countries-list');


//Event listener for the input
inputElement.addEventListener('input', onInput);

function onInput(evt) {
  evt.preventDefault();
  const name = evt.currentTarget.value;
  // const END_POINT = `/name/${name}`;

  fetchCountries(name)
    .then(data => (list.innerHTML = createMarkup(data.name)))
    .catch(err => console.log(err));

}



  function createMarkup(params){
    return
    `<li>$(params)</li>`;
  }
