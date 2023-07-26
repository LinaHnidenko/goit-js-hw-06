const list = document.querySelector("#categories");
console.log(`Number of categories: ${list.children.length}`);
const quantity = [...list.children].forEach((element) =>
  console.log(
    `Category: ${element.firstElementChild.textContent} \nElements: ${element.lastElementChild.children.length}`
  )
);
