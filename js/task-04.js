let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

function onIncrement() {
  counterValue += 1;
  value.textContent = counterValue;
}
function onDecrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

btnDecrement.addEventListener("click", onDecrement);
btnIncrement.addEventListener("click", onIncrement);
