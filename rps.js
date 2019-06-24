
//declare variables 

var Rock = document.getElementById('Rock').addEventListener('click', run);
var Paper = document.getElementById('Paper').addEventListener('click', run);
var Scissors = document.getElementById('Scissors').addEventListener('click', run);

var computerChoice;
var playerChoice;

var player = document.getElementById('player');
var computer = document.getElementById('computer');
var result = document.getElementById('result');

//start game
function run() {
  	playerChoice = this.innerText;
  	computerPick();
  	compare();
}

function computerPick() {
  	var number = Math.random();
	if (number <= 0.33) {
		computerChoice = "Rock";
    } else if (number > 0.33 && number <= 0.66) {
    	computerChoice = "Paper";
    } else {
    	computerChoice = "Scissors";
    }
 }
 
 function compare() {
 	player.innerHTML = "You have chosen: " + playerChoice;
 	computer.innerHTML = "Computer chooses: " + computerChoice;

 	if (playerChoice == computerChoice) {
 		result.innerHTML = "Tie";
 		
 	} else if (playerChoice === "Rock" && computerChoice === "Paper") {
 		result.innerHTML = "Lose!";
 	} else if (playerChoice === "Rock" && computerChoice === "Scissors") {
 		result.innerHTML = "Win!";
 	

 	} else if (playerChoice === "Paper" && computerChoice === "Rock") {
 		result.innerHTML = "Win!";
 	} else if (playerChoice === "Paper" && computerChoice === "Scissors") {
 		result.innerHTML = "Lose!";


 	} else if (playerChoice === "Scissors" && computerChoice === "Rock") {
 		result.innerHTML = "Lose!";
 	} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
 		result.innerHTML = "Win!";
 	}
}

