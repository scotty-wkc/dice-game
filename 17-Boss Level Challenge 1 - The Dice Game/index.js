var player1Name = prompt("Enter Player 1 Name:");
player1Name = player1Name ? player1Name.charAt(0).toUpperCase() + player1Name.slice(1).toLowerCase() : "Player 1";
var player2Name = prompt("Enter Player 2 Name:");
player2Name = player2Name ? player2Name.charAt(0).toUpperCase() + player2Name.slice(1).toLowerCase() : "Player 2";

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var diceImage1 = "images/dice" + randomNumber1 + ".png";
  var diceImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector("#player1-name").textContent = player1Name;
  document.querySelector("#player2-name").textContent = player2Name;

  document.querySelector(".img1").setAttribute("src", diceImage1);
  document.querySelector(".img2").setAttribute("src", diceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 " + player1Name + " Wins!";
  } else if (randomNumber2 > randomNumber1) { 
    document.querySelector("h1").textContent = player2Name + " Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}

window.onload = function() {
  rollDice();
  var refreshBtn = document.getElementById("refresh-button");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", function() {
      rollDice();
    }, false);
  } else {
    console.error('Refresh button not found!');
  }
};