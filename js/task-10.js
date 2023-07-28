const input = document.querySelector("input");
const divGeneral = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
btnCreate.addEventListener("click", boxes);
btnDestroy.addEventListener("click", destroyBoxes);

function boxes() {
  if (amount > Number(input.min) || amount <= Number(input.max)) {
    createBoxes(input.value);
  }
}
function createBoxes(amount) {
  let divsAdded = [];
  let size = 30;
  amount = Number(input.value);

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    let newDiv = document.createElement("div");
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backdroundColor = getRandomHexColor();
    divsAdded.push(newDiv);
  }
  return divGeneral.append(...divsAdded);
}

function destroyBoxes() {
  divGeneral.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
