// Bubbling and caputring.
let Form = document.querySelector("#form");
let Div = document.querySelector("#div");//here you need to write the type - #.
let Para = document.getElementById("para");//don't need to write # in getElementById.

//bubbling
// Para.addEventListener("click", () => {
//     alert("Para tag");
// }); 
// Div.addEventListener("click", () => {
//     alert("Div tag");
// });

// Form.addEventListener("click", () => {
//     alert("Form tag");
// });

//capturing
Para.addEventListener("click", () => {
    alert("Para tag");
}, true); 
Div.addEventListener("click", () => {
    alert("Div tag");
}, true);

Form.addEventListener("click", () => {
    alert("Form tag");
}, true);