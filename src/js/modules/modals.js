import calcScroll from "./calcScroll";

const modals = () => {
    let btnPressed = false;
    function bindModals(
        triggerSelector,
        modalSelector,
        closeSelector,
        destroy = false
    ) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll("[data-modal");
        const scroll = calcScroll();

        trigger.forEach((item) => {
            item.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true;

                if (destroy) {
                    item.remove();
                }

                windows.forEach((item) => {
                    item.style.display = "none";
                    item.classList.add("animated", "fadeIn");
                });
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            });
        });
        close.addEventListener("click", () => {
            windows.forEach((item) => {
                item.style.display = "none";
            });
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        });
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                windows.forEach((item) => {
                    item.style.display = "none";
                });
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    }

    function openByScroll(selectorPopup) {
        window.addEventListener("scroll", () => {
            if (
                !btnPressed &&
                window.scrollY + document.documentElement.clientHeight >=
                    document.documentElement.scrollHeight
            ) {
                document.querySelector(selectorPopup).click();
            }
        });
    }

    function openModalAfterTime(selector, time) {
        setTimeout(function () {
            let display;
            document.querySelectorAll("[data-modal]").forEach((item) => {
                if (getComputedStyle(item).display !== "none") {
                    display = "block";
                    document.body.style.marginRight = `0px`;
                }
            });
            if (!display) {
                let scroll = calcScroll();
                document.querySelector(selector).style.display = "block";
                document
                    .querySelector(selector)
                    .classList.add("animated", "fadeIn");
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function openModalAfterInterval(selector, interval) {
        setInterval(function () {
            let display;
            document.querySelectorAll("[data-modal").forEach((item) => {
                if (getComputedStyle(item).display !== "none") {
                    display = "block";
                    document.body.style.marginRight = `0px`;
                }
            });
            if (!display) {
                let scroll = calcScroll();
                document.querySelector(selector).style.display = "block";
                document
                    .querySelector(selector)
                    .classList.add("animated", "fadeIn");
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
            }
        }, interval);
    }

    bindModals(".button-design", ".popup-design", ".popup-design .popup-close");
    bindModals(
        ".button-consultation",
        ".popup-consultation",
        ".popup-consultation .popup-close"
    );
    bindModals(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
    openByScroll(".fixed-gift");
    openModalAfterTime(".popup-design", 60000);
    openModalAfterInterval(".popup-consultation", 180000);
};

export default modals;

/**
 * 60000
 * 180000
 */
