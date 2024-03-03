
function loadHomeContent() {

  let mainContent = document.querySelector("#content");

  mainContent.innerHTML = "";

  let headline = document.createElement("h1");
  headline.textContent = "The Oven Front";

  let supportText = document.createElement("p");
  supportText.textContent = "A supporting line of text";

  mainContent.appendChild(headline);
  mainContent.appendChild(supportText)

}

export {
  loadHomeContent
};