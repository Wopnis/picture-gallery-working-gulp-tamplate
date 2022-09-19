import { getResource } from "../services/requests";

const moreStylesDB = (trigger, wrapper) => {
    const button = document.querySelector(trigger);

    button.addEventListener("click", () => {
        getResource("http://localhost:3000/styles")
            .then((result) => createCards(result))
            .catch((error) => console.log(error));
        button.classList.add("animated", "rotateOut");
    });

    function createCards(response) {
        response.forEach(({ src, title, link }) => {
            let card = document.createElement("div");
            card.classList.add(
                "animated",
                "fadeInUp",
                "col-sm-3",
                "col-sm-offset-0",
                "col-xs-10",
                "col-xs-offset-1"
            );
            card.innerHTML = `
          <div class="styles-block">
              <img src=${src} alt="style">
              <h4>${title}</h4>
              <a href="${link}">Подробнее</a>
          </div>
          `;
            document
                .querySelector(".card-block")
                .classList.add("animated", "slideInDown");
            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default moreStylesDB;
