import React from "react";

function Guess({ slots = [] }) {
  return (
    <p className="guess">
      {
        slots.map((slot, i) => {
          const classes = ['cell'];
          slot && classes.push(slot.status);
          return <span key={i} className={classes.join(' ')}>{slot.letter}</span>
        })
      }
    </p>
  );
}

export default Guess;
