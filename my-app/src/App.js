import "./index.css";
import Screen from "./components/Screen";
import Wrapper from "./components/Wrapper";

import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <div >
      <Wrapper>
        <h1>My Name Is janth niroshan</h1>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </div>
  );
}

export default App;
