import {createSlice} from "@reduxjs/toolkit"

const propertySlice =  createSlice({
name:"property",
initialState:{
    propertyList : []
},
reducers :{
    getPropertyList:(state,action) => {
      state.propertyList = action.payload  
    }
}
})
export const {getPropertyList}  = propertySlice.actions 
export default propertySlice.reducer