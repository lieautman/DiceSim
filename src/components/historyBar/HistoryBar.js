import { theme1 } from "../../theme/theme";
import { useSelector } from "react-redux";
import { selectHistory } from "../../reduxStore/diceSlice";
import { setDice } from "../../reduxStore/diceSlice";
import { useDispatch } from "react-redux";

function HistoryBar() {
  const history = useSelector(selectHistory);
  const dispatch = useDispatch();
  return (
    <div
      style={{
        backgroundColor: theme1.boxColor,
        height: "15vh",
        width: "80vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        overflow: "scroll",
        overflowY: "hidden"
      }}
    >
      {history.toReversed().map((el, index) => {
        return (
          <button
            key={"history_" + index}
            style={{
              backgroundColor: "white",
              textAlign: "center",
              margin: "0.5vw",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "10px"
            }}
            onClick={() => {
              dispatch(setDice(el));
            }}
          >
            {history.length - index}
          </button>
        );
      })}
    </div>
  );
}

export default HistoryBar;
