//
let listOfButton:NodeListOf<HTMLButtonElement> = document.querySelectorAll(".drum"); //create a list of buttons which represent the drums

for (let index = 0; index < listOfButton.length; index++) { 
    listOfButton[index].addEventListener("click", (e) => {
        playDrum((e.target as HTMLButtonElement).textContent);
        buttonAnimation((e.target as HTMLButtonElement).textContent);
    }
    );
}

document.addEventListener("keydown", (e:KeyboardEvent) => {
    playDrum(e.key);
    buttonAnimation(e.key);
}); 

//Functions
function playDrum(key:string | null): void {
    if (key === null) { return; }
    let drumSound: HTMLAudioElement;
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

function buttonAnimation(key: string | null): void {
    let activeButton: HTMLButtonElement | null = document.querySelector("." + key);
    activeButton?.classList.toggle("pressed");
    setTimeout(() => activeButton?.classList.toggle("pressed")); 
}


