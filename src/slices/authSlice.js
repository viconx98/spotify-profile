import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        accessToken: null,
        tokenType: null
    },
    reducers: {
        setToken(state, action) {
            state.accessToken = action.payload.access_token
            state.tokenType = action.payload.token_type 
        }
    }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer