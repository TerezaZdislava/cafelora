import './index.html';
import './style.css';

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

//Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a nápis na tlačítku se vrátil zpět na Objednat. Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.
//Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej.

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
