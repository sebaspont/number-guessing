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
