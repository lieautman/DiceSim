import { useState } from "react";
import { theme1 } from "../../theme/theme";
import { useSelector } from "react-redux";
import { selectDice } from "../../reduxStore/diceSlice";

function DiceBox() {
  const [noOfDices, setNoOfDices] = useState([
    { noOfFaces: 6 },
    { noOfFaces: 6 }
  ]);
  const dice = useSelector(selectDice);
  console.log("ceva", dice);
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
      {noOfDices.map((dice) => {
        return (
          <div
            style={{
              backgroundColor: "white",
              margin: "1vw",
              padding: "10px",
              borderRadius: "10px"
            }}
          >
            {Math.trunc(Math.random() * dice.noOfFaces + 1)}
          </div>
        );
      })}
    </div>
  );
}

export default DiceBox;
