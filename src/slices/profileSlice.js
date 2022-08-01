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
            state.user.following = action.payload
        },

        setPlaylists(state, action) {
            state.user.playlists = action.payload
        }
    }
})

export const { setUser, setUserTopArtists, setUserTopTracks, setIsLoading, setFollowing, setPlaylists } = profileSlice.actions

export default profileSlice.reducer