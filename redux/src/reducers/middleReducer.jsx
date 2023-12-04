import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    numbers: [],
    average: null,
  },
  reducers: {
    addNumber: (state, action) => {
      state.numbers.push(action.payload);
      state.average = calculateAverage(state.numbers);
    },
    clearNumbers: (state) => {a
      state.numbers = [];
      state.average = null;
    },
  },
});

const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return numbers.length === 0 ? null : sum / numbers.length;
};

export const { addNumber, clearNumbers } = calculatorSlice.actions;
export default calculatorSlice.reducer;
