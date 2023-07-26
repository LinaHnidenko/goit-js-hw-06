let counterValue = 0;
const span = document.querySelector("#value");
const btnDecrement = span.previousElementSibling;
const btnIncrement = span.nextElementSibling;
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  span.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  span.textContent = counterValue;
}
