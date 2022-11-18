import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const buttons = [
    {
      text: "good",
      handleClick: () => {
        setGood(good + 1);
      },
    },
    {
      text: "neutral",
      handleClick: () => {
        setNeutral(neutral + 1);
      },
    },
    {
      text: "bad",
      handleClick: () => {
        setBad(bad + 1);
      },
    },
  ];
  return (
    <>
      <h1>Give Feedback</h1>
      {buttons.map((button) => (
        <Button
          key={button.text}
          text={button.text}
          handleClick={button.handleClick}
        />
      ))}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
