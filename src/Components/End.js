import React, { useEffect, useState } from "react";
import { FormatTime } from "../formatTime/FormatTime";
const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3>Your results</h3>
          <p>
            {correctAnswers} of {data.length}
          </p>
          <p>
            <strong>{Math.floor(correctAnswers / data.length)}</strong>
          </p>
          <p>
            <strong>your time:</strong>
            {<FormatTime time={time} />}
          </p>
          <button className="btn btn-info mr-2" onClick={onAnswersCheck}>
            Check your answers
          </button>
          <button className="btn btn-sucess mr-2" onClick={onReset}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default End;
