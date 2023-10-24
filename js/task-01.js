const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
console.log("Number of categories:", items.length);

items.forEach((item) => {
  const title = item.firstElementChild;
  const titleText = title.textContent;
  console.log("Category:", titleText);
  const list = title.nextElementSibling;
  const categoryItem = list.children;
  const amount = categoryItem.length;
  console.log("Elements:", amount);
});
