let randomNumber1 = Math.floor(Math.random() * (7 - 1) + 1);
let randomNumber2 = Math.floor(Math.random() * (7 - 1) + 1);
console.log(randomNumber1);
console.log(randomNumber2);

function player1() {
  for (i = 0; i <= randomNumber1; i++) {
    if (randomNumber1 === 1) {
      document
        .querySelector("img.img1")
        .setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
      document
        .querySelector("img.img1")
        .setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
      document
        .querySelector("img.img1")
        .setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
      document
        .querySelector("img.img1")
        .setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
      document
        .querySelector("img.img1")
        .setAttribute("src", "images/dice5.png");
    } else if (randomNumber1 === 6) {
      document
        .querySelector("img.img1")
        .setAttribute("src", "images/dice6.png");
    }
  }
}

player1();

function player2(i) {
  for (i = 0; i <= randomNumber1; i++) {
    if (randomNumber2 === 1) {
      document
        .querySelector("img.img2")
        .setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
      document
        .querySelector("img.img2")
        .setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
      document
        .querySelector("img.img2")
        .setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
      document
        .querySelector("img.img2")
        .setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
      document
        .querySelector("img.img2")
        .setAttribute("src", "images/dice5.png");
    } else if (randomNumber2 === 6) {
      document
        .querySelector("img.img2")
        .setAttribute("src", "images/dice6.png");
    }
  }
}
player2();

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
