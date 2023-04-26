import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "property",
  initialState: {
    propertyList: [],
    selectedProperty: {},
  },
  reducers: {
    getPropertyList: (state, action) => {
      state.propertyList = action.payload;
    },
    getSelectedProperty:(state,action) => {
      state.selectedProperty = action.payload
    }
  },
});
export const { getPropertyList,getSelectedProperty } = propertySlice.actions;
export default propertySlice.reducer;
