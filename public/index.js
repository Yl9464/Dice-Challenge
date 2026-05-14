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
     totalScore += 1;

  } else if (dice1 < dice2) {
    totalScore += 1;
  } else {
    totalScore += 1;

  }

  // Show total score
  document.getElementById("score1").innerHTML = totalScore;
}