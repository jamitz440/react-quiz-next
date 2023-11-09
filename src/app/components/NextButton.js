function NextButton({ dispatch, answer, index, maxQuestions }) {
  if (answer === null) return null;

  if (index < maxQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next Question
      </button>
    );
  }
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      Check Score
    </button>
  );
}

export default NextButton;
