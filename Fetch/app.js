// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log(res);
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log("Oh No Error", e);
//     })


const fetchBitCoinPrice = async () => {
    try {
        const res = await fetch('https://ap.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log("something went wrong");
    }
}

fetchBitCoinPrice()