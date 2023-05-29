import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessBox from '../GuessBox';
import ResultsBoard from '../ResultsBoard/ResultsBoard';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
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
  const [gameState, setGameState] = React.useState({
    over: false, wins: false
  });

  const allGuessesDone = currentGuessNumber >= NUM_OF_GUESSES_ALLOWED;
  const isGameOver = gameState.over || allGuessesDone;

  function onGuess(guess) {
    if (allGuessesDone) {
      setGameState({ ...gameState, over: true });
      return;
    }

    const nextGuesses = [...guesses];
    nextGuesses[currentGuessNumber] = checkGuess(guess, answer);

    setGuesses(nextGuesses);
    setCurrentGuessNumber(currentGuessNumber + 1);

    if (guess === answer) {
      setGameState({ over: true, wins: true });
    }
  }

  return (
    <>
      <ResultsBoard results={guesses} />
      <GuessBox onGuess={onGuess} disabled={isGameOver} />
      {isGameOver && <GameOverBanner wins={gameState.wins} answer={answer} numGuesses={currentGuessNumber} />}
    </>
  );
}

export default Game;
