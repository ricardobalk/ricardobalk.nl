// import moment from "moment"
import 'lodash';
import jQuery from 'jquery';

window.$ = window.JQuery = jQuery;
import './app.scss';
import Vue from 'vue';
import Hello from './vue-components/Hello.vue';
import MyFooter from './vue-components/Footer.vue';
import Greet from './vue-components/Greet.vue';
import Polaroid from './vue-components/Polaroid.vue';

const APPS = {
    Hello,
    MyFooter,
    Greet,
    Polaroid
};

// Vue.config.devtools = true

function renderAppInElement(el) {
    let App = APPS[el.id];
    if (!App) return;

    // Props as data attributes:
    // <div class="__vue-root" data-message="Hello" id="Greet"></div>
    const props = Object.assign({}, el.dataset);
    console.log(props);
    new Vue({
        el,
        render(createElem) {
            return createElem(App, {
                attrs: props
            });
        }
    })
}

document.querySelectorAll('.__vue-root').forEach(renderAppInElement);

/**
 * Executes code on page loading
 *
 * @this {autorun}
 * @return {boolean} True when finished.
 */


function autorun() {
    "use strict";
    document.getElementsByClassName("sw-darkmode")[0].addEventListener("click", darkmodeToggleEventHandler, false);
    return true;
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
