const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value.trim() || !password.value.trim()) {
    alert("Усі поля мають будти заповнені!");
    return;
  }
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(data);

  form.reset();
}
