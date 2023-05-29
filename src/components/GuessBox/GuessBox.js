import React from 'react';
import { NUM_OF_LETTERS_IN_WORD } from '../../constants';


function GuessBox({ onGuess, disabled }) {
  const [guessTerm, setGuessTerm] = React.useState('');
  const pattern = /^[a-zA-Z]{5}$/;

  function onSubmit(ev) {
    ev.preventDefault();
    if (guessTerm.length !== NUM_OF_LETTERS_IN_WORD) {
      window.alert(`You need to submit only ${NUM_OF_LETTERS_IN_WORD}-letter words`);
      return;
    }

    onGuess(guessTerm);
    setGuessTerm('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input"
        type="text"
        value={guessTerm}
        disabled={disabled}
        onChange={(e) => setGuessTerm(e.target.value.toUpperCase())} />
    </form>
  );
}

export default GuessBox;
