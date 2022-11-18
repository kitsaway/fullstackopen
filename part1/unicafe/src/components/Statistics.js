import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;
  const stats = [
    {
      text: "good",
      value: good,
    },
    {
      text: "neutral",
      value: neutral,
    },
    {
      text: "bad",
      value: bad,
    },
    {
      text: "all",
      value: all,
    },
    {
      text: "average",
      value: average,
    },
    {
      text: "positive",
      value: positive + " %",
    },
  ];
  return (
    <>
      <h1>Statistics</h1>
      {all > 0 ? (
        stats.map((stat) => (
          <StatisticLine key={stat.text} text={stat.text} value={stat.value} />
        ))
      ) : (
        <p>No Feedback Given</p>
      )}
    </>
  );
};

export default Statistics;
