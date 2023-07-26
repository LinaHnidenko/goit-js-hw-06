const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", onBlur);

function onBlur(event) {
  if (
    event.currentTarget.value.trim().length ===
    Number(validInput.dataset.length)
  ) {
    validInput.classList.add("valid");
    validInput.classList.remove("invalid");
  } else {
    validInput.classList.add("invalid");
    validInput.classList.remove("valid");
  }
}
