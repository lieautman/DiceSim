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
        alignItems: "center"
      }}
    >
      {history.map((el) => {
        return (
          <button
            style={{
              backgroundColor: "white",
              textAlign: "center",
              margin: "1vw",
              padding: "10px",
              cursor: "pointer",
              borderRadius: "10px"
            }}
          >
            aaa
          </button>
        );
      })}
    </div>
  );
}

export default HistoryBar;
