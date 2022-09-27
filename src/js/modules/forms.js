import { sendData } from '../services/requests';

const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        messageInput = document.querySelectorAll('[name="message"]'),
        upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Идет загрузка',
        success: 'Сообщение отправлено. Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png',
    };

    const sendingPath = {
        designer: 'assets/server.php',
        questions: 'assets/questions.php',
        // designer: 'https://postman-echo.com/post',
        // questions: 'https://postman-echo.com/post',
    };

    const clearInputs = () => {
        inputs.forEach((item) => {
            item.value = '';
        });
        messageInput.forEach((input) => {
            input.value = '';
        });
        upload.forEach((item) => {
            item.previousElementSibling.textContent = 'Файл не выбран!';
        });
    };

    upload.forEach((item) => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            const filesNamesArrow = item.files[0].name.split('.');
            filesNamesArrow[0].length > 6 ? (dots = '...') : (dots = '.');
            // console.log(item.files[0]);
            const name = filesNamesArrow[0].substring(0, 6) + dots + filesNamesArrow[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach((item) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let messageStatus = document.createElement('div');
            messageStatus.classList.add('status');
            item.parentNode.appendChild(messageStatus);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            messageStatus.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            messageStatus.appendChild(textMessage);
            textMessage.classList.add('status');

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form')
                ? (api = sendingPath.designer)
                : (api = sendingPath.questions);
            console.log(api);

            sendData(api, formData)
                .then((res) => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch((err) => {
                    console.log(err);
                    messageStatus.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        messageStatus.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 2000);
                });
        });
    });
};
export default forms;
