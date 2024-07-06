let startBtn = document.getElementById("btn-sumbit");
let Count = document.getElementById("count");
// Event Listener Part-3.
startBtn.addEventListener("click", () => {
    // startBtn.innerText = "Begins";
    startBtn.classList.toggle("red-button");
    if (startBtn.innerText === "Start") {
        // startBtn.innerText = "Begin";
        startBtn.innerHTML='<span>Lets Begin</span>';
        // startBtn.classList.add("red-button");
    } else {
        startBtn.innerText = "Start";
        // startBtn.classList.remove("red-button");
    }
});

let value = 0;
Count.addEventListener("click", () => {
    value++;
    console.log(value);
});