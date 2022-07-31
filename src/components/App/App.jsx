import Home from "../Home/Home";
import Login from "../Login/Login";
import "./App.css"
import {
  Routes,
  Route,
} from "react-router-dom";
import Profile from "../Profile/Profile";
import TopArtists from "../TopArtists/TopArtists";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/profile" element={<Profile/>} />
          <Route path="/home/topartists" element={<TopArtists/>} />
          <Route path="/home/toptracks" element={<h1>Top Tracks</h1>} />
          <Route path="/home/recent" element={<h1>Recents</h1>} />
          <Route path="/home/playlists" element={<h1>Playlists</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;