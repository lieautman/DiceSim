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
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "40px"
      }}
    >
      {dices.map((el) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              margin: "1vw",
              padding: "10px",
              borderRadius: "10px"
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
