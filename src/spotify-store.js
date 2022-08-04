import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./slices/UISlice";
let spotifyStore = configureStore({ reducer: { ui: UIReducer } });

export default spotifyStore;