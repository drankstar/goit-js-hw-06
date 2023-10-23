function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const btnColor = document.querySelector(".change-color");

btnColor.addEventListener("click", onClick);
function onClick() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}
