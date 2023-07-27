const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields!");
  }
  console.log(`Email: ${email.value} \nPassword: ${password.value}`);
  event.currentTarget.reset();
}
