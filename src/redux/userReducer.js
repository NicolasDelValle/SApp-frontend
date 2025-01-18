import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    saveUser(state, action) {},
  },
});

const { actions, reducer } = userSlice;
export const { saveUser } = actions;
export default reducer;
