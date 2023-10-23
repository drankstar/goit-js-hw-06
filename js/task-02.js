const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list= document.querySelector("#ingredients")

const elementList= ingredients.map(item => {
  const element= document.createElement("li")
  element.textContent = item
  element.classList.add("item")
  return element
})

list.append(...elementList)
