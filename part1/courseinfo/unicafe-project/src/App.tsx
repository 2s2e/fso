import { useState } from "react";

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
};

type ButtonProps = {
  onClick: () => void;
  text: string;
};

type StatisticLineProps = {
  text: string;
  value: number;
};
const StatisticLine = (props: StatisticLineProps) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </tr>
    </tbody>
  );
};

const Statistics = (props: StatisticsProps) => {
  if (props.good + props.neutral + props.bad === 0)
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  else {
    return (
      <div>
        <table>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="Neutral" value={props.neutral} />
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
