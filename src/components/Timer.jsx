import useTimer from "../hooks/useTimer";

export default function Timer(props) {
  const {
    time,
    startTimer,
    resetTimer,
    pauseTimer,
    intervalMaster
  } = useTimer();
  const { resetScore, score, randomProblem } = props;
  return (
    <div className="Timer">
      <h1>{time}</h1>
      {/* {intervalMaster && <button onClick={() => pauseTimer()}>pause</button>} */}
      {intervalMaster && props.children}
      {!intervalMaster && (
        <>
          <button
            onClick={() => {
              startTimer();
              resetScore();
              randomProblem();
            }}
          >
            start
          </button>
          <br />
          <div>{`score: ${score}`}</div>
        </>
      )}
      {/* <button onClick={() => resetTimer()}>reset</button> */}
    </div>
  );
}
