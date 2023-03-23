const btn = document.getElementById('btn');
const emojiName = document.getElementById('emoji-name');

const url = "https://emoji-api.com/emojis?access_key=773b58f681fb786fafdb8392e8b8a75ddc177fd1";

const emoji = [];

//get data of emoji
async function getEmoji(){
    const data = await fetch(url).then(response => response.json());
    //console.log(data.length);
    for (let item of data){
        emoji.push({character: item.character,
                    unicodeName: item.unicodeName});
    };
}

getEmoji()

//click to get random index and show emoji
btn.onclick = function(){
    console.log(emoji.length);
    let index = Math.floor(Math.random()*emoji.length)
    btn.innerText = emoji[index].character;
    emojiName.innerText = emoji[index].unicodeName;
}
