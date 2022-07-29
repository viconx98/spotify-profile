import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import spotifyStore from './spotify-store';
import { Provider } from 'react-redux';
// import your route components too

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={spotifyStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);