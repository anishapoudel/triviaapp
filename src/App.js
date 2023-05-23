import React, { useState, useEffect } from "react";
import Question from "./Question.js";
import "./App.css";

// import { useState } from "react";

function App() {
  const [triviaData, setTriviaData] = useState([]);
  const [text, setText] = useState([]);
  const [category, setCategory] = useState([]);

  const handleSubmit = () => {
    fetch(
      `https://opentdb.com/api.php?amount=${text}&category=9&difficulty=medium&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => setTriviaData(data.results))
      .catch((error) => console.log("Error: ", error));
  };

  useEffect(() => {
    console.log(triviaData);
  }, [triviaData]);

  return (
    <div className="page">
      <header>
        <div className="title">
          <h1>Trivia Quiz</h1>
        </div>
        <label for="string">Number of Questions: </label>
        <input
          id="string"
          placeholder="Integer 1-50"
          type="string"
          onChange={(event) => setText(event.target.value)}
        ></input>
        <div>
          <div className="categories">
            <p>Category List:</p>
            <ol>1. General Knowledge</ol>
            <ol>2. Books</ol>
            <ol>3. Film</ol>
            <ol>4. Music</ol>
            <ol>5. Musical & Theatres</ol>
            <ol>6. TV</ol>
            <ol>7. Video Games</ol>
            <ol>8. Board Games</ol>
            <ol>9. Science & Nature</ol>
            <ol>10. Computers </ol>
          </div>

          <label for="string"> Category: </label>
          <input
            id="string"
            placeholder="Interger 1-10"
            type="string"
            onChange={(event) => setCategory(event.target.value)}
          ></input>
          <button class="fa fa-search" type="submit" onClick={handleSubmit}>
            GO!
          </button>
        </div>
      </header>

      {triviaData.length === 0 ? (
        <p> No questions available at this time.</p>
      ) : (
        <div>
          {triviaData.map((item, index) => (
            <Question
              key={index}
              question={item.question}
              correct={item.correct_answer}
              incorrect={item.incorrect_answers}
            />
          ))}
        </div>
      )}

      <label for="string">More Questions? </label>
      <input
        id="string"
        placeholder="Integer 1-50"
        type="string"
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button class="fa fa-search" type="submit" onClick={handleSubmit}>
        GO!
      </button>
    </div>
  );
}
export default App;
