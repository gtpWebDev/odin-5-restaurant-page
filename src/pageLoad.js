
export function pageLoadHeader() {

  let navbarTitles = ["Home","Menu","About"]

  let homeNavBar = document.querySelector("#navbar");

  let createdDOM = navbarTitles.map( (elem, index) => {
    return `
    <div class="dial-container">
      <p class="dial-header">${elem}</p>
      <input id="dial-image-${elem.toLowerCase()}" class="dials" type="image" src="noun-dial.svg">
    </div>
  `
  }).join('')

  homeNavBar.innerHTML = createdDOM

}
