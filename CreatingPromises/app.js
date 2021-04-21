const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {

        const rand = Math.random();

        setTimeout(() => {
            if (rand < 0.7)
                resolve();

            reject();
        }, 1000);
    });
}

fakeRequest('/dogs/1')
    .then(() => {
        console.log("Done with Request");
    }).catch((err) => {
        console.log("Ohh NOOO")
    })