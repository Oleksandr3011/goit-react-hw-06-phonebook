import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContactsAction: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    delateContactsAction: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});
export const { addContactsAction, delateContactsAction } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
