const itemEl  = document.querySelectorAll('.item');
//console.log(allItemEl);

const amountItemEl = itemEl.length;
console.log(`Number of categories: ${amountItemEl}`);

itemEl.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const itemLastChild = item.lastElementChild;
    const amountLastChildEl = itemLastChild.querySelectorAll("li");;
    console.log(`Elements: ${amountLastChildEl.length}`);
});

