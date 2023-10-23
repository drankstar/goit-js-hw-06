const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
console.log("Number of categories:", items.length);

items.forEach((item) => {
  const title = item.querySelector("h2");
  const titleText = title.textContent;
  console.log("Category:", titleText);
  const list = item.querySelector("ul")
  const categoryItem = list.querySelectorAll("li")
  const amount = categoryItem.length;
  console.log("Elements:", amount);
});
