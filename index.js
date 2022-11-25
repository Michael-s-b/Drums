
let listOfButton = document.querySelectorAll(".drum");

for (let index = 0; index < listOfButton.length; index++) {
    listOfButton[index].addEventListener("click", playDrum);
}

document.addEventListener("keydown", playDrumKeyBoard)



























//Functions
function playDrum(event) {
    let drumSound;
    console.log(event.target.textContent);
    switch (event.target.textContent) {
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

function playDrumKeyBoard(event) {
    console.log(event.key);
    switch (event.key) {
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











