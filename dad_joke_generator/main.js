const button = document.getElementById('new_joke');
const content = document.getElementById('joke_content');

const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){
    try {
        //wait to get data
        content.innerText = "Updating...";
        button.disabled = true;
        button.innerText = "Loading...";

        //get data
        const response = await fetch(apiURL, options);
        const data_joke = await response.json();
        
        //display joke
        button.disabled = false;
        button.innerText = "Tell me a joke";   
        content.innerText = data_joke[0].joke;
    }
    //process when can't get data
    catch (error) {
        content.innerText = "An error happened, try again later";
        button.disabled = false;
        button.innerText = "Tell me a joke";
        console.log(error);
    }
}

button.addEventListener('click',getJoke)