import { createSlice, nanoid } from '@reduxjs/toolkit';

const phonesInitialState = [];

const phoneSlice = createSlice({
  name: 'phones',
  initialState: phonesInitialState,
  reducers: {
    addPhone: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deletePhone(state, action) {
      const index = state.findIndex(phone => phone.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addPhone, deletePhone } = phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;
