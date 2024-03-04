
import MenuItem from "./MenuItem.js"
import { updateDials } from "./navbar.js"

const menuArray = [
  {
    name: "Scrambled Eggs Cube",
    price: "£11.50"
  },
  {
    name: "Ham, Cheese & Egg Bun",
    price: "£10"
  },
  {
    name: "Goat's Cheese Croissant",
    price: "£6.60"
  },
  {
    name: "Croque Madame",
    price: "£12.50"
  },
]


function loadMenuContent() {

  // add title, text and menu to the DOM, and update navbar dials

  let mainContent = document.querySelector("#content");

  mainContent.innerHTML = "";

  let headline = document.createElement("h1");
  headline.textContent = "Our Menu";

  let supportText = document.createElement("p");
  supportText.setAttribute("class","strapline");
  supportText.textContent = "Available all day, Monday to Saturday";

  let menuContainer = document.createElement("div");
  menuContainer.setAttribute("id","menu-container");

  const menu = constructMenu(menuArray);
  console.table(menu)
  let menuDOM = menu.map( (element) => {
    return `
      <div class="menu-item">
        <div>${element.name}</div>
        <div>${element.price}</div>
      </div>
    `
  }).join("")
  menuContainer.innerHTML = menuDOM

  mainContent.appendChild(headline);
  mainContent.appendChild(supportText);
  mainContent.appendChild(menuContainer);

  updateDials("menu");

}


function constructMenu(array) {

  // not necessary, practicing basic classes

  let output = []
  array.forEach( (element, index) => {
    let meal = new MenuItem(element.name, element.price)
    output.push(meal)
  })
  return output
}

export {
  loadMenuContent
};
