import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        user: null
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

export const { setUser } = profileSlice.actions

export default profileSlice.reducer