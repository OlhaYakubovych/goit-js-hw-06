const nameImputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const addTextEl = () => {
    if (nameImputEl.value !== "") {
        return nameOutputEl.textContent = nameImputEl.value;
    };
    return nameOutputEl.textContent = "Anonymous";
}
nameImputEl.addEventListener("input", addTextEl);