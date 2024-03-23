let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// arrow function generateTarget:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

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

// The parentheses around the parameter can be when there's only one parameter.
const updateScore = (winner) => {
  if (winner === 'human') {
    // += 1 can also be written as ++;
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}

// Can also be written as implicit return without curly braces:
// const advanceRound = () => currentRoundNumber++;

const advanceRound = () => {
  currentRoundNumber++;
}

// // TESTS
// console.log(generateTarget());
// console.log(updateScore());
// console.log(advanceRound());
