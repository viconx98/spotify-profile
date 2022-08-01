import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
    name: "uiSlice",
    initialState: {
        selectedTab: "profile",
        isLoading: false
    },
    reducers: {
        setSelectedTab(state, action) {
            state.selectedTab = action.payload
        },
        setIsLoading(state, action){
            state.isLoading = action.payload
        }
    }
})

export const { setSelectedTab, setIsLoading } = uiSlice.actions

export default uiSlice.reducer