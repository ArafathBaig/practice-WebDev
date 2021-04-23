// http://api.tvmaze.com/search/shows
const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (e) {
    e.preventDefault();


    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let res of shows) {
        if (res.show.image) {
            const img = document.createElement("img");
            img.src = res.show.image.medium;
            document.body.append(img);
        }
    }
}