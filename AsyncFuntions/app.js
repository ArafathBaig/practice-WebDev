async function hello() {

}

const sing = async () => {
    return "LALALALA";
}

sing().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials";

    if (password === 'corgifeet') return "Welcome";

    throw 'Invalid Password';
}

login("arafathbaig", "corgifeet")
    .then(msg => {
        console.log(msg);
    })
    .catch(err => {
        console.log(err);
    })