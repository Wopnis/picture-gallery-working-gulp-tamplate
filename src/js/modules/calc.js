const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result),
        calcForm = document.querySelector(".calc_form ");

    let sum = 0;

    const calcFunction = () => {
        sum = Math.round(
            +sizeBlock.value * +materialBlock.value + +optionsBlock.value,
        );

        if (sizeBlock.value === "" || materialBlock.value === "") {
            resultBlock.textContent =
                "Пожалуйста, выберите размер и материал картины!";
        } else if (promocodeBlock.textContent === "BORISOVFOTOPOPART") {
            resultBlock.value = Math.round(sum * 0.6);
        } else {
            resultBlock.textContent = sum;
        }
    };

    const formReset = ({ target }) => {
        target.reset();
    };

    sizeBlock.addEventListener("change", calcFunction);
    materialBlock.addEventListener("change", calcFunction);
    optionsBlock.addEventListener("change", calcFunction);
    sizeBlock.addEventListener("input", calcFunction);

    calcForm.addEventListener("submit", formReset);
};

export default calc;
