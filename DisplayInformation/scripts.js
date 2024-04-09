//Grab a random image from one of the two api's de  pending on the button clicked
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
        return dog_array;
    } else{
        return database["cats"][random_breed]["id"];
    }
}

//Load images when file loaded in

function reload(){
    const dog_count = Object.keys(database["dogs"]).length;
    const cat_count =Object.keys(database["cats"]).length;
    let first_dog = randomBreed(dog_count, "Dog");
    let first_cat = randomBreed(cat_count, "Cat");
    randomDogImage(first_dog);
    randomCatImage(first_cat);

}


addEventListener("DOMContentLoaded", reload);
//Refresh the images when the button is clicked
document.getElementById("refresh").addEventListener("click", reload);

const database ={
    "dogs": {
      "affenpinscher": [],
      "african": [],
      "airedale": [],
      "akita": [],
      "appenzeller": [],
      "australian": [
        "shepherd"
      ],
      "basenji": [],
      "beagle": [],
      "bluetick": [],
      "borzoi": [],
      "bouvier": [],
      "boxer": [],
      "brabancon": [],
      "briard": [],
      "buhund": [
        "norwegian"
      ],
      "bulldog": [
        "boston",
        "english",
        "french"
      ],
      "bullterrier": [
        "staffordshire"
      ],
      "cattledog": [
        "australian"
      ],
      "chihuahua": [],
      "chow": [],
      "clumber": [],
      "cockapoo": [],
      "collie": [
        "border"
      ],
      "coonhound": [],
      "corgi": [
        "cardigan"
      ],
      "cotondetulear": [],
      "dachshund": [],
      "dalmatian": [],
      "dane": [
        "great"
      ],
      "deerhound": [
        "scottish"
      ],
      "dhole": [],
      "dingo": [],
      "doberman": [],
      "elkhound": [
        "norwegian"
      ],
      "entlebucher": [],
      "eskimo": [],
      "finnish": [
        "lapphund"
      ],
      "frise": [
        "bichon"
      ],
      "germanshepherd": [],
      "greyhound": [
        "italian"
      ],
      "groenendael": [],
      "havanese": [],
      "hound": [
        "afghan",
        "basset",
        "blood",
        "english",
        "ibizan",
        "plott",
        "walker"
      ],
      "husky": [],
      "keeshond": [],
      "kelpie": [],
      "komondor": [],
      "kuvasz": [],
      "labradoodle": [],
      "labrador": [],
      "leonberg": [],
      "lhasa": [],
      "malamute": [],
      "malinois": [],
      "maltese": [],
      "mastiff": [
        "bull",
        "english",
        "tibetan"
      ],
      "mexicanhairless": [],
      "mix": [],
      "mountain": [
        "bernese",
        "swiss"
      ],
      "newfoundland": [],
      "otterhound": [],
      "ovcharka": [
        "caucasian"
      ],
      "papillon": [],
      "pekinese": [],
      "pembroke": [],
      "pinscher": [
        "miniature"
      ],
      "pitbull": [],
      "pointer": [
        "german",
        "germanlonghair"
      ],
      "pomeranian": [],
      "poodle": [
        "medium",
        "miniature",
        "standard",
        "toy"
      ],
      "pug": [],
      "puggle": [],
      "pyrenees": [],
      "redbone": [],
      "retriever": [
        "chesapeake",
        "curly",
        "flatcoated",
        "golden"
      ],
      "ridgeback": [
        "rhodesian"
      ],
      "rottweiler": [],
      "saluki": [],
      "samoyed": [],
      "schipperke": [],
      "schnauzer": [
        "giant",
        "miniature"
      ],
      "segugio": [
        "italian"
      ],
      "setter": [
        "english",
        "gordon",
        "irish"
      ],
      "sharpei": [],
      "sheepdog": [
        "english",
        "shetland"
      ],
      "shiba": [],
      "shihtzu": [],
      "spaniel": [
        "blenheim",
        "brittany",
        "cocker",
        "irish",
        "japanese",
        "sussex",
        "welsh"
      ],
      "spitz": [
        "japanese"
      ],
      "springer": [
        "english"
      ],
      "stbernard": [],
      "terrier": [
        "american",
        "australian",
        "bedlington",
        "border",
        "cairn",
        "dandie",
        "fox",
        "irish",
        "kerryblue",
        "lakeland",
        "norfolk",
        "norwich",
        "patterdale",
        "russell",
        "scottish",
        "sealyham",
        "silky",
        "tibetan",
        "toy",
        "welsh",
        "westhighland",
        "wheaten",
        "yorkshire"
      ],
      "tervuren": [],
      "vizsla": [],
      "waterdog": [
        "spanish"
      ],
      "weimaraner": [],
      "whippet": [],
      "wolfhound": [
        "irish"
      ]
    },
  "cats": [
    {
      "id": "abys",
      "name": "Abyssinian"    
    },
    {
      "id": "aege",
      "name": "Aegean"
    },
    {
      "id": "abob",
      "name": "American Bobtail"
    },
    {
      "id": "acur",
      "name": "American Curl"
    },
    {
      "id": "asho",
      "name": "American Shorthair"
    },
    {
  
      "id": "awir",
      "name": "American Wirehair"
    },
    {
      "id": "amau",
      "name": "Arabian Mau"
    },
    {
  
      "id": "amis",
      "name": "Australian Mist"
    },
    {
  
      "id": "bali",
      "name": "Balinese"
    },
    {
  
      "id": "bamb",
      "name": "Bambino"
    },
    {
      "id": "beng",
      "name": "Bengal"
    },
    {
  
      "id": "birm",
      "name": "Birman"
    },
    {
      "id": "bomb",
      "name": "Bombay"
    },
    {
      "id": "bslo",
      "name": "British Longhair"
    },
    {
  
      "id": "bsho",
      "name": "British Shorthair"
    },
    {
      "id": "bure",
      "name": "Burmese"
    },
    {
      "id": "buri",
      "name": "Burmilla"
    },
    {
      "id": "cspa",
      "name": "California Spangled"
    },
    {
  
      "id": "ctif",
      "name": "Chantilly-Tiffany"
    },
    {
      "id": "char",
      "name": "Chartreux"
    },
    {
  
      "id": "chau",
      "name": "Chausie"
    },
    {
      "id": "chee",
      "name": "Cheetoh"
    },
    {
      "id": "csho",
      "name": "Colorpoint Shorthair"
    },
    {
  
      "id": "crex",
      "name": "Cornish Rex"
    },
    {
  
      "id": "cymr",
      "name": "Cymric"
    },
    {
      "id": "cypr",
      "name": "Cyprus"
    },
    {
      "id": "drex",
      "name": "Devon Rex"
    },
    {
      "id": "dons",
      "name": "Donskoy"
    },
    {
      "id": "lihu",
      "name": "Dragon Li"
    },
    {
      "id": "emau",
      "name": "Egyptian Mau"
    },
    {
      "id": "ebur",
      "name": "European Burmese"
    },
    {
      "id": "esho",
      "name": "Exotic Shorthair"
    },
    {
  
      "id": "hbro",
      "name": "Havana Brown"
    },
    {
      "id": "hima",
      "name": "Himalayan"
    },
    {
      "id": "jbob",
      "name": "Japanese Bobtail"
    },
    {
      "id": "java",
      "name": "Javanese"
    },
    {
      "id": "khao",
      "name": "Khao Manee"
    },
    {
      "id": "kora",
      "name": "Korat"
    },
    {
      "id": "kuri",
      "name": "Kurilian"
    },
    {
      "id": "lape",
      "name": "LaPerm"
    },
    {
      "id": "mcoo",
      "name": "Maine Coon"
    },
    {
      "id": "mala",
      "name": "Malayan"
    },
    {
      "weight": {
        "imperial": "7 - 13",
        "metric": "3 - 6"
      },
      "id": "manx",
      "name": "Manx"
    },
    {
      "weight": {
        "imperial": "5 - 9",
        "metric": "2 - 4"
      },
      "id": "munc",
      "name": "Munchkin"
    },
    {
      "id": "nebe",
      "name": "Nebelung"
    },
    {
      "id": "norw",
      "name": "Norwegian Forest Cat"
    },
    {
      "id": "ocic",
      "name": "Ocicat"
    },
    {
      "id": "orie",
      "name": "Oriental"
    },
    {
      "id": "pers",
      "name": "Persian"
    },
    {
      "id": "pixi",
      "name": "Pixie-bob"
    },
    {
      "id": "raga",
      "name": "Ragamuffin"
    },
    {
      "id": "ragd",
      "name": "Ragdoll"
    },
    {
      "id": "rblu",
      "name": "Russian Blue"
    },
    {
      "id": "sava",
      "name": "Savannah"
    },
    {
      "id": "sfol",
      "name": "Scottish Fold"
    },
    {
      "id": "srex",
      "name": "Selkirk Rex"
    },
    {
      "id": "siam",
      "name": "Siamese"
    },
    {
      "id": "sibe",
      "name": "Siberian"
    },
    {
      "weight": {
        "imperial": "5 - 8",
        "metric": "2 - 4"
      },
      "id": "sing",
      "name": "Singapura"
    },
    {
      "id": "snow",
      "name": "Snowshoe"
    },
    {
      "id": "soma",
      "name": "Somali"
    },
    {
      "id": "sphy",
      "name": "Sphynx"
    },
    {

      "id": "tonk",
      "name": "Tonkinese"
    },
    {
      "id": "toyg",
      "name": "Toyger"
    },
    {
      "id": "tang",
      "name": "Turkish Angora"
    },
    {
      "id": "tvan",
      "name": "Turkish Van"
    },
    {
      "id": "ycho",
      "name": "York Chocolate"
    }
  ]
  }