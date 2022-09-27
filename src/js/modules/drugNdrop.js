const drugNdrop = () => {
    const fileInsert = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((eventName) => {
        fileInsert.forEach((insert) => {
            insert.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function highLight(item) {
        item.closest('.file_upload').style.border = '5px solid red';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }
    function unHighLight(item) {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = '#FFFFFF';
    }

    ['dragenter', 'dragover'].forEach((eventName) => {
        fileInsert.forEach((insert) => {
            insert.addEventListener(eventName, () => highLight(insert), false);
        });
    });
    ['dragleave', 'drop'].forEach((eventName) => {
        fileInsert.forEach((insert) => {
            insert.addEventListener(eventName, () => unHighLight(insert), false);
        });
    });

    fileInsert.forEach((insert) => {
        insert.addEventListener('drop', (e) => {
            insert.files = e.dataTransfer.files;
            let dots;
            const filesNamesArrow = insert.files[0].name.split('.');
            filesNamesArrow[0].length > 6 ? (dots = '...') : (dots = '.');
            const name = filesNamesArrow[0].substring(0, 6) + dots + filesNamesArrow[1];
            insert.previousElementSibling.textContent = name;
            console.log(insert.files[0]);
        });
    });
};

export default drugNdrop;
