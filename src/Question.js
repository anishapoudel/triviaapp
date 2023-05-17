import React, { useEffect, useState } from "react";

function Question({ counter = 0, category, question, correct, incorrect }) {
  const options = [...incorrect, correct];

  const [clickedAnswer, setClickedAnswer] = useState(null);
  //   const [counter, setCounter] = useState(null);

  function checkIfCorrect(answer) {
    if (answer !== clickedAnswer) {
      return "";
    } else {
      if (answer === correct) {
        counter = counter + 1;
        return "green";
      } else {
        return "red";
      }
    }
  }
  function handleAnswerClick(answer) {
    if (clickedAnswer === null) {
      setClickedAnswer(answer);
    }
  }

  return (
    <div>
      <h4>{category}</h4>
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
      <ul>
        {options.map((answer, index) => (
          <ul key={index}>
            <button
              style={{ backgroundColor: checkIfCorrect(answer) }}
              onClick={() => handleAnswerClick(answer)}
            >
              {" "}
            </button>{" "}
            {answer}
          </ul>
        ))}
      </ul>
      {/* {counter} */}
    </div>
  );
}
export default Question;
