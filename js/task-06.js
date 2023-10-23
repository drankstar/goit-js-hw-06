const dataInput = document.querySelector('[data-length="6"]');
const validLength = dataInput.dataset.length;

dataInput.addEventListener("blur", onBlur);
function onBlur(event) {
  const { value } = event.currentTarget;
  const valueTrim = value.trim()
  if (valueTrim.length === Number(validLength)) {
    dataInput.classList.add("valid");
    return;
  }
  dataInput.classList.add("invalid");
}
