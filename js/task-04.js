let counterValue = 0;

const counterMinesEl = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector('#value');
const counterPlusEl = document.querySelector('[data-action="increment"]');

const increment = () =>
    counterEl.textContent = counterValue += 1;

const decrement = () =>
    counterEl.textContent = counterValue -= 1;

counterMinesEl.addEventListener('click', decrement);
counterPlusEl.addEventListener('click', increment);