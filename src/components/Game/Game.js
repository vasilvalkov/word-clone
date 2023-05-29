import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessBox from '../GuessBox';
import ResultsBoard from '../ResultsBoard/ResultsBoard';
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS_IN_WORD } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill(
      Array(NUM_OF_LETTERS_IN_WORD).fill('')
    )
  );
  const [currentGuessNumber, setCurrentGuessNumber] = React.useState(0);

  function onGuess(guess) {
    if (currentGuessNumber >= NUM_OF_GUESSES_ALLOWED ) {
      window.alert('Game Over!');
      return;
    }

    const letters = checkGuess(guess, answer);
    const nextGuesses = [...guesses];
    nextGuesses[currentGuessNumber] = letters;

    setGuesses(nextGuesses);
    setCurrentGuessNumber(currentGuessNumber + 1);
  }

  return (
    <>
      <ResultsBoard results={guesses} />
      <GuessBox onGuess={onGuess} />
    </>
  );
}

export default Game;
