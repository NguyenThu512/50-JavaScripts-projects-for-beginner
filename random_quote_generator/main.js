const $ = document.getElementById.bind(document);
const quote = $('quote');
const author = $('author');
const btn = $('btn');

const url = "https://api.quotable.io/random";

async function getQuote(){
    try {
        //wait to get quote
        quote.innerText = 'Updating...';
        author.innerText = 'Updating...';
        btn.innerText = 'LOADING';
        btn.disabled = true;
        //get quote
        const result = await fetch(url).then((respose) => respose.json());
        //console.log(result);
        //show quote
        quote.innerText = result.content;
        author.innerText = `~ ${result.author}`;
        btn.innerText = 'GET A QUOTE';
        btn.disabled = false;
    } catch (error) {
        //process when error
        quote.innerText = 'An error happened, try again later';
        author.innerText = '';
        btn.innerText = 'GET A QUOTE';
        btn.disabled = false;
    }
}

getQuote();

btn.addEventListener('click', getQuote);
