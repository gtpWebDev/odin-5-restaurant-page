import { pageLoadHeader } from "./pageLoad.js";
import { loadHomeContent } from "../home.js";
import { loadMenuContent } from "../menu.js";
import { loadAboutContent } from "../about.js";

import "./styles.css"

pageLoadHeader()
loadHomeContent()

const addTabListeners = (() => {

  let menuDial = document.querySelector("#dial-image-menu")
  menuDial.addEventListener("click",loadMenuContent)
  let aboutDial = document.querySelector("#dial-image-about")
  aboutDial.addEventListener("click",loadAboutContent)
  let homeDial = document.querySelector("#dial-image-home")
  homeDial.addEventListener("click",loadHomeContent)

})()
