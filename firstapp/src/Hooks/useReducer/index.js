import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "add_money") return { money: state.money + 10 };
  if (action.type === "reduce_money") return { money: state.money - 10 };
  return state;
};

const ReducerHook = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Wallet : {state.money}</h1>
      <button onClick={() => dispatch({ type: "add_money" })}>Add money</button>
      <button onClick={() => dispatch({ type: "reduce_money" })}>
        Reduce money
      </button>
    </div>
  );
};

export default ReducerHook;
