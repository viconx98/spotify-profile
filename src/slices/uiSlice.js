import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: "uiSlice",
    initialState: {
        selectedTab: "profile"
    },
    reducers: {
        setSelectedTab(state, action) {
            state.selectedTab = action.payload
        }
    }
})

export const { setSelectedTab } = uiSlice.actions

export default uiSlice.reducer