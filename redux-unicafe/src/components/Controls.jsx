import { useDispatch } from "react-redux";
import { good, bad, ok, zero } from "/src/reducer";

const Controls = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(good())}>good</button>
      <button onClick={() => dispatch(ok())}>ok</button>
      <button onClick={() => dispatch(bad())}>bad</button>
      <button onClick={() => dispatch(zero())}>reset stats</button>
    </>
  );
};

export default Controls;
