const tweetForm = document.querySelector("#tweetForm")

tweetForm.addEventListener("submit", function (e) {
    const usernameInput = document.querySelectorAll('input')[0];
    const usernameTweet = document.querySelectorAll('input')[1];

    const name = usernameInput.value;
    const tweet = usernameTweet.value;
    console.log("submit");

    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(name);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    console.log(newTweet)
    const tweetsUL = document.querySelector('#tweets');
    tweetsUL.appendChild(newTweet);
    usernameInput.value = "";
    usernameTweet.value = "";
    e.preventDefault();
});