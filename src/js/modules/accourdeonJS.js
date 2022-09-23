const accourdeonJS = (triggerSelector) => {
    const btns = document.querySelectorAll(triggerSelector),
        blocks = document.querySelectorAll(".accordion-block");

    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            blocks.forEach((block) => {
                block.classList.remove("active-content");
                block.style.maxHeight = "0px";
            });
            btns.forEach((btn) => {
                btn.classList.remove("active-style");
            });
            this.classList.toggle("active-style");
            this.nextElementSibling.classList.toggle("active-content");

            if (this.classList.contains("active-style")) {
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = "0px";
            }
        });
    });
};
export default accourdeonJS;
