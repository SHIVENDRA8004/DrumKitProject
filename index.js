document.querySelector(".Z").addEventListener("click", crash);
function crash() {
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
}

document.querySelector(".X").addEventListener("click", kick);
function kick() {
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
}

document.querySelector(".C").addEventListener("click", snare);
function snare() {
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
}

document.querySelector(".V").addEventListener("click", tom1);
function tom1() {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}

document.querySelector(".B").addEventListener("click", tom2);
function tom2() {
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
}

document.querySelector(".N").addEventListener("click", tom3);
function tom3() {
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
}

document.querySelector(".M").addEventListener("click", tom4);
function tom4() {
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
}
document.addEventListener("keypress", function (event) {
  playSound(event.key);
});

function playSound(whichKey) {
  switch (whichKey) {
    case "z":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "x":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "c":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "v":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "b":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "n":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "m":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
  }
}
