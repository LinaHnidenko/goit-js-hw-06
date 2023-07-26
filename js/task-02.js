const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
ingredients.map((element) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = element;
  console.log(listItem);
  ingredientsList.append(listItem);
});
console.log(ingredientsList);
