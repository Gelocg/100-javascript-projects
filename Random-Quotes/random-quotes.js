const options = {
    method: 'GET',
    url: 'https://api.quotable.io/random'
};


async function getRandomQuote() {
    const res = await axios.request(options);
    const [quote, author] = [res.data.content, res.data.author];
    document.querySelector('.quote__content q').innerHTML = quote;
    document.querySelector('.quote__content cite').innerHTML = author;
}

document.querySelector('.generate__button').onclick = getRandomQuote;