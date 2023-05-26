import React from "react";

function ResultsBoard({results = []}) {
  return (
    <div className="guess-results">
      {
        results.map((result, index) => (
          <p key={index} className="guess">{result}</p>
        ))
      }
    </div>
  );
}

export default ResultsBoard;
