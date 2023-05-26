import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessBox from '../GuessBox';
import ResultsBoard from '../ResultsBoard/ResultsBoard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function onGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <ResultsBoard results={guesses}/>
      <GuessBox onGuess={onGuess} />
    </>
  );
}

export default Game;
