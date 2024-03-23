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
  if (humanGuess.Math.abs() >= computerGuess.Math.abs()) {
    return true;
  } else {
    return false;
  }
}
