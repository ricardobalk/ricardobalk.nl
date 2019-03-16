/**
 * Executes code on page loading
 *
 * @this {autorun}
 * @return {boolean} True when finished.
 */


function autorun() {
    "use strict";
    document.getElementsByClassName("sw-darkmode")[0].addEventListener("click", darkmodeToggleEventHandler, false);
}

function darkmodeToggleEventHandler() {
 if (this.getAttribute("data-state") === "on") {
     setDarkmode("on");
     this.setAttribute("data-state", "off");
  } else {
     setDarkmode("off");
     this.setAttribute("data-state", "on");
 }
 this.addEventListener("click", darkmodeToggleEventHandler, false);
}

function setDarkmode(state) {
    if (state === "off") {
        document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
    } else if (state === "on") {
        document.getElementsByTagName("html")[0].setAttribute("data-theme", "dark");
    } else {
        document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");
        console.info('Example Usage: setDarkMode("on");');
    }
}

/**
 * The correct, backwards compatible and non-blocking way
 * of executing a function on page loading.
 */

if (window.addEventListener) {
    window.addEventListener("load", autorun, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", autorun);
} else {
    window.onload = autorun;
}