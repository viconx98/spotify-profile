import { createSlice } from "@reduxjs/toolkit";

let UISlice = createSlice(
    {
        name: 'UISlice',
        initialState: {
            curTab: 'profile',
        },
        reducers: {
            setCurTab(state, action) {
                state.curTab = action.payload;
            }
        }
    }
);
export const { setCurTab } = UISlice.actions;
export default UISlice.reducer;