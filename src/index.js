import './index.html';
import './style.css';
import Layer from './Layer/index.js';
import './Layer/style.css';

console.log('funguju!');

const navBtn = document
  .getElementById('nav-btn')
  .addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-closed');
  });

const navigaceAll = document.querySelectorAll('nav a');
for (let i = 0; i < navigaceAll.length; i++) {
  navigaceAll[i].addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('nav-closed');
  });
}

let ordered = false;
const orderBtn = document
  .querySelector('.order-btn')
  .addEventListener('click', () => {
    const drinkCup = document.querySelector('.drink__cup');
    drinkCup.classList.toggle('drink__cup--selected');
    const orderBtn = document.querySelector('.order-btn');
    if (ordered === false) {
      orderBtn.textContent = 'Zrušit';
      ordered = true;
      console.log('ahooj');
    } else {
      orderBtn.textContent = 'Objednat';
      console.log('nazdar');
      ordered = false;
    }
  });

//---------------------------komponenta-------------------
//komponenta

/*const Layer = (props) => {
  return `
  <div class="layer">
  <div class="layer__color" style="background-color:${props.color}"></div>
  <div class="layer__label">${props.label}</div>
</div>`;
};*/

//data

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

//kombinace dat a html cyklus for
const LayersList = (props) => {
  let result = '';
  for (let i = 0; i < props.length; i++) {
    result += Layer(props[i]);
  }
  return result;
};
//kde se má komponenta vypsat
const elementDrink = document.querySelector('.drink__info');
elementDrink.innerHTML = LayersList(layers);
