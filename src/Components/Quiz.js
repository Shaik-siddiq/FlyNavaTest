import React, { useState, useEffect, useRef } from "react";
const Quiz = ({
  data,
  onAnswerUpdate,
  numberofQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);
  const nextClickHandler = (e) => {
    if (selected === " ") {
      return setError("Please select one option!");
    }
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberofQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };
  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  return (
    <>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <h2 className="mb-5">{data.question}</h2>
            <div className="control" ref={radiosWrapper}>
              {data.options.map((option, i) => {
                return (
                  <label className="radio has-background-light" key={i}>
                    <input
                      type="radio"
                      name="answer"
                      value={option}
                      onChange={changeHandler}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
            {error && <div className="has-text-danger">{error}</div>}
            <button
              className="btn btn-link is-medius is-fullwidth mt-4"
              onClick={nextClickHandler}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
