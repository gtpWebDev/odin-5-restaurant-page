import { updateDials } from "./navbar.js"

function loadHomeContent() {

  let mainContent = document.querySelector("#content");

  mainContent.innerHTML = "";

  let headline = document.createElement("h1");
  headline.textContent = "Front of the oven!";

  let supportText = document.createElement("p");
  supportText.setAttribute("class","strapline");
  supportText.textContent = "Delivering Excellence, Simplicity, and Consistency in every culinary endeavour.";

  mainContent.appendChild(headline);
  mainContent.appendChild(supportText)

  updateDials("home");

}

export {
  loadHomeContent
};