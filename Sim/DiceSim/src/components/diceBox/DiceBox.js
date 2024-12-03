import { theme1 } from "../../theme/theme";
import { useSelector } from "react-redux";
import { selectDice } from "../../reduxStore/diceSlice";

function DiceBox() {
  const dices = useSelector(selectDice);
  return (
    <div
      style={{
        backgroundColor: theme1.boxColor,
        height: "90vh",
        width: "70vw",
        marginTop: "5vh",
        marginLeft: "5vw",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "40px",
        overflow: "hidden"
      }}
    >
      {dices.map((el) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              textAlign: "center",
              paddingTop: "2vh",
              paddingBottom: "2vh",
              margin: "1vw",
              flex: "0 0 calc(5vw)"
            }}
          >
            {el.result}
          </div>
        );
      })}
    </div>
  );
}

export default DiceBox;
