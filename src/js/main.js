import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
// import moreStyles from "./modules/moreStyles";
import moreStylesDB from "./modules/moreStylesDB";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSizing from "./modules/pictureSizing";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    modals();
    sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
    sliders(".main-slider-item", "vertical");
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    // moreStyles(".button-styles", ".styles-2");
    moreStylesDB(".button-styles", "#styles .row");
    calc("#size", "#material", "#options", "#promocode", ".calc-price");
    filter();
    pictureSizing(".sizes-block");
});
