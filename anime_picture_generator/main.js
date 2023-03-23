const $ = document.getElementById.bind(document);
const picture = $('picture');
const artist = $('artist');
const btn = $('btn');
const pictureContainer = $('picture-container');

const url = 'https://api.catboys.com/img';

btn.onclick = async function(){
    try {
        btn.disabled = true;
        btn.innerText = 'Loading...';
        picture.src = 'https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif'
        const result = await fetch(url).then((response)=> response.json());
        pictureContainer.style.display = 'block';
        picture.src = result.url;
        artist.innerText = result.artist;
        btn.innerText = 'Get Anime';
        btn.disabled = false;
    } catch (error) {
        artist.innerText = 'An error happened, please try again';
        btn.disabled = false;
        btn.innerText = 'Get Anime';
    }
}