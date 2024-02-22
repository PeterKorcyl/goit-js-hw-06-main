const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulList = document.querySelector("#ingredients");

//1. Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().

ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");
  //2. Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.

  liElement.textContent = ingredient;
  //3. Doda do elementu klasę item.

  liElement.classList.add("item");

  //4. Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

  ulList.append(liElement);
});
console.log(ulList);
