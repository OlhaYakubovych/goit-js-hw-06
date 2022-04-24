const colorBtn = document.querySelector('button');
const colorSpan = document.querySelector('span');
const colorBody = document.querySelector('body');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyChangeColor = (event) => {
  const getRandomColorBody = getRandomHexColor();
  colorBody.style.backgroundColor = getRandomColorBody;
  colorSpan.textContent = getRandomColorBody;
}

colorBtn.addEventListener("click", bodyChangeColor);
