import { theme1 } from "../../../theme/theme";
import Slider from "@mui/material/Slider";
import { changeDiceNo } from "../../../reduxStore/diceSlice";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { useState } from "react";

function NoOfDiceOptions() {
  const dispatch = useDispatch();
  const [noOfDiceMax, setNoOfDiceMax] = useState(20);

  return (
    <div
      style={{
        color: theme1.textColor,
        textAlign: "center"
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            justifyContent: "center"
          }}
        >
          <p>No of dices max:</p>
          <TextField
            type="number"
            value={noOfDiceMax}
            style={{
              backgroundColor: theme1.textColor,
              width: "5vw"
            }}
            onChange={(data) => setNoOfDiceMax(data.target.value)}
          ></TextField>
        </div>
        <Slider
          style={{
            color: theme1.textColor,
            width: "15vw"
          }}
          onChange={(data) => dispatch(changeDiceNo(data.target.value))}
          defaultValue={1}
          min={noOfDiceMax - 20}
          max={noOfDiceMax}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
}

export default NoOfDiceOptions;
