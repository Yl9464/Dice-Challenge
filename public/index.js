let totalScore = 0;
let score1 = 0;
let score2 = 0;

function player1(dice1) {
  document
    .querySelector("img.img1")
    .setAttribute("src", "images/dice" + dice1 + ".png");
}

function player2(dice2) {
  document
    .querySelector("img.img2")
    .setAttribute("src", "images/dice" + dice2 + ".png");
}

function rollAgain() {
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");

  if (dice1 > dice2) {
     score1++;
    document.getElementById("score1").innerHTML = score1;
  } 
  else if (dice2 > dice1) {
    score2++;
    document.getElementById("score2").innerHTML = score2;
  } 
  else {
   score1++;
    document.getElementById("score1").innerHTML = score1;
    score2++;
    document.getElementById("score2").innerHTML = score2;

  }
document.querySelector(".header").innerHTML =
    dice1 > dice2 ? "Player 1 Wins!" :
    dice2 > dice1 ? "Player 2 Wins!" :
    "Draw!";
}
function newGame() {
  score1 = 0;
  score2 = 0;

  document.getElementById("score1").innerHTML = 0;
  document.getElementById("score2").innerHTML = 0;

  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");

  document.querySelector(".header").innerHTML = "Dice Game";
 
  confirm("Game Restarted")
}