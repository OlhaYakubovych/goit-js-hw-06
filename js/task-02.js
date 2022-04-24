const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

const elements = (ingredients) => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  });
};

const ingredientsItemEl = elements(ingredients);
ingredientsListEl.append(...ingredientsItemEl);

console.log(ingredientsItemEl);

