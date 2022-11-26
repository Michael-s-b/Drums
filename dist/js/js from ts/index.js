"use strict";
let listOfButton = document.querySelectorAll(".drum");
for (let index = 0; index < listOfButton.length; index++) {
    listOfButton[index].addEventListener("click", (e) => {
        playDrum(e.target.textContent);
        buttonAnimation(e.target.textContent);
    });
}
document.addEventListener("keydown", (e) => {
    playDrum(e.key);
    buttonAnimation(e.key);
});
function playDrum(key) {
    if (key === null) {
        return;
    }
    let drumSound;
    switch (key) {
        case "w":
            drumSound = new Audio("sounds/tom-1.mp3");
            drumSound.play();
            break;
        case "a":
            drumSound = new Audio("sounds/tom-2.mp3");
            drumSound.play();
            break;
        case "s":
            drumSound = new Audio("sounds/tom-3.mp3");
            drumSound.play();
            break;
        case "d":
            drumSound = new Audio("sounds/tom-4.mp3");
            drumSound.play();
            break;
        case "j":
            drumSound = new Audio("sounds/snare.mp3");
            drumSound.play();
            break;
        case "k":
            drumSound = new Audio("sounds/crash.mp3");
            drumSound.play();
            break;
        case "l":
            drumSound = new Audio("sounds/kick-bass.mp3");
            drumSound.play();
            break;
        default:
            break;
    }
}
function buttonAnimation(key) {
    let activeButton = document.querySelector("." + key);
    activeButton === null || activeButton === void 0 ? void 0 : activeButton.classList.toggle("pressed");
    setTimeout(() => activeButton === null || activeButton === void 0 ? void 0 : activeButton.classList.toggle("pressed"));
}
