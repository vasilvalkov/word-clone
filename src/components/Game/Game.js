import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessBox from '../GuessBox';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  function onGuess(guess) {

    console.log({guess});
  }

  return (
    <GuessBox onGuess={onGuess} />
  );
}

export default Game;
