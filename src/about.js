import { updateDials } from "./navbar.js"

const aboutText = [
  "Front of the oven is led by a team of experts.",
  "The team embrace our desire to open an accessible and intimate restaurant, one that is also in line with our philosophy of contemporary, convivial dining.",
  "We draw from a variety of more casual offerings adapted to the tastes of the local area."
]

function loadAboutContent() {

  let mainContent = document.querySelector("#content");

  mainContent.innerHTML = "";
  
  let headline = document.createElement("h1");
  headline.textContent = "About Us";

  mainContent.appendChild(headline);
  
  let aboutUs = document.createElement("div");

  aboutText.forEach( (elem) => {
    const para = document.createElement("p");
    para.setAttribute("class","about-us-text");
    para.textContent = elem;
    aboutUs.appendChild(para);
  })

  mainContent.appendChild(aboutUs);

  updateDials("about");

}

export {
  loadAboutContent
};
