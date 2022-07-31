import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        token: null
    },
    reducers: {
        setToken(state, action) {
                
        }
    }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer