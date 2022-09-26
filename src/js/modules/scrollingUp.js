const scrollingUp = (arrowSelector) => {
    const upElem = document.querySelector(arrowSelector);
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    const element = document.documentElement,
        body = document.body;

    const countScroll = () => {
        upElem.addEventListener('click', function (event) {
            let scrollToTop = Math.round(body.scrollTop || element.scrollTop);
            if (this.hash !== '') {
                event.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementDist = 0;

                while (hashElement.offsetParent) {
                    hashElementDist += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }
                hashElementDist = Math.round(hashElementDist);
                smoothScroll(scrollToTop, hashElementDist, this.hash);
            }
        });
    };

    const smoothScroll = (from, to, hash) => {
        let timeInterval = 0.3,
            prevScrollToTop,
            speed;
        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function () {
            let scrollToTop = Math.round(body.scrollTop || element.scrollTop);
            if (
                prevScrollToTop === scrollToTop ||
                (to > from && scrollToTop >= to) ||
                (to < from && scrollToTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollToTop = scrollToTop;
            }
        }, timeInterval);
    };
    countScroll();
};

export default scrollingUp;
