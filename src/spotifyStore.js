import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice"
import topArtistsReducer from "./slices/topArtistsSlice"
import topTracksReducer from "./slices/topTracksSlice"
import profileReducer from "./slices/profileSlice"
import authReducer from "./slices/authSlice"
import recentReducer from "./slices/recentSlice"
import playlistReducer from "./slices/playlistSlice";

const spotifyStore = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        profile: profileReducer,
        topArtists: topArtistsReducer,
        topTracks: topTracksReducer,
        recent: recentReducer,
        playlist: playlistReducer
    }
})

export default spotifyStore