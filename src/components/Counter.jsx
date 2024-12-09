import { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Button = styled.button`
    background-color: ${(props) => (props.primary ? "blue" : "gray")};
    color: white;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.5em 1em;
    border: 2px solid ${(props) => (props.primary ? "blue" : "gray")};
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => (props.primary ? "darkblue" : "darkgray")};
    }
  `;

  return (
    <div className="card">
      <Button
        primary
        onClick={(event) => {
          setCount((count) => count + 1);
          console.log(event);
        }}
      >
        count is {count}
      </Button>
      <Button
        className="btn-blue"
        onClick={() => (count > 0 ? setCount((count) => count - 1) : 0)}
      >
        count is {count}
      </Button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default Counter;
