import { useSelector,useDispatch } from "react-redux";

import { decrement, increment } from "../Store/reducer/Counter";

export function Counter() {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}