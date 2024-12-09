import { reroll } from "../../../reduxStore/diceSlice";
import { useDispatch } from "react-redux";
function RerollButtons() {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: "40vh",
        width: "20vw",
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <button
        style={{
          width: "8vw",
          height: "10vh",
          marginLeft: "1vw",
          borderRadius: "10px",
          cursor: "pointer"
        }}
        onClick={() => dispatch(reroll(1))}
      >
        Reroll 1
      </button>
      <button
        style={{
          width: "8vw",
          height: "10vh",
          marginLeft: "1vw",
          borderRadius: "10px",
          cursor: "pointer"
        }}
        onClick={() => dispatch(reroll(2))}
      >
        Reroll 2
      </button>
      <button
        style={{
          width: "8vw",
          height: "10vh",
          marginLeft: "1vw",
          borderRadius: "10px",
          cursor: "pointer"
        }}
        onClick={() => dispatch(reroll(3))}
      >
        Reroll 3
      </button>
      <button
        style={{
          width: "8vw",
          height: "10vh",
          marginLeft: "1vw",
          borderRadius: "10px",
          cursor: "pointer"
        }}
        onClick={() => dispatch(reroll(4))}
      >
        Reroll 4
      </button>
      <button
        style={{
          width: "8vw",
          height: "10vh",
          marginLeft: "1vw",
          borderRadius: "10px",
          cursor: "pointer"
        }}
        onClick={() => dispatch(reroll(5))}
      >
        Reroll 5
      </button>
      <button
        style={{
          width: "8vw",
          height: "10vh",
          marginLeft: "1vw",
          borderRadius: "10px",
          cursor: "pointer"
        }}
        onClick={() => dispatch(reroll(6))}
      >
        Reroll 6
      </button>
    </div>
  );
}

export default RerollButtons;
