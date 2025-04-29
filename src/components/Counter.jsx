import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Slices/counterSlice";
export function Counter() {
  //Now we can use the React Redux hooks to let React components interact with the Redux store.
  // We can read data from the store with useSelector, and dispatch actions using useDispatch.
  const count = useSelector((state) => state?.counter?.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}> Decrement</button>
      <h4>{count}</h4>
    </div>
  );
}
