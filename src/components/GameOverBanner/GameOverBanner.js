import React from "react";

function GameOverBanner({ wins, answer, numGuesses }) {
  return (
    <div className={`${wins ? 'happy' : 'sad'} banner`}>
      <p>
        {
          wins ?
            <>
              <strong>Congratulations!</strong> Got it in {' '}
              <strong>{numGuesses} guesses</strong>.
            </>
            :
            <>Sorry, the correct answer is <strong>{answer}</strong>.</>
        }
      </p>
    </div>
  );
}

export default GameOverBanner;
