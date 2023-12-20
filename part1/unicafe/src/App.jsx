/* eslint-disable react/prop-types */
import { useState } from "react";
const Button = (props) => {
  return (
    <button onClick={() => props.onClick((a) => a + 1)}>{props.text}</button>
  );
};

const Feedback = (props) => {
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={props.handleGood} text={"good"} />
      <Button onClick={props.handleNeutral} text="neutral" />
      <Button onClick={props.handleBad} text="bad" />
    </div>
  );
};

const StatisticLine = ({ text, count }) => (
  <tr>
    <td>{text}</td>
    <td>{count}</td>
  </tr>
);

const Statistic = ({ good, neutral, bad }) => {
  const totalCount = good + neutral + bad;
  const average = (good - bad) / totalCount;
  const positive = (good / totalCount) * 100 + "%";
  return (
    <>
      {totalCount === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" count={good} />
            <StatisticLine text="neutral" count={neutral} />
            <StatisticLine text="bad" count={bad} />
            <StatisticLine text="total" count={totalCount} />
            <StatisticLine text="average" count={average} />
            <StatisticLine text="positive" count={positive} />
          </tbody>
        </table>
      )}
    </>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <>
      <Feedback
        handleGood={setGood}
        handleNeutral={setNeutral}
        handleBad={setBad}
      />

      <Statistic good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
