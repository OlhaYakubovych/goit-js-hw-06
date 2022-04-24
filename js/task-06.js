const nameInputEl = document.querySelector('#validation-input');

console.log(nameInputEl);

const addTextEl = (text) => {
    (text.currentTarget.value.length === Number(nameInputEl.dataset.length)) ?
        nameInputEl.setAttribute('class', 'valid') :
        nameInputEl.setAttribute('class', 'invalid');
};
nameInputEl.addEventListener("blur", addTextEl);
