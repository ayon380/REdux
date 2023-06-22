import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
const initialState = {
  navItem: "home",
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    changestate: (state, action) => {
      state.navItem = action.payload;
      console.log(state.navItem);
      
    },
  },
});

export const { changestate } = navSlice.actions;
export default navSlice.reducer;
