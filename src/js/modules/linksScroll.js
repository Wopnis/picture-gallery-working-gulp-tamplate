const linksScroll = () => {
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.5;
    links.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                topOfBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }
                let progress = time - start,
                    px =
                        topOfBlock < 0
                            ? Math.max(widthTop - progress / speed, widthTop + topOfBlock)
                            : Math.min(widthTop + progress / speed, widthTop + topOfBlock);

                document.documentElement.scrollTo(0, px);

                if (px != widthTop + topOfBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
};

export default linksScroll;
