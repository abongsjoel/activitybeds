import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpanded: true,
};

const selectSidebarState = (rootState) => rootState.sidebar;
export const selectSidebarExpanded = (rootState) =>
  selectSidebarState(rootState).isExpanded;

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.isExpanded = !state.isExpanded;
    },
  },
});

export const { toggleSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
