import { theme1 } from "../../theme/theme";
import { useSelector } from "react-redux";
import { selectHistory } from "../../reduxStore/diceSlice";

function HistoryBar() {
  const history = useSelector(selectHistory);
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
      {history.map((el, index) => {
        return (
          <button
            style={{
              backgroundColor: "white",
              textAlign: "center",
              margin: "0.5vw",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "10px"
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
