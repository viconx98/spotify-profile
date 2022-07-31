import Home from "../Home/Home";
import Login from "../Login/Login";
import "./App.css"
import {
  Routes,
  Route,
} from "react-router-dom";
import Profile from "../Profile/Profile";
import TopArtists from "../TopArtists/TopArtists";
import TopTracks from "../TopTracks/TopTracks";
import PostLogin from "../Login/PostLogin";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<PostLogin/>} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/profile" element={<Profile/>} />
          <Route path="/home/topartists" element={<TopArtists/>} />
          <Route path="/home/toptracks" element={<TopTracks/>} />
          <Route path="/home/recent" element={<h1>Recents</h1>} />
          <Route path="/home/playlists" element={<h1>Playlists</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;