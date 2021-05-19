import React, { useState, useEffect } from "react";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import quizData from "./Questions.json";
import "./App.css";
import End from "./Components/End";
import Result from "./Components/Result";

let interval;

function App() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [time, setTime] = useState(0);
  const quizStateHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);
  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };
  return (
    <div className="App">
      {step === 1 && <Start onQuizStart={quizStateHandler} />}
      {step === 2 && (
        <Quiz
          data={quizData.Questions[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberofQuestions={quizData.Questions.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <End
          results={answers}
          data={quizData.Questions}
          onReset={resetClickHandler}
          onAnswersCheck={() => {
            setShowModal(true);
          }}
          time={time}
        />
      )}
      {showModal && (
        <Result
          onClose={() => {
            setShowModal(false);
          }}
          data={quizData.Questions}
          results={answers}
        />
      )}
    </div>
  );
}

export default App;
