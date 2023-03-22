const $ = document.getElementById.bind(document);;
const searchBox = $('search-box');
const title = $('title');
const meaning = $('meaning');
const audio = $('audio');
const meaningContainer = $('meaning-container');
const infoText = $('info-text')

//process look up word
async function fetchAPI(word){
    try{
        //wait to look up
        infoText.style.display = "block";
        meaningContainer.style.display = "none";
        infoText.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then(response => response.json());
        console.log(result.title);

        //display meaning
        //can't look up result.title = 'No Definitions Found'
        //can look up result.title = undefined
        if (result.title) {
            infoText.style.display = "none";
            meaningContainer.style.display = "block";
            title.innerText = word;
            meaning.innerText = 'No Definitions Found';
            audio.style.display = 'none';
            
        }else {
            infoText.style.display = "none";
            meaningContainer.style.display = "block";
            title.innerText = word;
            meaning.innerText = result[0].meanings[0].definitions[0].definition;
            audio.style.display = "inline-flex";
            audio.src = result[0].phonetics[0].audio;
        }
    }
    catch(error){
        console.log(error); 
        infoText.innerText = `an error happened, try again later`;
    }
    
}

searchBox.onkeyup = function(e){
    if(e.target.value && e.keyCode === 13){
        fetchAPI(e.target.value)
    }
}