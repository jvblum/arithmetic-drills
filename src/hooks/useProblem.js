import { useState } from "react";
import { randomNumber } from "../helpers/helpers";
export default function useProblem() {
  const [problem, setProblem] = useState({
    n1: randomNumber(40) - 20,
    n2: randomNumber(40) - 20
  });
  const [input, setInput] = useState("");
  const [operation, setOperation] = useState(randomNumber(3) - 1);
  const operations = ["+", "-", "x", "/"];
  const calculations = {
    "+": problem.n1 + problem.n2,
    "-": problem.n1 - problem.n2,
    x: problem.n1 * problem.n2
    // "/": problem.n1 / problem.n2
  };
  const operator = operations[operation];

  const randomOperators = () => {
    setOperation(randomNumber(3) - 1);
  };

  const randomOperands = () => {
    setProblem({
      n1: randomNumber(40) - 20,
      n2: randomNumber(40) - 20
    });
  };

  const randomProblem = () => {
    randomOperands();
    randomOperators();
  };

  const evaluate = () => {
    return solution === parseInt(input);
  };

  const solution = calculations[operator];
  return {
    problemDisplay: { n1: problem.n1, operator, n2: problem.n2 },
    // problemDisplay: `(${problem.n1}) ${operator} (${problem.n2})`,
    solution,
    input,
    setInput,
    randomProblem,
    evaluate
  };
}
