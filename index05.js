let parentContainer = document.getElementById("container");
//creating div.
let cardBox = document.createElement("div");
cardBox.classList.add("box");


//creating image.
let cardImage = document.createElement("img");
cardImage.classList.add("image1");
cardImage.setAttribute("src", "Kyojuro Rengoku.webp");
cardImage.setAttribute("alt", "Kyojuro Rengoku");

//creating text part.
let cardText = document.createElement("span");
cardText.innerHTML = ("Rengoku - The most powerful Flame Breathing technique");

parentContainer.appendChild(cardBox);
cardBox.appendChild(cardImage);
cardBox.appendChild(cardText);


// lecture - async and defer{/* <script asycn src="index.html"></script> */
/* <script defer src="index.html"></script> */
// asycn - In head tag it start downlodeing js and html both but not wait for complete completion of html it execute both at same time.

// defer - In head tag it start downloding the script along with the complition of html and when html is painted in dom then it start executing javascript.
