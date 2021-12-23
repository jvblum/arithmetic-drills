export default function Input(props) {
  const { input, setInput, randomProblem, solution, incrementScore } = props;

  return (
    <input
      className="Input"
      type="text"
      size="4"
      maxlength="4"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          randomProblem();
          setInput("");
          if (solution === parseInt(input)) {
            // more complex scoring system can be implemented
            // based on perceived difficulty of the problem
            incrementScore();
          }
        }
      }}
    />
  );
}
