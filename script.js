let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// arrow function generateTarget:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

// console.log(generateTarget())

// arrow function compareGuesses
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const humanDiff = Math.abs (secretTarget - humanGuess);
  const computerDiff = Math.abs (secretTarget - computerGuess);

  // option with if else statement
  // if (humanDiff >= computerDiff) {
  //   return true;
  // } else {
  //   return false;
  // }

  // concise option
  return humanDiff >= computerDiff;
}

// Create an updateScore() function. This function:

// Has a single parameter. This parameter will be a string value representing the winner.
// Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore.
// The string passed in will be either 'human' or 'computer'.
// Does not need to return any value.
// The purpose of this function is to be used to correctly increase the winner’s score after each round.

// updateScore function
// since it takes only one parameter, the parenthesis around winner can be ommited!
const updateScore = (winner) => {
  if (winner === 'human') {
    // += 1 can also be written as ++;
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}
