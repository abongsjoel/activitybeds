import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../redux/sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default store;
