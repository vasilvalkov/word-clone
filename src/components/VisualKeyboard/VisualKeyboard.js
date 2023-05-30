import React from "react";
import { keysStates } from "../../game-helpers";
import styles from './VisualKeyboard.module.css';

function VisualKeyboard({ guesses = [] }) {
  const letterStatuses = keysStates();
  guesses.flat().forEach((guess) => {
    letterStatuses[guess.letter] = guess.status;
  });

  return (
    <section className={styles.keyboard}>
      {
        Object.entries(letterStatuses).map(([letter, status]) => {
          const className = status ? `${styles.key} ${styles[status]}` : styles.key;

          return <div key={letter} className={className}>{letter}</div>
        })
      }
    </section>
  );
}

export default VisualKeyboard;
