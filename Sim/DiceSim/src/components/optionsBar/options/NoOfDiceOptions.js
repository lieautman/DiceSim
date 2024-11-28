import { useSelector } from "react-redux";
import { selectDice } from "../../../reduxStore/diceSlice";
import { theme1 } from "../../../theme/theme";
import Slider from "@mui/material/Slider";
import { changeDiceNo } from "../../../reduxStore/diceSlice";
import { useDispatch } from "react-redux";

function NoOfDiceOptions() {
  const dices = useSelector(selectDice);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        color: theme1.textColor,
        textAlign: "center"
      }}
    >
      <div>
        <p>No of dices: {dices.length}</p>
        <Slider
          style={{
            color: theme1.textColor,
            width: "15vw"
          }}
          onChange={(data) => dispatch(changeDiceNo(data.target.value))}
          defaultValue={1}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
}

export default NoOfDiceOptions;
