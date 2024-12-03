import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dice: [{ faces: 6, result: 0 }]
};

export const diceSlice = createSlice({
  name: "dice",
  initialState,
  reducers: {
    roll: (state) => {
      state.dice.forEach((el) => {
        el.result = Math.trunc(Math.random() * el.faces + 1);
      });
    },
    reroll: (state, action) => {
      state.dice.forEach((el) => {
        el.result =
          el.result <= action.payload
            ? Math.trunc(Math.random() * el.faces + 1)
            : el.result;
      });
    },
    changeDiceNo: (state, action) => {
      const dices = Array.from({ length: action.payload }, () => ({
        faces: 6,
        result: 0
      }));
      state.dice = dices;
    }
  }
});

export const { roll, reroll, changeDiceNo } = diceSlice.actions;

export const selectDice = (state) => state.dice;

export default diceSlice.reducer;
