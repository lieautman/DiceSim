import { roll } from "../../../reduxStore/diceSlice";
import { useDispatch } from "react-redux";
function RollButton() {
  const dispatch = useDispatch();

  return (
    <button
      style={{
        position: "absolute",
        bottom: "10px",
        width: "20vw",
        height: "10vh"
      }}
      onClick={() => dispatch(roll())}
    >
      ROLL
    </button>
  );
}

export default RollButton;
