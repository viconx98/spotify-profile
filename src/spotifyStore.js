import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice"

const spotifyStore = configureStore({
    reducer: {
        ui: uiReducer
    }
})

export default spotifyStore