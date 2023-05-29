import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessBox from '../GuessBox';
import ResultsBoard from '../ResultsBoard/ResultsBoard';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess, initGameBoard } from '../../game-helpers';

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [guesses, setGuesses] = React.useState(() => initGameBoard());
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

  function restartGame() {
    setAnswer(() => sample(WORDS));
    setGuesses(() => initGameBoard());
    setCurrentGuessNumber(0);
    setGameState({ over: false, wins: false });
  }

  return (
    <>
      <ResultsBoard results={guesses} />
      <GuessBox onGuess={onGuess} disabled={isGameOver} />
      {isGameOver && <GameOverBanner
        wins={gameState.wins}
        answer={answer}
        numGuesses={currentGuessNumber}
        onRestart={restartGame}
      />}
    </>
  );
}

export default Game;
