import Home from "../Home/Home";
import Login from "../Login/Login";
import "./App.css"
import {
  Routes,
  Route,
} from "react-router-dom";
import Profile from "../Profile/Profile";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/profile" element={<Login />} />
        </Route> */}
        <Route path="/" element={<Home />}>
          <Route path="/home/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;