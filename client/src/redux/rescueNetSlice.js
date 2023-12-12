import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
};

export const rescueNetSlice = createSlice({
  name: "rescueNet",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { addUser, removeUser } = rescueNetSlice.actions;
export default rescueNetSlice.reducer;
