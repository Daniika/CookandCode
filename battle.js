/*Generate a random number*/

var number = Math.floor(Math.random() * 18) + 1;
var number2 = number + 1;
var number3 = number2 + 1;

var statusOutput = document.getElementById('Output');

var guessInput = document.getElementById('guess');

var hits = 0;
var isSunk = false;


    
function checkGuess() {
  
var guessVal = parseInt(guess.value);
  
    if (hits < 6 && guessVal) {
    //add 1 to counter variable
    hits++;
    document.getElementById("guesscount").innerHTML = "Guesses left: " + (6 - hits);
    
   

    //status update
    if (guessVal < number) {
    
      Output.value = "Not there! Guess again. too low" ;
    }
    if (guessVal > number) {
      
      Output.value = "Keep Guessing. too high";
    
    }
    if (guessVal === number || guess=== number2 || guess===number3) {
      
      Output.value = "You sunk my battleship, Good shots !";
      e.target.style.background = 'yellow';
		
			gameBoard[row][col] = 2;
      
					square[num].style.backgroundColor="red";
    }
  }
  //if counter has reached 6
  else if (hits == 6) {
    //update the status
    Output.value = "You weren't able to guess the correct number, and you are not able to sink my ship today, chips ahoy !";
  }
    
    return false;
}

/* Reset game */    
function clearFields() {
  
  guess.value = "";
  
  hits = 0;
  
  Output.value = "You have yet to guess anything.";
 
  number = Math.floor(Math.random() * 18) + 1;

  return false;
}


// create and set tiles
var rows = 1;
var cols = 20;
var squareSize = 35;

var gameBoardContainer = document.getElementById("gameboard");

  for (i = 0; i < cols; i++) {
  for (j = 0; j < rows; j++) {
      
var square = document.createElement("div");
gameBoardContainer.appendChild(square);

var topPosition = j * squareSize;
var leftPosition = i * squareSize;			


square.style.top = topPosition + 'px';
square.style.left = leftPosition + 'px';


}
}

gameBoardContainer.addEventListener("click", shoot, false);

function shoot(checkGuess){



}











//Declaring and defining array
let squares = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

square[0] = "#s01";
square[1] = "#s02";
square[2] = "#s03";
square[3] = "#s04";
square[4] = "#s05";
square[5] = "#s06";
square[6] = "#s07";
square[7] = "#s08";
square[8] = "#s09";
square[9] = "#s10";
square[10] = "#s11";
square[11] = "#s12";
square[12] = "#s13";
square[13] = "#s14";
square[14] = "#s15";
square[15] = "#s16";
square[16] = "#s17";
square[17] = "#s18";
square[18] = "#s19";
square[19] = "#s20";

