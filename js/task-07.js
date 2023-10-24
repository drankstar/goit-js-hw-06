const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const fontSize = input.value;
text.style.fontSize = `${fontSize}px`;
input.addEventListener("input", (event) => {
  const { value } = event.currentTarget;
  text.style.fontSize = `${value}px`;
});
