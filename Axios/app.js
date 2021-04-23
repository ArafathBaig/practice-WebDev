// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res.data.ticker.price);
//     })
//     .catch(err => {
//         console.log("ERROR", err);
//     })

const ul = document.querySelector("#jokes");
const button = document.querySelector("button");
const fetcBitcoinPrice = async function () {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
        console.log(res.data.ticker.price);
    } catch (err) {
        console.log(err);
    }
}

const addNewJoke = async () => {
    const joke = await getDadJoke();
    const newLi = document.createElement("li");
    newLi.append(joke);
    ul.append(newLi);
}

const getDadJoke = async () => {
    const headers = {
        headers: {
            Accept: 'application/json'
        }
    };
    const res = await axios.get("https://icanhazdadjoke.com/", headers);
    return res.data.joke;

}

button.addEventListener('click', async () => {
    addNewJoke();
})