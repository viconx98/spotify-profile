import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux"
import spotifyStore from "./spotifyStore"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={spotifyStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);