import useProblem from "../hooks/useProblem";

export default function Problem(props) {
  const { problem, randomProblem, solution } = props;
  return (
    <div className="Problem">
      <header>
        <span className="left">{problem.n1}</span>
        <span className="center">{problem.operator}</span>
        <span className="right">{problem.n2}</span>
      </header>
      {/* <header>{problem}</header> */}
      {/* <button
        onClick={() => {
          randomProblem();
        }}
      >
        random
      </button> */}

      {/* <p>{solution}</p> */}
    </div>
  );
}
