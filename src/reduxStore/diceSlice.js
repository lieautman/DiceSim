import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dice: [{ faces: 6, result: 0 }],
  history: []
};

export const diceSlice = createSlice({
  name: "dice",
  initialState,
  reducers: {
    roll: (state) => {
      state.history.push(state.dice);
      state.dice.forEach((el) => {
        el.result = Math.trunc(Math.random() * el.faces + 1);
      });
    },
    reroll: (state, action) => {
      state.history.push(state.dice);
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
    },
    setDice: (state, action) => {
      state.dice = action.payload;
    }
  }
});

export const { roll, reroll, changeDiceNo, setDice } = diceSlice.actions;

export const selectDice = (state) => state.dice;
export const selectHistory = (state) => state.history;

export default diceSlice.reducer;
