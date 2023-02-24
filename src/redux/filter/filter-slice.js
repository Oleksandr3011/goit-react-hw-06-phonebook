import { createSlice } from '@reduxjs/toolkit';


export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContactsAction(_, { payload }) {
      return payload;
    },
  },
});
export const { filterContactsAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
