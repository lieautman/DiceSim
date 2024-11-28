import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dice: [
    { faces: 6, result: 0 },
    { faces: 6, result: 0 }
  ]
};

export const diceSlice = createSlice({
  name: "dice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = diceSlice.actions;

export const selectDice = (state) => state.dice;

export default diceSlice.reducer;
