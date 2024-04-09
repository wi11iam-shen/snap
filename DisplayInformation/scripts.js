import data from "./data.json" with {type: "json"};
//Set base variables
const database = data;
let current_dog = "";
let current_cat = "";
const favorite_dogs = []
const favorite_cats = []

//When reloaded add images ins
addEventListener("DOMContentLoaded", reload);
//Refresh the images when the button is clicked
document.getElementById("refresh").addEventListener("click", reload);
//Add to favorite functions for cat and dog buttons
document.getElementById("dog-button").addEventListener("click", click_dog);
document.getElementById("cat-button").addEventListener("click", click_cat);


//Grab a random image from one of the two api's depending on the button clicked
async function randomDogImage( breed){
    let url = `https://dog.ceo/api/breed/${breed}/images/random`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        //Add a function to input the image into the proper container
        const img = document.createElement("img");
        img.src = data["message"];
        img.style.width = "300px";
        img.style.height = "300px";
        const dogSrc = document.getElementById("dogcard");
        if(dogSrc.childNodes.length > 0){
            dogSrc.removeChild(dogSrc.lastChild);
            dogSrc.append(img);
        }
        else{
            dogSrc.append(img);
        }
        
    } catch(error){
        console.error("There was an error", error);
    }
}
//Grab a random image from one of the two api's depending on the button clicked
async function randomCatImage( breed){
    let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        const img = document.createElement("img");
        img.src = data[0]["url"];
        img.style.width = "300px";
        img.style.height = "300px";
        const catSrc = document.getElementById("catcard");
        if(catSrc.childNodes.length > 0){
            catSrc.removeChild(catSrc.lastChild);
            catSrc.append(img);
        }
        else{
            catSrc.append(img);
        }
    } catch(error){
        console.error("There was an error", error);
    }
}

function randomBreed(count, type){
    let random_breed = Math.floor(Math.random() * count);
    if(type == "Dog"){
        let dog_array = Object.keys(database["dogs"])[random_breed];
        current_dog = dog_array;
        return dog_array;
    } else{
        current_cat = database["cats"][random_breed]['name'];
        return database["cats"][random_breed]["id"];
        
    }
}


function reload(){
    const dog_count = Object.keys(database["dogs"]).length;
    const cat_count =Object.keys(database["cats"]).length;
    let first_dog = randomBreed(dog_count, "Dog");
    let first_cat = randomBreed(cat_count, "Cat");
    randomDogImage(first_dog);
    randomCatImage(first_cat);

}

function show(animal_list, location){
  const parent = document.getElementById(location);
  removeAllChildNodes(parent);
  if(animal_list.length >0){
  for (let animal in animal_list){
    const new_fav = document.createElement("li"); 
    new_fav.appendChild(document.createTextNode(animal_list[animal]));
    parent.appendChild(new_fav);
  }
} 
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


function click_dog(){
      //Check if the breed exists in the list already
      if(favorite_dogs.includes(current_dog)){
        alert("You already have this type of dog saved");
      } else{
        favorite_dogs.push(current_dog);
        console.log(favorite_dogs);
        show(favorite_dogs, "dog-list");
      }
    }
function click_cat(){
      if(favorite_cats.includes(current_cat)){
        alert("You already have this type of cat saved");
      }else{
        favorite_cats.push(current_cat);
        show(favorite_cats, "cat-list");
      }
  }



