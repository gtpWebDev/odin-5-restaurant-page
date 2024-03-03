function loadAboutContent() {

  let mainContent = document.querySelector("#content");

  mainContent.innerHTML = "";
  
  //let img = document.createElement("img");
  //img.src = "./food-hot-dog.svg"

  let headline = document.createElement("h1");
  headline.textContent = "About Content";

  let supportText = document.createElement("p");
  supportText.textContent = "A supporting line of text about the about";

  //mainContent.appendChild(img);
  mainContent.appendChild(headline);
  mainContent.appendChild(supportText);

}

export {
  loadAboutContent
};
