function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const pointPercent = (points / maxPoints) * 100;

  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPoints} That is
        {"  "}
        {Math.ceil(pointPercent)}%
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button className="btn" onClick={() => dispatch({ type: "restart" })}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
