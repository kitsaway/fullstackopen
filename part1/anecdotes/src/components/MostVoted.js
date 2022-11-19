const MostVoted = ({ anecdotes, votes }) => {
  const highestValue = Math.max(...votes);
  let highestValueIndex = votes.indexOf(highestValue);
  return (
    <>
      {highestValue > 0 ? (
        <>
          <h1>Anecdote with most votes</h1>
          <p>{anecdotes[highestValueIndex]}</p>
          <p>has {highestValue} votes</p>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MostVoted;
