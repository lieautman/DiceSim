import { theme1 } from "../../../theme/theme";
import Slider from "@mui/material/Slider";
import { changeDiceNo } from "../../../reduxStore/diceSlice";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { useState } from "react";

function NoOfDiceOptions() {
  const dispatch = useDispatch();
  const [noOfDiceMax, setNoOfDiceMax] = useState(20);
  const [sliderValue, setSliderValue] = useState(1);

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
          <p
            style={{
              width: "10vw"
            }}
          >
            No of dices max:
          </p>
          <TextField
            type="number"
            value={noOfDiceMax}
            style={{
              width: "10vw"
            }}
            onChange={(data) => {
              if (data.target.value > 80) {
                setNoOfDiceMax(noOfDiceMax);
                dispatch(changeDiceNo(noOfDiceMax));
                setSliderValue(noOfDiceMax);
              } else {
                setNoOfDiceMax(data.target.value);
                dispatch(changeDiceNo(data.target.value));
                setSliderValue(data.target.value);
              }
            }}
          ></TextField>
        </div>
        <Slider
          style={{
            color: theme1.textColor,
            width: "15vw"
          }}
          value={sliderValue}
          onChange={(data) => {
            dispatch(changeDiceNo(data.target.value));
            setSliderValue(data.target.value);
          }}
          defaultValue={20}
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
