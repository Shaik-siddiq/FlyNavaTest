import React from "react";
import { InputGroup, FormLabel } from "react-bootstrap";
const SingleQuestion = ({ question, option }) => {
  return (
    <div className="form-check">
      <h1>{question}</h1>
      <InputGroup.Radio name="flexRadioDefault" id="flexRadioDefault1" />
      <FormLabel for="flexRadioDefault1">{option}</FormLabel>
    </div>
  );
};

export default SingleQuestion;
