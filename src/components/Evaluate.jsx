import { useState } from "react";
export default function Evaluate(props) {
  const [correct, setCorrect] = useState(null);
  const { solution, input } = props;
  const evaluate = () => parseInt(input) === solution;
}
