// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, multiply, divide } from '../reducers/calculatorReducer';

// function Calculator() {
//     const dispatch = useDispatch()
//     const counterValue = useSelector((state) => state.counter.value)
//     return (
//         <div>
//             <h3>Calculator:</h3>
//             <p>Counter Value: {counterValue}</p>
//             <button onClick={() => dispatch(increment(4))}>+4</button>
//             <button onClick={() => dispatch(decrement(4))}>-4</button>
//             <button onClick={() => dispatch(multiply(2))}>*2</button>
//             <button onClick={() => dispatch(divide(2))}>/2</button>
//         </div>
//     )
// }

// export default Calculator
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addition,
  subtraction,
  multiplication,
  division,
} from "../reducers/calculatorReducer";

export function Calculator() {
  const sum = useSelector(state => state.calculator.value)
  const dispatch = useDispatch();
  const [first, setfirst] = useState("");
  const [second, setsecond] = useState("");
  return (
    <div>
      <div>
        <h3>Calculator</h3>

        <label htmlFor="">Input First: </label>
        <input
          type="text"
          placeholder="Enter First Number"
          onChange={(e) => setfirst(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Input Second: </label>
        <input
          type="text"
          placeholder="Enter Second Number"
          onChange={(e) => setsecond(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() => dispatch(addition({ val1: first, val2: second }))}
        >
          Increment{" "}
        </button>
        <button
          onClick={() => dispatch(subtraction({ val1: first, val2: second }))}
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch(multiplication({ val1: first, val2: second }))
          }
        >
          Multiply
        </button>
        <button
          onClick={() => dispatch(division({ val1: first, val2: second }))}
        >
          Divide
        </button>
        <br />
        <br />
        <span>Result: {sum}</span>
      </div>
    </div>
  );
}