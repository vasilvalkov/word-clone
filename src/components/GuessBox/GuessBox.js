import React from 'react';


function GuessBox({ onGuess }) {
  const [guessTerm, setGuessTerm] = React.useState('');
  const wordLength = 5;
  const pattern = /[a-zA-Z]{5}/;

  function onSubmit(ev) {
    ev.preventDefault();
    if (guessTerm.length !== wordLength) {
      window.alert(`You need to submit only ${wordLength}-letter words`);
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
        patter={pattern}
        onChange={(e) => setGuessTerm(e.target.value.toUpperCase())} />
    </form>
  );
}

export default GuessBox;
