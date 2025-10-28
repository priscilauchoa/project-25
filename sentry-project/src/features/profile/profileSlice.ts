import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  firstName: string;
  // LastName: string;
}

const initialState: ProfileState = {
  firstName: "",
  // LastName: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.firstName = "Priscila";
    //   state.LastName = "Priscila";
    // },
    addNewProfile: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
      // state.LastName = action.payload;
    },
    deleteProfile: (state) => {
      state.firstName = "";
      // state.LastName = "";
    },
    // selectProfile: (state) => {
    //   state.firstName ;
    //   // state.LastName = "";
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addNewProfile, deleteProfile } = profileSlice.actions;

export default profileSlice.reducer;
