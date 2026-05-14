let totalScore = 0;

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

  // Roll new dice values
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  player1(dice1);
  player2(dice2);

  // Determine winner
  if (dice1 > dice2) {
      document.getElementById("score1").innerHTML = totalScore;
     totalScore += 1;

  } else if (dice1 < dice2) {
      document.getElementById("score2").innerHTML = totalScore;
    totalScore += 1;
  } else {
    document.getElementById("score1").innerHTML = totalScore;
    document.getElementById("score2").innerHTML = totalScore;

    totalScore += 1;

  }
}

function newGame() {
  document.getElementById("score1").innerHTML = 0;
  document.getElementById("score2").innerHTML = 0;

  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  
  confirm("Game Restarted")

}