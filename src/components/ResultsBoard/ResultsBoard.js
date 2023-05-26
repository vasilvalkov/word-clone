import React from "react";
import Guess from '../Guess';

function ResultsBoard({ results = [] }) {
  return (
    <div className="guess-results">
      {
        results.map((result, index) => (
          <Guess key={index} letters={result} />
        ))
      }
    </div>
  );
}

export default ResultsBoard;
