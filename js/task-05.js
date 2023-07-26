const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
textInput.addEventListener("input", onInput);

function onInput(event) {
  if (event.currentTarget.value.trim() !== "") {
    output.textContent = event.currentTarget.value.trim();
  } else {
    output.textContent = "Anonymous";
  }
}
