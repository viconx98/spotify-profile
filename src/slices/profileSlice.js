import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        user: null,
        userTopArtists: null, 
        userTopTracks: null,
        userExtra: null,
        isLoading: true
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },

        setUserTopArtists(state, action) {
            state.userTopArtists = action.payload
        },

        setUserTopTracks(state, action) {
            state.userTopTracks = action.payload
        },

        setIsLoading(state, action) {
            state.isLoading = action.payload
        }
    }
})

export const { setUser, setUserTopArtists, setUserTopTracks, setIsLoading } = profileSlice.actions

export default profileSlice.reducer