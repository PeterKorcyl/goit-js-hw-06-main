const allCategories = document.querySelectorAll("#categories .item");
const categoriesCount = allCategories.length;
console.log(`Number of categories: ${categoriesCount}`);

//podpunktu 2//

allCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const itemCounts = category.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemCounts}`);
});
