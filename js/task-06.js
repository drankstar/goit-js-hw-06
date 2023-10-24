const dataInput = document.querySelector('[data-length="6"]');
const validLength = dataInput.dataset.length;

dataInput.addEventListener("blur", onBlur);
function onBlur(event) {
  const { value } = event.currentTarget;
  const valueTrim = value.trim();
  if (valueTrim.length === Number(validLength)) {
    dataInput.classList.add("valid");
    dataInput.classList.remove("invalid");
    return;
  }
  dataInput.classList.remove("valid");
  dataInput.classList.add("invalid");
}
