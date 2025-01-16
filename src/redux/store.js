import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: { users: userReducer },
});

export default store;
