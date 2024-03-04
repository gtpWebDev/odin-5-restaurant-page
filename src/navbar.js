
// Loads the DOM for the navbar

function loadNavbar() {

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

function updateDials(selectedDial) {

  // moves dial "dialnum" to "on", and the others to "off"

  let dialArray = [ "home","menu","about" ]

  dialArray.forEach((ele)=> {
    const dial = document.querySelector(`#dial-image-${ele}`)
    if (ele === selectedDial) {
      dial.setAttribute("class","selected-dial")
    } else {
      dial.setAttribute("class","unselected-dial")
    }
  })



}


export {
  loadNavbar as default,
  updateDials
};
