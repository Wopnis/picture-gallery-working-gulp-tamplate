const sendData = async (url, data) => {
    let result = await fetch(url, {
        method: "POST",
        body: data,
    });
    return await result.text();
};

const getResource = async (url) => {
    let result = await fetch(url);

    if (!result.ok) {
        throw new Error(
            "Невозможно получить данные из ${url}, status: ${res.status}"
        );
    }
    return await result.json();
};

export { sendData, getResource };
