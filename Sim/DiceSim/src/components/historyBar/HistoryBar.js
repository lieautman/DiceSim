import { theme1 } from "../../theme/theme";
import { useSelector } from "react-redux";
import { selectHistory } from "../../reduxStore/diceSlice";

function HistoryBar() {
  const history = useSelector(selectHistory);
  console.log("ceva", history);
  return (
    <div
      style={{
        backgroundColor: theme1.boxColor,
        height: "15vh",
        width: "80vw"
      }}
    ></div>
  );
}

export default HistoryBar;
