//
let listOfButton = document.querySelectorAll(".drum"); //create a list of buttons which represent the drums

for (let index = 0; index < listOfButton.length; index++) { //add a mouse event listener "click" for each button on the list
    listOfButton[index].addEventListener("click", (e) => { playDrum(e.target.textContent); });
}

document.addEventListener("keydown", (e) => {
    playDrum(e.key);
    console.log(e.key);
}); //add a keyboard event "keydown" listener


//Functions
function playDrum(key) { //play a sound depending on the button clicked
    let drumSound;
    switch (key) {
        case "w": drumSound = new Audio("sounds/tom-1.mp3");
            drumSound.play();
            break;
        case "a": drumSound = new Audio("sounds/tom-2.mp3");
            drumSound.play();
            break;
        case "s": drumSound = new Audio("sounds/tom-3.mp3");
            drumSound.play();
            break;
        case "d": drumSound = new Audio("sounds/tom-4.mp3");
            drumSound.play();
            break;
        case "j": drumSound = new Audio("sounds/snare.mp3");
            drumSound.play();
            break;
        case "k": drumSound = new Audio("sounds/crash.mp3");
            drumSound.play();
            break;
        case "l": drumSound = new Audio("sounds/kick-bass.mp3");
            drumSound.play();
            break;
        default:
            break;
    }
}









