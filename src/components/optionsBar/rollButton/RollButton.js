import { roll } from "../../../reduxStore/diceSlice";
import { useDispatch } from "react-redux";
function RollButton() {
  const dispatch = useDispatch();

  return (
    <button
      style={{
        bottom: "10px",
        width: "10vw",
        height: "10vh",
        marginLeft: "5vw",
        marginTop: "2vh",
        marginBottom: "2vh",
        borderRadius: "10px",
        cursor: "pointer"
      }}
      onClick={() => dispatch(roll())}
    >
      ROLL
    </button>
  );
}

export default RollButton;
