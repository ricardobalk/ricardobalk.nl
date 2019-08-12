// import moment from "moment"
import 'lodash';
import jQuery from 'jquery';

window.$ = window.JQuery = jQuery;
import './app.scss';
import Vue from 'vue';
import Hello from './vue-components/Hello.vue';
import MyFooter from './vue-components/Footer.vue';
import Greet from './vue-components/Greet.vue';
import FancyButton from './vue-components/FancyButton.vue';
import Polaroid from './vue-components/Polaroid.vue';
import Service from './vue-components/Service.vue';
import SuccessStory from './vue-components/SuccessStory.vue';

const APPS = {
    Hello,
    MyFooter,
    Greet,
    FancyButton,
    Polaroid,
    Service,
    SuccessStory
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
