import Vue from 'vue';

import AOS from "aos";
import "aos/dist/aos.css";
export default ({ app }, inject) => {
    app.AOS = new AOS.init
};