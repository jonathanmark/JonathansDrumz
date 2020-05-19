var drumButtons = document.getElementsByTagName("button");

for(var i = 0; i < drumButtons.length; i++)
{
    drumButtons[i].addEventListener("click",handleClick);
}

function handleClick(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
}


document.addEventListener("keydown", function(event)  {
    makeSound(event.key);
    // alert(event.key);
})



function makeSound(key){
    switch (key) {
        case "w":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}
