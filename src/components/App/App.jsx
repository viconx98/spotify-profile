import Home from "../Home/Home";
import Login from "../Login/Login";
import "./App.css"
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/profile" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;