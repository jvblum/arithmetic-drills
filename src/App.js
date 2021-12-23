import "./styles.scss";
import Problem from "./components/Problem";
import Input from "./components/Input";
import Timer from "./components/Timer";
import useProblem from "./hooks/useProblem";
import useScore from "./hooks/useScore";

export default function App() {
  const {
    problemDisplay,
    randomProblem,
    solution,
    input,
    setInput,
    evaluate
  } = useProblem();
  const { score, incrementScore, resetScore } = useScore();
  return (
    <div className="App">
      <Timer
        resetScore={resetScore}
        score={score}
        randomProblem={randomProblem}
      >
        <Problem problem={problemDisplay} randomProblem={randomProblem} />
        <br />
        <Input
          input={input}
          setInput={setInput}
          randomProblem={randomProblem}
          solution={solution}
          incrementScore={incrementScore}
          evaluate={evaluate}
        />
      </Timer>
      <br />
    </div>
  );
}
