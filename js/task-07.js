const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

console.log(inputEl);
console.log(spanEl);

const changeValueEl = (text) => {
    spanEl.style.fontSize = `${text.currentTarget.value}px`
};
inputEl.addEventListener("input", changeValueEl);
