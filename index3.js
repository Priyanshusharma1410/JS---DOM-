// Event Listener part -2
let Input = document.querySelector("input");


Input.addEventListener("change", () => {
    console.log(Input.value);
});
// Input.addEventListener("input", () => {
//     console.log(Input.value);
// });
// Input.addEventListener("focus", () => {
//     console.log(Input.value);
// });
// Input.addEventListener("keyup", () => {
//     console.log(Input.value);
// });

// Event Listener Part-3

// Mouse Events
Input.addEventListener("mousedown", (event) => {
    console.log(event.button);//left-0,right-2,scroll-1.
});
//Coordinates
Input.addEventListener("mousedown", (event) => {
    let xcor = event.pageX;
    let ycor = event.pageY;
    let cors = `X cor - ${xcor}, Y cor - ${ycor}`;
    // console.log(cors);
});

document.body.addEventListener("mousedown", (event) => {
    let xcor = event.clientX;
    let ycor = event.clientY;
    let cors = `X cor - ${xcor}, Y cor - ${ycor}`;
    // console.log(cors);
});
