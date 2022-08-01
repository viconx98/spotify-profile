import { createSlice } from "@reduxjs/toolkit"

const profileSlice = createSlice({
    name: "profileSlice",
    initialState: {
        user: null,
        userTopArtists: null,
        userTopTracks: null,
        userFollowing: 0,
        userPlaylists: 0,
        isLoading: true
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            state.user.following = 0
            state.user.playlists = 0
        },

        setUserTopArtists(state, action) {
            state.userTopArtists = action.payload
        },

        setUserTopTracks(state, action) {
            state.userTopTracks = action.payload
        },

        setIsLoading(state, action) {
            state.isLoading = action.payload
        },

        setFollowing(state, action) {
            state.userFollowing = action.payload
        },

        setPlaylists(state, action) {
            state.userPlaylists = action.payload
        }
    }
})

export const profileActions = {
    ...profileSlice.actions
}

export default profileSlice.reducer