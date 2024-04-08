

//Grab a random image from one of the two api's de  pending on the button clicked
async function randomDogImage( breed){
    url = `https://dog.ceo/api/breed/${breed}/images/random`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        //Add a function to input the image into the proper container
    } catch(error){
        console.error("There was an error", error);
    }
}


//Grab a random image from one of the two api's depending on the button clicked
async function randomDogImage( breed){
    url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        //Add a function to input the image into the proper container
    } catch(error){
        console.error("There was an error", error);
    }
}

function getRandomImage(){
    console.log(breeds)
}
addEventListener("DOMContentLoaded", getRandomImage);


