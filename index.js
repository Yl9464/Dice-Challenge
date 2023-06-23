let randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
let randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);

//Dice 1
let randomDiceImage = "dice" + randomNumber1 + ".png"
let RandomImageSource = "images/" + randomDiceImage 

let image1 = "images/dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", RandomImageSource)

let randomImageSource2 = "images/dice" + randomNumber2 + ".png"
document.querySelectorAll("img")[1].setAttribute("src", RandomImageSource)


function theWinnerIs() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2.header").innerHTML = "Player 1 wins! Refresh page to roll again."
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2.header").innerHTML = "Player 2 wins! Refresh page to roll again.";
  } else if (randomNumber1 === randomNumber2) {

    document.querySelector("h2.header").innerHTML = "Its a draw! Refresh page to roll again.";
  }
}
theWinnerIs();
